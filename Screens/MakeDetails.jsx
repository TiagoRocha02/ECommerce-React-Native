import React, { useEffect, useState } from "react";
import { View , StyleSheet,FlatList } from "react-native";
import { Card, Text} from "react-native-paper";
import axios from "axios";


export default function MakeDetails({ route }) {
  const { makeid } = route.params;
  const [data,setData] = useState()

  useEffect(() => {
    axios(
      `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeid}/modelyear/_/vehicleType/_?format=json`
    )
      .then((res) => {
        setData(res.data.Results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Card style={styles.card}>
              <View style={styles.subcontainer}>
                <Text style={{ color: "white", fontSize: 11, fontWeight: "bold" }}>
                  {item.Model_Name.toUpperCase()}

                </Text>
                <Text style={{ color: "white", fontSize: 10, fontWeight: "500" }}>
                Type: {item.VehicleTypeName}
                  
                </Text>
              </View>
            </Card>
          )}
          keyExtractor={(item,index) => item.Model_ID + Math.random()}></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
  },
  container1: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: "#222",
    marginTop:5,

  },
  subcontainer: {
    height: "100%",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    backgroundColor: "#222",
    borderWidth: 1,
    borderRadius:0,
    marginVertical: 2,
    width: 380,
    height: 55,
    borderColor: "#ddd",
  },
});
