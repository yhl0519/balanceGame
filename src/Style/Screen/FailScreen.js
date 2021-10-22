import styled from 'styled-components/native';
import { Color, FontSize, Radius } from "@style";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${Color.darkBg};
`;

export const Title = styled.Text`
  font-size: ${FontSize.XLarge}px;
  color: white;
  font-weight: bold;
  text-align: center;
  margin-bottom: 50px;
  margin-top: ${hp("20%")}px;
`;

export const FailTxt = styled.Text`
  font-size: ${FontSize.Small}px;
  color: white;
  text-align: center;
`;

export const BtnLine = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 30px;
`;

export const TouchBtn = styled.TouchableOpacity`
  background-color: ${Color.buttonColor};
  padding: 17px 0;
  width: 40%;
  border-width: 2px;
  border-color: ${Color.buttonBorder};
  border-radius: ${Radius.btnRadius}px;
  margin-top: 30px;
`;

export const BtnText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: ${FontSize.XXSmall}px;
  text-align: center;
`;