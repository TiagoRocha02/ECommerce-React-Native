import React from "react";
import { View, Text, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import { Icon } from "react-native-paper";
import Cars from "./Cars";
import Books from "./Books";
import Games from "./Games";

const Tab = createBottomTabNavigator();

export default function Appstack() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: { backgroundColor: "#222", height: 55, padding: 5 },
        tabBarShowLabel: false,
        headerShown: true,
        headerStyle: {
          backgroundColor: "#222",
        },
        headerShadowVisible: false,
        headerTitle: () => (
          <Image
            style={{ width: 70, height: 40, marginLeft: 140 }}
            source={require("../assets/logo.png")}
          />
        ),
        tabBarIcon: ({ focused, size }) => {
          if (route.name === "Cars") {
            return (
              <Icon source={focused ? "car" : "car-outline"} size={34} color="#6c358b" />
            );
          } else if (route.name === "Home") {
            return (
              <Icon
                source={focused ? "home" : "home-outline"}
                size={34}
                color="#6c358b"
              />
            );
          } else if (route.name === "Books") {
            return (
              <Icon
                source={
                  focused ? "book-open-page-variant" : "book-open-page-variant-outline"
                }
                size={34}
                color="#6c358b"
              />
            );
          } else if (route.name === "Games") {
            return (
              <Icon
                source={focused ? "gamepad-variant" : "gamepad-variant-outline"}
                size={34}
                color="#6c358b"
              />
            );
          }
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Cars" component={Cars} />
      <Tab.Screen name="Books" component={Books} />
      <Tab.Screen name="Games" component={Games} />
    </Tab.Navigator>
  );
}
