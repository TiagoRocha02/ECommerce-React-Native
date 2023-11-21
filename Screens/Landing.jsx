import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
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
        <Button
          style={styles.btn}
          icon="login-variant"
          mode="outlined"
          onPress={() => navigation.navigate("Appstack")}>
          Start Shopping
        </Button>
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
    width: 240,
    height: 45,
    alignContent: "flex-end",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
});
