import { View, Text, StyleSheet } from "react-native";
import React, { createContext } from "react";
import { useContext } from "react";
import { CartContext } from "../context/items-context";

export default function Cart() {
  const ItemActions = useContext(CartContext);
  return (
    <View style={styles.container}>
      <Text style={{ color: "white", fontSize: 18 }}>Cart</Text>

      {ItemActions.items.map((item) => (
        <Text key={Math.random() * 1000}>{item.model}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});
