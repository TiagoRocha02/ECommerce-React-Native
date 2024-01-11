import React, { useEffect, useState } from "react";
<<<<<<< HEAD
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
=======
import { View, StyleSheet, FlatList ,TouchableOpacity} from "react-native";
import { Button, Card, Text,  } from "react-native-paper";
import axios from "axios";
import { useContext } from "react";
import { CartContext } from "../context/items-context";
export default function MakeDetails({ route }) {
  const { makeid } = route.params;
  const [data, setData] = useState();

  useEffect(() => {
    axios(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeid}/modelyear/_/vehicleType/_?format=json`)
>>>>>>> 3562b19c792d781794290b629527681e7450a4e5
      .then((res) => {
        setData(res.data.Results);
      })
      .catch((err) => console.log(err));
  }, []);

<<<<<<< HEAD
=======
  const ItemActions = useContext(CartContext);
>>>>>>> 3562b19c792d781794290b629527681e7450a4e5
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Card style={styles.card}>
              <View style={styles.subcontainer}>
<<<<<<< HEAD
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
=======
                <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>{item.Model_Name.toUpperCase()}</Text>
                <Text style={{ color: "white", fontSize: 14, fontWeight: "500" }}>Type: {item.VehicleTypeName}</Text>
                <TouchableOpacity onPress={() => ItemActions.addItem({ make:item.Make_Name,model: item.Model_Name, type: item.VehicleTypeName })}>
                  <Button style={styles.btn} icon="cart" mode="outlined">
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "bold",
                        color:"white"
                      }}>
                      Buy
                    </Text>
                  </Button>
                </TouchableOpacity>
              </View>
            </Card>
          )}
          keyExtractor={(item, index) => item.Model_ID + Math.random()}></FlatList>
>>>>>>> 3562b19c792d781794290b629527681e7450a4e5
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
  },
<<<<<<< HEAD
  container1: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: "#222",
    marginTop:5,

=======
  btn:{
    height:42,
    marginTop:15
  },
  container1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222",
    marginTop: 5,
>>>>>>> 3562b19c792d781794290b629527681e7450a4e5
  },
  subcontainer: {
    height: "100%",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    flex: 1,
<<<<<<< HEAD
    padding: 10,
    justifyContent: "center",
    backgroundColor: "#222",
    borderWidth: 1,
    borderRadius:0,
    marginVertical: 2,
    width: 380,
    height: 55,
    borderColor: "#ddd",
=======
    justifyContent: "center",
    backgroundColor: "#222",
    borderWidth: 1,
    borderRadius: 0,
    marginVertical: 5,
    width: 380,
    height:120,
    borderColor: "#ddd",
    borderRadius:10
>>>>>>> 3562b19c792d781794290b629527681e7450a4e5
  },
});
