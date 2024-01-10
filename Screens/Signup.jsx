import React from 'react';
import { View, Text , StyleSheet} from 'react-native';

export default function SignUP() {
  return (
    <View style={styles.container}>
      <Text>SIGN UP</Text>
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
});
