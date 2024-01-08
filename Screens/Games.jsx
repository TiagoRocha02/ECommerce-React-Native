import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import axios from "axios";


export default function Games() {
  const [data, setdata] = useState();
  useEffect(() => {
    axios.get("https://www.cheapshark.com/api/1.0/deals?storeID=1&steamRating=1").then((res) => {
      setdata(res.data);
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <FlatList
          data={data}
          renderItem={({item}) => 
          <View style={styles.card2}>
            <Image style={{width:40,height:40}} source={{uri: JSON.stringify(item.thumb)}}></Image>
            <Text style={styles.textStyle}>{item.title}</Text>
            </View>}
          keyExtractor={(item) => Math.random() * 100 + item.gameID}
        />
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
