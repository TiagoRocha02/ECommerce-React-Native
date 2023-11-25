import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";

export default function Landing({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.subcontainer1}>
          <Image
            style={{ width: 280, height: 150 }}
            source={require("../assets/logo.png")}
          />
        </View>
        <View style={styles.subcontainer2}>
          <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
            Welcome !
          </Text>
        </View>
      </View>
      <View style={styles.container2}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Appstack")}>
          <Button style={styles.btn} icon="cart" mode="outlined">
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
              }}>
              Start Shopping
            </Text>
          </Button>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
    alignItems: "center",
    justifyContent: "center",
  },
  container1: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  subcontainer1: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  subcontainer2: {
    flex: 1,
    justifyContent: "flex-end",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  btn: {
    width: 350,
    height: 55,
    alignContent: "flex-end",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
});
