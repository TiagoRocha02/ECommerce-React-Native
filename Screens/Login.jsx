import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Pressable } from "react-native";
import { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import api from "../auth/api-config";

export default function Login({ navigation }) {
  const [Username, setUsername] = useState();
  const [Password, setPassword] = useState();
  const [userData, setUserData] = useState();
  const [errorMsg, setErrorMsg] = useState("");

  const Login = () => {
    api
      .post("/user", {
        username: Username,
        password: Password,
      })
      .then((res) => {
        setUserData(res.data);
        navigation.navigate("Appstack", { screen: "Home" });
      })
      .catch((error) => {
        setErrorMsg("Password ou Username Incorretos !");
      });
  };

  return (
    <View style={styles.container}>
      <Image
        style={{ width: 120, height: 60, marginBottom: 20 }}
        source={require("../assets/logo.png")}
      />
      {errorMsg ? <Text style={styles.errormsg}>{errorMsg}</Text> : null}
      <TextInput onChangeText={setUsername} style={styles.input} placeholder="Username" />
      <TextInput onChangeText={setPassword} style={styles.input} placeholder="Password" />
      <TouchableOpacity onPress={() => Login()}>
        <Button style={styles.btn}>
          <Text
            style={{
              color: "#111",
              fontSize: 16,
              fontWeight: "600",
            }}>
            Login
          </Text>
        </Button>
      </TouchableOpacity>
      <Pressable onPress={() => navigation.navigate("SignUP")}>
        <Text style={{ textDecorationLine: "underline", color: "#6c358b" }}>
          Sem conta? Cria uma!
        </Text>
      </Pressable>
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
  input: {
    width: 300,
    marginBottom: 10,
    height: 40,
    backgroundColor: "#111",
    borderRadius: 6,
  },
  btn: {
    marginTop: 10,
    width: 300,
    height: 40,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
    backgroundColor: "#6c358b",
    borderRadius: 6,
  },
  errormsg: {
    padding: 10,
    justifyContent: "center",
    textAlign: "center",
    color: "#f66",
    width: 200,
    height: "auto",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#f66",
    marginBottom: 10,
  },
});
