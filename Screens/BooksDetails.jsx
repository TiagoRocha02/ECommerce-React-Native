import React from 'react';
import { View, Text } from 'react-native';

const BooksDetails = ({ route }) => {
  const { book } = route.params;

  return (
    <View>
      <Text>{book.volumeInfo.title}</Text>
      <Text>{book.volumeInfo.authors && book.volumeInfo.authors.join(', ')}</Text>
      <Text>{book.volumeInfo.description}</Text>
      {}
    </View>
  );
};

export default BooksDetails;
