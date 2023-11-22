import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import { Button, Card, Text, Searchbar } from "react-native-paper";

export default function Cars() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  const [data, setdata] = useState([]);
  const [List, setList] = useState([]);

  useEffect(() => {
    axios("https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json")
      .then((res) => {
        setList(res.data.Results);
        setdata(res.data.Results)
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSearch = (query) => {
    const filteredData = List.filter((item) => item.Make_Name.toLowerCase().includes(query.toLowerCase()));
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
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Card style={styles.card}>
              <View style={styles.subcontainer}>
               
                <Text style={{ color: "white", fontSize: 11,fontWeight:"bold" }}>{item.Make_Name}</Text>
              </View>
            </Card>
          )}
          keyExtractor={(item) => item.Make_ID}></FlatList>
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
