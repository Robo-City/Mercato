// screens/AboutScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>About Us</Text>
      <Text style={styles.paragraph}>
        Welcome to our Zambian E-commerce app. We are dedicated to providing you with the best online shopping experience. Our app offers a wide range of products sourced locally and internationally. Our mission is to make shopping convenient and accessible for everyone in Zambia.
      </Text>
      <Text style={styles.paragraph}>
        Contact Us:
      </Text>
      <Text style={styles.paragraph}>
        Email: support@zambianecommerce.com
      </Text>
      <Text style={styles.paragraph}>
        Phone: +260 123 456 789
      </Text>
      <Text style={styles.footer}>
        © 2024 Zambian E-commerce. All rights reserved.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
  },
  footer: {
    marginTop: 20,
    fontSize: 14,
    color: '#888',
  },
});

export default AboutScreen;
