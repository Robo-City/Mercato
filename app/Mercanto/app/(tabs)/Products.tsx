import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Mercato Your No. 1 Store</Text>
      <View style={styles.container}>
      
      <MaterialIcons name="shopping-cart" size={30} color="#000" />
    </View>
      <TextInput
        style={styles.searchInput}
        placeholder="search for a product"
      />

    



      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterButton}><Text>All</Text></TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}><Text>Clothings</Text></TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}><Text>Electronic</Text></TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}><Text>Books</Text></TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}><Text>shoes</Text></TouchableOpacity>
      </View>
      <View style={styles.productsContainer}>
        {Array.from({ length: 20 }).map((_, index) => (
          <View key={`product-${index}`} style={styles.productItem}>
            <Text>ZMK 0.00 </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  



  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 20,
     
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
    marginVertical: 20,
  },
  searchInput: {
    height: 30,
    width: '45%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 5,
    
  },
  filterButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    justifyContent: 'space-around',
    borderRadius: 5,
  },
  productsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    
  },
  productItem: {
    width: '45%',
    height: 150,
    borderWidth: 1,
    borderColor: 'gray',
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    
  },
  addButton: {
    padding: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
});

export default App;
