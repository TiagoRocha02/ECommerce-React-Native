<<<<<<< HEAD
import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Cart() {
  return (
    <View style={styles.container}>
      <Text style={{color:"white",fontSize:18}}>Cart</Text>
=======
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { createContext } from "react";
import { useContext } from "react";
import { CartContext } from "../context/items-context";
import { Card } from "react-native-paper";
import { Icon } from "react-native-paper";

export default function Cart() {
  const ItemActions = useContext(CartContext);
  console.log(ItemActions.items);
  return (
    <View style={styles.container}>
      {ItemActions.items.map((item) => (
        <View style={styles.card}>
          <View style={styles.container1}>
            <Text
              style={{ textAlign: "center", fontSize: 16, color: "white" }}
              key={Math.random() * 100}>
              {item.make}
            </Text>
            <Text style={{ textAlign: "center", fontSize: 12, color: "white" }}>
              {item.model}
            </Text>
            <Text style={{ textAlign: "center", fontSize: 14, color: "white" }}>
              3.55€
            </Text>
          </View>
          <View style={styles.container1}>
            <TouchableOpacity onPress={()=> ItemActions.removeItem(item)}>
              <Icon source="delete" size={30} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      ))}
>>>>>>> 3562b19c792d781794290b629527681e7450a4e5
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    backgroundColor: "#222",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
=======
    paddingTop: 20,
    backgroundColor: "#222",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  container1: {},
  card: {
    justifyContent: "space-around",
    width: 360,
    height: 65,
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "#6c358b",
    textDecorationColor: "white",
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 5,
    borderRadius: 10,
  },
>>>>>>> 3562b19c792d781794290b629527681e7450a4e5
});
