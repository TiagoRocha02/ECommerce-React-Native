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
const color1 = "#00C9A7";

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
          height: 160,
        },
        headerShadowVisible: false,
        headerTitle: () => (
          <View
            style={{
              width: 360,
              flexDirection: "row",
              flexWrap: "wrap",
              marginTop: 10,
              alignContent: "center",
              alignItems: "center",
              justifyContent: "space-around",
            }}>
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <Icon source="account-circle" color={color1} size={45} />
            </TouchableOpacity>
            <Image
              style={{ tintColor: "white", width: 100, height: 80, marginLeft: 50, marginRight: 50 }}
              source={require("../assets/logo.png")}
            />
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
                <Icon source="cart-variant" color={color1} size={38} />
              </TouchableOpacity>
              <Text style={{ fontSize: 26, color: color1 }}>{ItemActions.items.length}</Text>
            </View>
          </View>
        ),
        tabBarIcon: ({ focused, size }) => {
          if (route.name === "Carstack") {
            return <Icon source={focused ? "car" : "car-outline"} size={34} color={color1} />;
          } else if (route.name === "Home") {
            return <Icon source={focused ? "home-variant" : "home-variant-outline"} size={34} color={color1} />;
          } else if (route.name === "BooksStack") {
            return <Icon source={focused ? "book" : "book-outline"} size={34} color={color1} />;
          } else if (route.name === "Games") {
            return <Icon source={focused ? "gamepad-variant" : "gamepad-variant-outline"} size={34} color={color1} />;
          }
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Carstack" component={Carstack} />
      <Tab.Screen name="BooksStack" component={BooksStack} />
      <Tab.Screen name="Games" component={Games} />
      <Tab.Screen options={{ tabBarItemStyle: { display: "none" } }} name="Profile" component={Profile} />
      <Tab.Screen options={{ tabBarItemStyle: { display: "none" } }} name="Cart" component={Cart} />
    </Tab.Navigator>
  );
}
