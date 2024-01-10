import { View, Text, StyleSheet } from "react-native";
import React, { createContext } from "react";
import { useContext } from "react";
import { CartContext } from "../context/items-context";
import { Card } from "react-native-paper";

export default function Cart() {
  const ItemActions = useContext(CartContext);
  return (
    <View style={styles.container}>
      {ItemActions.items.map((item) => (
        <Card style={styles.card}>
          <View style={styles.container1}>
            <Text style={{textAlign:"center"}} key={Math.random() * 1000}>{item.model}</Text>
          </View>
        </Card>
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
  container1: {
      

  },
  card: {
    padding: 15,
    width: 350,
    marginVertical: 5,
    justifyContent: "center",
    textAlign: "center",
  },
});
