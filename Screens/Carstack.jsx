import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cars from "./Cars";
import MakeDetails from "./MakeDetails";

const Stack = createNativeStackNavigator();

<<<<<<< HEAD
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
=======
>>>>>>> 3562b19c792d781794290b629527681e7450a4e5

export default function Carstack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
<<<<<<< HEAD
          transitionSpec: {
            open: config,
            close: config,
          },
=======
         
>>>>>>> 3562b19c792d781794290b629527681e7450a4e5
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
<<<<<<< HEAD
          transitionSpec: {
            open: config,
            close: config,
          },
=======
>>>>>>> 3562b19c792d781794290b629527681e7450a4e5
        }}
        name="MakeDetails"
        component={MakeDetails}
      />
    </Stack.Navigator>
  );
}
