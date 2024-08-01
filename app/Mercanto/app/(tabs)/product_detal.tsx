import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function product_detal() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          {/* Back button icon */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.cartButton}>
          {/* Cart button icon */}
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image source={{uri: 'path_to_image'}} style={styles.productImage} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.productTitle}>Sweater Full Sleeve</Text>
        <Text style={styles.productRating}>
          ★★★★★ <Text style={styles.reviewText}>(50 Reviews)</Text>
        </Text>
        <Text style={styles.productDescription}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
          Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. 
          <Text style={styles.moreText}> MORE</Text>
        </Text>
        <View style={styles.optionsContainer}>
          <View style={styles.colorContainer}>
            <Text style={styles.optionTitle}>COLOR</Text>
            {/* Add color options here */}
          </View>
          <View style={styles.sizeContainer}>
            <Text style={styles.optionTitle}>SIZE</Text>
            {/* Add size options here */}
          </View>
        </View>
        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.addToCartButton}>
            <Text style={styles.buttonText}>Add To Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buyNowButton}>
            <Text style={styles.buttonText}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F7FA',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  backButton: {
    // Style for back button
  },
  cartButton: {
    // Style for cart button
  },
  imageContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImage: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  detailsContainer: {
    flex: 3,
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  productRating: {
    fontSize: 16,
    marginBottom: 8,
  },
  reviewText: {
    textDecorationLine: 'underline',
  },
  productDescription: {
    fontSize: 14,
    marginBottom: 16,
  },
  moreText: {
    color: '#1976D2',
    fontWeight: 'bold',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  colorContainer: {
    flex: 1,
  },
  sizeContainer: {
    flex: 1,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addToCartButton: {
    flex: 1,
    backgroundColor: '#00BCD4',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginRight: 8,
  },
  buyNowButton: {
    flex: 1,
    backgroundColor: '#FFC107',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginLeft: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
