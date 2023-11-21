import React from 'react';
import { View, Text,StyleSheet } from 'react-native';


export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={{color:"white",fontSize:22}}>Home Screen</Text>
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
});
