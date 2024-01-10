import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

export default function Games() {
  const [data, setdata] = useState([]);
  const navigation = useNavigation();
  
  useEffect(() => {
    axios.get("http://api.steampowered.com/ISteamApps/GetAppList/v0002/?key=STEAMKEY&format=json")
      .then((res) => {
        const apps = res.data.applist.apps.filter(app => app.name);
        setdata(apps);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        {data.length > 0 ? (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.push("GameDetails", {})}>
                <View style={styles.card2}>
                  <Image style={{ width: 40, height: 40 }} source={{ uri: item.img_logo_url }} />
                  <Text style={styles.textStyle}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.appid.toString()}
          />
        ) : (
          <Text>Loading...</Text>
        )}
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
    width: "100%",
  },
  container1: {
    flex: 1,
    backgroundColor: "#222",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 20,
  },
  container2: {
    flex: 8,
    backgroundColor: "#222",
    alignItems: "center",
    overflow: "visible",
  },
  subcontainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    height: "100%",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  card2: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    backgroundColor: "#222",
    borderWidth: 1,
    marginVertical: 5,
    width: 360,
    height: 70,
    borderColor: "#6c358b",
  },
  textStyle: {
    color:"#ffffff",
    fontSize: 12,
  }
});
