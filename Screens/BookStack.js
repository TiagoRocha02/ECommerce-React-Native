import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Books from './screens/Books';
import BooksDetails from './screens/BooksDetails';

const Stack = createNativeStackNavigator();

const BooksStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Books">
        <Stack.Screen name="Books" component={Books} />
        <Stack.Screen name="BooksDetails" component={BooksDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default BooksStack;
