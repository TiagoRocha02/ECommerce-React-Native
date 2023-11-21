import React from "react";
import { useState } from "react";
import { SafeAreaView, View, StyleSheet, Image } from "react-native";
import { Button, Card, Text, TextInput } from "react-native-paper";

export default function Cars() {
  const [text, setText] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container1}>
        <TextInput style={{}} label="Search" value={text} onChangeText={(text) => setText(text)} />
        <Button style={styles.btn} icon="magnify" mode="elevated"></Button>
      </View>
      <View style={styles.container2}>
        <Card style={styles.card}>
          <View style={styles.CardContainer}>
            <Image
              style={{
                marginHorizontal: 5,
                width: "60%",
                height: "100%",
                borderRadius: 15,
              }}
              source={{
                uri: "https://shorturl.at/btBC2",
              }}
            />
            <Text style={{ color: "white" }}>SUPRAAAA?</Text>
          </View>
        </Card>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingTop: 15,
  },
  container1: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#222",
    justifyContent: "center",
    width: "100%",
  },

  container2: {
    flex: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#222",
    width: "96%",
  },
  card: {
    flex: 1,
    width: "90%",
    height: 140,
    padding: 10,
    justifyContent: "center",
    backgroundColor: "#333",
    borderWidth: 1,
    borderColor: "#6c358b",
  },
  CardContainer: {
    alignItems: "center",
    alignContent: "center",
    height: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
