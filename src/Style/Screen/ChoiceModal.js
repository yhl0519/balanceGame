import styled from 'styled-components/native';
import { Color, FontSize, Radius } from "@style";

export const Container = styled.View`
  background-color:white;
  width: 100%;
  border-radius: 10px;
`;

export const Title = styled.Text`
  font-size: ${FontSize.Small}px;
  font-weight: bold;
  margin-top: 20px;
`;

export const ChoiceContainer = styled.View`
  width: 100%;
`;

export const ChoiceItem = styled.TouchableOpacity`
  width: 80%;
  border-color: ${Color.mainColor};
  border-width: 3px;
  align-self: center;
  align-items: center;
  padding: 15px;
  border-radius: ${Radius.btnRadius}px;
  margin-top: 30px;
  background-color: ${({ isChecked }) => isChecked ? Color.mainColor : 'white'};
`;

export const ChoiceText = styled.Text`
  font-size: ${FontSize.XSmall}px;
  color: ${({ isChecked }) => isChecked ? 'white' : 'black'};
`;

export const TouchBtn = styled.TouchableOpacity`
  width: 50%;
  background-color: #212121;
  align-items: center;
  padding: 10px;
  margin-top: 40px;
`;

export const BtnText = styled.Text`
  font-size: ${FontSize.XSmall}px;
  color: white;
  font-weight: bold;
`;