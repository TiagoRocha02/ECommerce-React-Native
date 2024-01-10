import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cars from "./Cars";
import MakeDetails from "./MakeDetails";

const Stack = createNativeStackNavigator();


export default function Carstack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
         
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
        }}
        name="MakeDetails"
        component={MakeDetails}
      />
    </Stack.Navigator>
  );
}
