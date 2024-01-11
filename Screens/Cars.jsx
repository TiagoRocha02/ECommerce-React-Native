import axios from "axios";
import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
=======
import { View, StyleSheet, FlatList, TouchableOpacity} from "react-native";
>>>>>>> 3562b19c792d781794290b629527681e7450a4e5
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
<<<<<<< HEAD
          style={{ width: "90%", textAlign: "center" }}
=======
          style={{ width: "90%", textAlign: "center",backgroundColor:"white" }}
>>>>>>> 3562b19c792d781794290b629527681e7450a4e5
          mode="bar"
          placeholder="Search"
          onChangeText={handleSearch}
        />
      </View>
      <View style={styles.container2}>
        {isLoading ? (
<<<<<<< HEAD
          <ActivityIndicator style={{ alignItems: "center", marginTop:24 }} size="large" />
=======
          <ActivityIndicator
            style={{ alignItems: "center", marginTop: 24 }}
            size="large"
          />
>>>>>>> 3562b19c792d781794290b629527681e7450a4e5
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
<<<<<<< HEAD
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
=======
                <TouchableOpacity
                  onPress={() =>
                    navigation.push("MakeDetails", { makeid: item.Make_ID })
                  }>
                  <Card style={styles.card}>
                    <Text style={{ color: "white", fontSize: 11, fontWeight: "bold" }}>
                      {item.Make_Name}
                    </Text>
                  </Card>
                </TouchableOpacity>
>>>>>>> 3562b19c792d781794290b629527681e7450a4e5
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
<<<<<<< HEAD
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
=======
    overflow: "visible",
  },
  subcontainer: {
    flex:1,
    justifyContent:"center",
    alignItems:"center"
>>>>>>> 3562b19c792d781794290b629527681e7450a4e5
  },
  card: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
<<<<<<< HEAD
    backgroundColor: "#222",
=======
    alignItems:"center",
    alignContent:"center",
    backgroundColor: "#00C9A7",
>>>>>>> 3562b19c792d781794290b629527681e7450a4e5
    borderWidth: 1,
    marginVertical: 5,
    width: 360,
    height: 50,
<<<<<<< HEAD
    borderColor: "#6c358b",
=======
>>>>>>> 3562b19c792d781794290b629527681e7450a4e5
  },
});
