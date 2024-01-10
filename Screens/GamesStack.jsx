import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Games from "./Games";
import GameDetails from "./GameDetails";

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

export default function GamesStack() {
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
        name="Games"
        component={Games}
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
        name="GameDetails"
        component={GameDetails}
      />
    </Stack.Navigator>
  );
}