import styled from 'styled-components/native';
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export const ManImg = styled.Image`
  position: absolute;
  bottom: -${hp('4%')}px;
  height: ${hp("35%")}px;
`;