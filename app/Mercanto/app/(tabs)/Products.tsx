import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { green } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Mercato</Text>
      <View style={styles.container}>
      
      <MaterialIcons name="shopping-cart" size={30} style={{color:'#BEF264', position:'absolute',marginHorizontal: 5, marginVertical: 25 }}/>
      
    </View>
      <TextInput
        style={styles.searchInput}
        placeholderTextColor={'gray'}
        placeholder="search for a product"
      />

    



      <View style={styles.filterContainer }>
        <TouchableOpacity style={styles.filterButton}><Text style={{color:'#FFFFFF'}}>All</Text></TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}><Text  style={{color:'#FFFFFF'}}>Clothings</Text></TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}><Text  style={{color:'#FFFFFF'}}>Electronic</Text></TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}><Text  style={{color:'#FFFFFF'}}>Books</Text></TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}><Text  style={{color:'#FFFFFF'}}>shoes</Text></TouchableOpacity>
      </View>
      <View style={styles.productsContainer}>
        {Array.from({ length: 20 }).map((_, index) => (
          <View key={`product-${index}`} style={styles.productItem}>
            <Text style={{color:'#FFFFFF'}}>ZMK 0.00 </Text>
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
    backgroundColor: '#09090B',
    
     
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'left',
    marginVertical: 3,
    marginHorizontal: 4,
    marginBottom: -6,
    color : '#FB923C',
    borderBlockColor: 'BEF264'
  },
  searchInput: {
    height: 30,
    width: '45%',
    borderColor: '#FB923C',
    borderWidth: 2,
    paddingHorizontal: 5,
    borderRadius: 5,
    marginHorizontal: 170,
    
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 5,
    
  },
  filterButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: '#FB923C',
    justifyContent: 'space-around',
    borderRadius: 6,
  
  },
  productsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    
  },
  productItem: {
    width: '45%',
    height: 150,
    borderWidth: 3,
    borderColor: '#FB923C',
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    
    
  },
  
});

export default App;
