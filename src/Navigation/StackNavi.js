import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "@screen/HomeScreen";
import Balance from "@screen/BalanceScreen";
import Fail from "@screen/FailScreen";

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Balance"
        component={Balance}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Fail"
        component={Fail}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;
