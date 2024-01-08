import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet, navigation } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { SearchBar } from 'react-native-screens';

const Books = ({navigation}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
               `https://www.googleapis.com/books/v1/volumes?q=react%20native&maxResults=10&key=AIzaSyAvs73j_zPvkIYp_GHx_lIiGsyzuFvkekc`
        );

        setBooks(response.data.items || []);
      } catch (error) {
        console.error('Não encontramos o Livro desejado', error);
      }
    };
    fetchBooks();
  }, []); 

  const searchBooks = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyAvs73j_zPvkIYp_GHx_lIiGsyzuFvkekc`
      );

      setBooks(response.data.items || []);
    } catch (error) {
      console.error('Não encontramos o Livro desejado', error);
    }
  };

  const sortBooks = () => {
    const sortedBooks = [...books].sort((a, b) =>
      a.volumeInfo.title.localeCompare(b.volumeInfo.title)
    );
    setBooks(sortedBooks);
  };

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <SearchBar
          style={{ width: "90%", textAlign: "center" }}
          placeholder="Explore o seu livro"
          mode="bar"
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
        />
        <Button title="Encontrar Livros" onPress={searchBooks} />
      </View>
      <View style={styles.container2}>
        <FlatList
          data={books}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('BooksDetails', { book: item })}>
              <View style={styles.card}>
                <View style={styles.subcontainer}>
                  <Text style={{ color: "white", fontSize: 11, fontWeight: "bold" }}>
                    {item.volumeInfo.title}
                  </Text>
                  <Text>{item.volumeInfo.authors && item.volumeInfo.authors.join(', ')}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

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
    overflow: "visible",
  },
  subcontainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    height: "100%",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  card: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    backgroundColor: "#222",
    borderWidth: 1,
    marginVertical: 5,
    width: 360,
    height: 50,
    borderColor: "#6c358b",
  },
});

export default Books;