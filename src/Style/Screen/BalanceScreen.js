import styled from 'styled-components/native';
import { Color, FontSize, Radius } from "@style";
import * as Animatable from "react-native-animatable";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${Color.darkBg};
`;

export const TimerBox = styled.View`
  align-items: center;
  margin-top: 20px;
  margin-bottom: 15px;
`;

export const Sec = styled.Text`
  font-size: ${FontSize.XXLarge}px;
  font-weight: bold;
  color: white;
`;

export const MSec = styled.Text`
  font-size: ${FontSize.XLarge}px;
  font-weight: bold;
  color: #442E2E;
`;

export const ContentsBox = styled.TouchableOpacity`
  width: 90%;
  height: ${hp("18%")}px;
  background-color: #8B0000;
  align-self: center;
  border-width: 2px;
  border-color: ${Color.buttonBorder};
  border-radius: ${Radius.btnRadius}px;
  justify-content: center;
  padding: 0 20px;
`;

export const ContentsText = styled(Animatable.Text)`
  font-size: ${FontSize.Medium}px;
  font-weight: bold;
  color: white;
  text-align: center;
`;

export const VS = styled.Text`
  font-size: ${FontSize.Large}px;
  font-weight: bold;
  color: #564343;
  text-align: center;
  margin: 10px 0;
`;