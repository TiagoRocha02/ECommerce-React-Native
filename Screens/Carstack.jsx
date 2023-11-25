import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cars from "./Cars";
import MakeDetails from "./MakeDetails";

const Stack = createNativeStackNavigator();

const config = {
  animation: "spring",
  config: {
    stiffness: 1000,
    damping: 2500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

export default function Carstack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
        name="Cars"
        component={Cars}
      />
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          title: "",
          headerShown: true,
          headerStyle: { backgroundColor: "#222" },
          headerTintColor: "white",
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
        name="MakeDetails"
        component={MakeDetails}
      />
    </Stack.Navigator>
  );
}
