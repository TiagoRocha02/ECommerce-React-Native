import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Books from './Books';
import BooksDetails from './BooksDetails';

const Stack = createNativeStackNavigator();

const BooksStack = () => {
  return (
      <Stack.Navigator initialRouteName="Books">
        <Stack.Screen 
        options={{
          headerShown: false,
        }}
        name="Books" component={Books} />
        <Stack.Screen name="BooksDetails" component={BooksDetails} />
      </Stack.Navigator>
  );
};

export default BooksStack;
