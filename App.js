import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Appstack from "./Screens/Appstack";
import Landing from "./Screens/Landing";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{headerShown:false}}
      >
        <Stack.Screen name="Landing" component={Landing}/>
        <Stack.Screen name="Appstack" component={Appstack}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

