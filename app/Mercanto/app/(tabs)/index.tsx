import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';

const products = [
  {
    id: 1,
    name: "KEYYOU 2 Button Uncut Replacement Plastic Remote",
    price: "ZMW30.49",
    image: "https://cdn.example.com/keyyou_2_button.jpg",
    sold: 392,
    rating: 4.8,
    category: "Keys"
  },
  {
    id: 2,
    name: "KEYYOU Uncut Replacement Plastic Remote",
    price: "ZMW32.93",
    image: "https://cdn.example.com/keyyou_uncut.jpg",
    sold: 346,
    rating: 4.8,
    category: "Keys"
  },
  {
    id: 3,
    name: "Retrofitting horn Bracket Automobile A-pillar For Toyota",
    price: "ZMW1,717.48",
    image: "https://cdn.example.com/retrofitting_horn_bracket.jpg",
    sold: 8,
    rating: 5,
    category: "Accessories"
  },
  {
    id: 4,
    name: "2Pcs Plastic Front Windshield Washer Jet Nozzle",
    price: "ZMW32.21",
    image: "https://cdn.example.com/washer_jet_nozzle.jpg",
    sold: 285,
    rating: 4.6,
    category: "Accessories"
  },
  {
    id: 5,
    name: "YIQIXIN 2 Button Replacement Key",
    price: "ZMW30.00",
    image: "https://cdn.example.com/yiqixin_2_button.jpg",
    sold: 120,
    rating: 4.5,
    category: "Keys"
  },
  {
    id: 6,
    name: "Bluetooth OBD2 Scanner",
    price: "ZMW50.00",
    image: "https://cdn.example.com/bluetooth_obd2.jpg",
    sold: 300,
    rating: 4.7,
    category: "Electronics"
  }
];

const categories = ["All", "Keys", "Accessories", "Electronics"];

export default function App() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = products.filter(product => 
    (selectedCategory === "All" || product.category === selectedCategory) &&
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
        value={search}
        onChangeText={text => setSearch(text)}
      />
      <View style={styles.categoryContainer}>
        {categories.map(category => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.selectedCategoryButton
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text style={styles.categoryButtonText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.row}>
        {filteredProducts.map((product, index) => (
          <View key={product.id} style={[styles.productContainer, index % 2 === 0 && { marginRight: 10 }]}>
            <Image source={{ uri: product.image }} style={styles.image} />
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.price}>{product.price}</Text>
            <Text style={styles.details}>Sold: {product.sold}</Text>
            <Text style={styles.details}>Rating: {product.rating}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  categoryButton: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  selectedCategoryButton: {
    backgroundColor: '#ddd',
  },
  categoryButtonText: {
    fontSize: 14,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productContainer: {
    width: '48%',
    marginBottom: 10,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  price: {
    fontSize: 14,
    color: 'green',
    marginVertical: 5,
  },
  details: {
    fontSize: 12,
    color: '#777',
  },
});
