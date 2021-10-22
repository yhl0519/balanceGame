import styled from 'styled-components/native';
import { Color, FontSize, Radius } from "@style";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${Color.mainColor};
`;

export const BgImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export const MainTextBox = styled.View`
  align-items: center;
`;

export const TopText = styled.Text`
  font-size: ${FontSize.Medium}px;
  font-weight: bold;
  color: #FFC4C4;
`;

export const AppName = styled.Text`
  font-size: ${FontSize.XLarge}px;
  font-weight:bold;
  color: white;
`;

export const StartBtn = styled.TouchableOpacity`
  background-color:${Color.buttonColor};
  padding: 18px 45px;
  border-width: 2px;
  border-color: ${Color.buttonBorder};
  border-radius: ${Radius.btnRadius}px;
  margin-top: 30px;
`;

export const StartText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: ${FontSize.XXSmall}px;
`;