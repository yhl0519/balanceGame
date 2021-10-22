import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { CommonActions } from "@react-navigation/native";
import Timer from "react-compound-timer";
import { useRecoilValue } from "recoil";
import { categoryState } from "@recoil/atome";
import { ManImg } from '@style/Components';
import { Container, TimerBox, Sec, MSec, ContentsBox, ContentsText, VS } from '@style/Screen/BalanceScreen'
import API from "@api";
import Tts from "react-native-tts";

const BalanceScreen = ({ navigation }) => {
  Tts.setDefaultLanguage("ko-KR");
  Tts.setDefaultVoice("ko-KR-SMTm01");
  Tts.setDefaultRate(2, true);
  Tts.setDefaultPitch(1.2);

  const Say = () => {
    Tts.stop();
    console.log(contents);
    Tts.speak(contents["1"]);
    Tts.speak(contents["2"]);
  };

  const category = useRecoilValue(categoryState);
  const [contents, setContents] = useState(null);


  // 랜덤 내용 뽑기
  const _getGameItem = async () => {
    const res = await API.getGameItem(category)
    const resContents = res.Contents;
    const ranNum = Math.floor(Math.random() * resContents.length);
    setContents(resContents[ranNum]);
  }

  useEffect(() => {
    if (category !== null) {
      _getGameItem()
    }
  }, []);


  // timer
  const TimerComp = () => (
    <TimerBox>
      <Timer
        initialTime={5 * 1000}
        direction="backward"
        timeToUpdate={10}
        checkpoints={[
          {
            time: 0,
            callback: () => navigation.navigate("Fail"),
          },
        ]}
      >
        <Text>
          <Sec>
            <Timer.Seconds />.
          </Sec>
          <MSec>
            <Timer.Milliseconds />
          </MSec>
        </Text>
      </Timer>
    </TimerBox>
  );

  const choice = () => {
    navigation.dispatch(
      CommonActions.reset({
        routes: [{ name: "Home" }, { name: "Balance" }],
      })
    );
  }

  // 내용 vs 내용
  const ContentsComp = () => (
    <>
      <ContentsBox onPress={choice}>
        <ContentsText
          animation="bounceInLeft"
          delay={300}
          duration={1000}
          direction="alternate"
        >
          {contents["1"]}
        </ContentsText>
      </ContentsBox>
      <VS>VS</VS>
      <ContentsBox onPress={choice}>
        <ContentsText
          animation="bounceInRight"
          delay={300}
          duration={1000}
          direction="alternate"
        >
          {contents["2"]}
        </ContentsText>
      </ContentsBox>
      <View onLayout={Say}></View>
    </>
  );
  return (
    <Container>
      {contents !== null ? (
        <>
          <TimerComp />
          <ContentsComp />
        </>
      ) : (
        <Text>wait</Text>
      )}
      <ManImg resizeMode="contain" source={require("@assets/img/man2.png")} />
    </Container>
  );
};


export default BalanceScreen;
