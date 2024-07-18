import { router } from 'expo-router';
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default function LoginScreen({ }) {
  return (
    <ImageBackground 
      source={{ uri: 'https://images.unsplash.com/photo-1639452127871-8c6ea78d2b11?q=80&w=2130&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Mercato</Text>
        <Text style={styles.subtitle}>
          Shop smarter, live better with Mercato.
        </Text>
        <TextInput 
          placeholder="Email" 
          placeholderTextColor="#fffdfd" 
          style={styles.input} 
        />
        <TextInput 
          placeholder="Password" 
          placeholderTextColor="#ffffff" 
          secureTextEntry 
          style={styles.input} 
        />
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => router.replace('./(tabs)')}
        >
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.buttonOutline]} 
          onPress={() => {router.replace('./(auth)/createAccout')}}
        >
          <Text style={[styles.buttonText, styles.buttonOutlineText]}>Create Account</Text>
        </TouchableOpacity>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#d0cbb7',
    textAlign: 'center',
    marginBottom: 40,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#333',
    borderRadius: 25,
    paddingLeft: 20,
    marginBottom: 20,
    color: '#fff',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#5aaf54',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonOutline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#5aaf54',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonOutlineText: {
    color: '#5aaf54',
  },
});
