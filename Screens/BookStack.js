import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Books from './Books';
import BooksDetails from './BooksDetails';

const Stack = createNativeStackNavigator();

const BooksStack = () => {
  return (
      <Stack.Navigator initialRouteName="Books">
        <Stack.Screen name="Books" component={Books} />
        <Stack.Screen name="BooksDetails" component={BooksDetails} />
      </Stack.Navigator>
  );
};

export default BooksStack;
