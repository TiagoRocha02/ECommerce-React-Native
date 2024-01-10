import React, { useMemo, useContext } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import { Icon } from "react-native-paper";
import BooksStack from "./BookStack";
import Games from "./Games";
import Carstack from "./Carstack";
import Profile from "./Profile";
import Cart from "./Cart";
import { CartContext } from "../context/items-context";

const Tab = createBottomTabNavigator();

export default function Appstack({ navigation }) {
  const ItemActions = useContext(CartContext);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: { backgroundColor: "#222", height: 55, padding: 5 },
        tabBarShowLabel: false,
        headerShown: true,
        headerStyle: {
          backgroundColor: "#222",
          height: 100,
        },
        headerShadowVisible: false,
        headerTitle: () => (
          <View
            style={{
              width: 380,
              flexDirection: "row",
              flexWrap: "wrap",
              marginVertical: 20,
              alignItems: "center",
              justifyContent: "space-between",
            }}>
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <Icon source="account-circle" color="#6c358b" size={42} />
            </TouchableOpacity>
            <Image
              style={{ width: 80, height: 80 }}
              source={require("../assets/logo.png")}
            />

            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={() => navigation.navigate("Cart")}>
              <Text style={{ fontSize: 26, color: "#6c358b" }}>
                {ItemActions.items.length}
              </Text>
              <Icon source="cart-variant" color="#6c358b" size={38} />
            </TouchableOpacity>
          </View>
        ),
        tabBarIcon: ({ focused, size }) => {
          if (route.name === "Carstack") {
            return (
              <Icon source={focused ? "car" : "car-outline"} size={34} color="#6c358b" />
            );
          } else if (route.name === "Home") {
            return (
              <Icon
                source={focused ? "home-variant" : "home-variant-outline"}
                size={34}
                color="#6c358b"
              />
            );
          } else if (route.name === "BooksStack") {
            return (
              <Icon
                source={focused ? "book" : "book-outline"}
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
      <Tab.Screen name="Carstack" component={Carstack} />
      <Tab.Screen name="BooksStack" component={BooksStack} />
      <Tab.Screen name="Games" component={Games} />
      <Tab.Screen
        options={{ tabBarItemStyle: { display: "none" } }}
        name="Profile"
        component={Profile}
      />
      <Tab.Screen
        options={{ tabBarItemStyle: { display: "none" } }}
        name="Cart"
        component={Cart}
      />
    </Tab.Navigator>
  );
}
