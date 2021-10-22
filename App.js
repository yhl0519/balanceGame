import React from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Navi from "./src/Navigation/StackNavi";
import { RecoilRoot } from "recoil";

const App = () => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <RecoilRoot>
        <NavigationContainer>
          <Navi />
        </NavigationContainer>
      </RecoilRoot>
    </SafeAreaView>
  );
};

export default App;
