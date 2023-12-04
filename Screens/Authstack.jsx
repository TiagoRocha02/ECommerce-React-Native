import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Login";
import Landing from "./Landing";
import SignUP from "./Signup";

const Stack = createNativeStackNavigator();

export default function Authstack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUP" component={SignUP} />
    </Stack.Navigator>
  );
}
