// screens/ShopScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';

const products = [
  { id: '1', name: 'Thermal Conductive Grease', price: 'ZMW11.75', image: 'https://example.com/thermal_grease.jpg', sold: '800+', rating: '4.8' },
  { id: '2', name: 'Gaming Finger Sleeve', price: 'ZMW11.50', image: 'https://example.com/gaming_sleeve.jpg', sold: '270', rating: '4.3' },
  { id: '3', name: 'Wireless WIFI Repeater', price: 'ZMW100.57', image: 'https://example.com/wifi_repeater.jpg', sold: '10,000+', rating: '4.8' },
  { id: '4', name: 'Disney Cool Stickers', price: 'ZMW42.58', image: 'https://example.com/disney_stickers.jpg', sold: '4000+', rating: '4.7' },
  { id: '5', name: 'LED Light Strips', price: 'ZMW120.00', image: 'https://example.com/led_strips.jpg', sold: '600+', rating: '4.5' },
  { id: '6', name: 'Fast Charging Adapter', price: 'ZMW60.00', image: 'https://example.com/charging_adapter.jpg', sold: '500+', rating: '4.6' },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="SearHomeScreench for products..." />
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>For You</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>Home Improvement & Lighting</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
            <Text style={styles.productSold}>{item.sold} sold</Text>
            <Text style={styles.productRating}>{item.rating} ⭐</Text>
          </View>
        )}
        numColumns={2}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  searchButton: {
    marginLeft: 10,
    backgroundColor: '#000',
    borderRadius: 5,
    padding: 10,
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  filterContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  filterButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginRight: 10,
  },
  filterButtonText: {
    color: '#000',
  },
  productList: {
    paddingBottom: 20,
  },
  productCard: {
    flex: 1,
    margin: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  productName: {
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  productPrice: {
    color: '#000',
    marginBottom: 5,
  },
  productSold: {
    color: '#888',
    marginBottom: 5,
  },
  productRating: {
    color: '#888',
  },
});

export default HomeScreen;
