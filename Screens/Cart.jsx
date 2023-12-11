import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Cart() {
  return (
    <View style={styles.container}>
      <Text style={{color:"white",fontSize:18}}>Cart</Text>
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
