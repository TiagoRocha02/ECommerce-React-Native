import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Card, Text, Searchbar, ActivityIndicator } from "react-native-paper";

export default function Cars({ navigation }) {
  const [data, setdata] = useState([]);
  const [List, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios("https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json")
      .then((res) => {
        setIsLoading(false);
        setList(res.data.Results);
        setdata(res.data.Results);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSearch = (query) => {
    const filteredData = List.filter((item) =>
      item.Make_Name.toLowerCase().includes(query.toLowerCase())
    );
    setdata(filteredData);
  };

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Searchbar
          style={{ width: "90%", textAlign: "center" }}
          mode="bar"
          placeholder="Search"
          onChangeText={handleSearch}
        />
      </View>
      <View style={styles.container2}>
        {isLoading ? (
          <ActivityIndicator style={{ alignItems: "center", marginTop:24 }} size="large" />
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.push("MakeDetails", { makeid: item.Make_ID })}>
                <Card style={styles.card}>
                  <View style={styles.subcontainer}>
                    <Text style={{ color: "white", fontSize: 11, fontWeight: "bold" }}>
                      {item.Make_Name}
                    </Text>
                  </View>
                </Card>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.Make_ID}></FlatList>
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
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#222",
    justifyContent: "center",
    marginTop: 10,
  },
  container2: {
    flex: 8,
    backgroundColor: "#222",
    alignItems: "center",
    overflow:"visible",
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
  card: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    backgroundColor: "#222",
    borderWidth: 1,
    marginVertical: 5,
    width: 360,
    height: 50,
    borderColor: "#6c358b",
  },
});
