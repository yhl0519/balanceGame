import React from "react";
import { Alert, View } from "react-native";
import { useRecoilState } from "recoil";
import { categoryState } from "@recoil/atome";
import Modal from "react-native-modal";
import { Container, Title, ChoiceContainer, ChoiceItem, ChoiceText, TouchBtn, BtnText } from '@style/Screen/ChoiceModal'

const ChoiceModal = ({ navigation, modalVisible, setModalVisible }) => {
  const [category, setCategory] = useRecoilState(categoryState);

  const relationship = [
    { en: "friend", ko: "친한 친구사이" },
    { en: "couple", ko: "사랑하는 연인사이" },
    { en: "company", ko: "직장동료" }
  ]
  const ChoiceItemBox = () =>
    relationship.map((item, index) => (
      <ChoiceItem
        key={index}
        isChecked={category === item.en}
        onPress={() => setCategory(item.en)}
      >
        <ChoiceText isChecked={category === item.en}>
          {item.ko}
        </ChoiceText>
      </ChoiceItem>
    ))


  const leftBtn = {
    borderBottomLeftRadius: 10,
    borderRightColor: 'white',
    borderRightWidth: 0.5
  }
  const RightBtn = {
    borderBottomRightRadius: 10
  }

  // 게임시작 버튼
  const startBtnPress = () => {
    if (category === null) Alert.alert('서로의 관계를 선택해주세요.')
    else {
      setModalVisible(false);
      navigation.navigate("Balance");
    }
  }
  return (
    <Modal isVisible={modalVisible}>
      <Container>
        <View style={{ alignItems: "center" }}>
          <Title>서로의 관계를 선택해주세요</Title>
          <ChoiceContainer>
            <ChoiceItemBox />
          </ChoiceContainer>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchBtn
            style={leftBtn}
            onPress={() => setModalVisible(false)}
          >
            <BtnText>취소</BtnText>
          </TouchBtn>
          <TouchBtn
            style={RightBtn}
            onPress={startBtnPress}
          >
            <BtnText>시작하기</BtnText>
          </TouchBtn>
        </View>
      </Container>
    </Modal>

  );
};


export default ChoiceModal;
