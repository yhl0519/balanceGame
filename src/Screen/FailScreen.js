import React, { useEffect, useState } from "react";
import { CommonActions } from "@react-navigation/native";
import { useSetRecoilState } from "recoil";
import { categoryState } from "../recoil/atome";
import { ManImg } from "@style/Components";
import { Container, Title, FailTxt, BtnLine, TouchBtn, BtnText } from '@style/Screen/FailScreen';
import API from "@api";

const FailScreen = ({ navigation }) => {
  const [contents, setContents] = useState(null);
  const setCategoryState = useSetRecoilState(categoryState);

  // 랜덤 벌칙 뽑기
  const _getFailItem = async () => {
    const res = await API.getFailItem()
    const ranNum = Math.floor(Math.random() * 5);
    setContents(res.Fail[ranNum]);
  }

  useEffect(() => {
    _getFailItem()
  }, []);

  const reStart = () => {
    navigation.dispatch(
      CommonActions.reset({
        routes: [{ name: "Home" }, { name: "Balance" }],
      })
    )
  }

  const goMain = () => {
    setCategoryState(null);
    navigation.navigate("Home");
  }

  return (
    <Container>
      <Title>벌칙타임</Title>
      <FailTxt>{contents}</FailTxt>
      <BtnLine>
        <TouchBtn onPress={reStart}>
          <BtnText>다시하기</BtnText>
        </TouchBtn>
        <TouchBtn onPress={goMain}>
          <BtnText>메인으로</BtnText>
        </TouchBtn>
      </BtnLine>

      <ManImg resizeMode="contain" source={require("@assets/img/man3.png")} />
    </Container>
  );
};

export default FailScreen;
