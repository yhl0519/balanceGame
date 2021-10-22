import React, { useState } from "react";
import { ManImg } from '@style/Components';
import { Container, BgImage, MainTextBox, TopText, AppName, StartBtn, StartText } from '@style/Screen/HomeScreen'
import ChoiceModal from "@screen/ChoiceModal";

const HomeScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Container>
      <BgImage
        source={require("@assets/img/bg_pattern.png")}
      >
        <MainTextBox>
          <TopText>선택장애 짜증 유발 시키는</TopText>
          <AppName>밸런스게임</AppName>
          <StartBtn
            onPress={() => setModalVisible(true)}
          >
            <StartText>시작하러가기</StartText>
          </StartBtn>
        </MainTextBox>
        <ManImg
          resizeMode="contain"
          source={require("@assets/img/man.png")}
        />
      </BgImage>

      <ChoiceModal navigation={navigation} modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </Container>
  );
};

export default HomeScreen;
