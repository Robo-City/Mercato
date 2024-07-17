import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match!");
    } else {
      if (
        password.length < 8 ||
        !/\d/.test(password) ||
        !/[!@#%^()-+\_=/\[\]{};':"\\|,.<>\/?]/.test(password)
      ) {
        setErrorMessage(
          "Password must be at least 8 characters long and must contain letters, numbers, and symbols"
        );
      } else {
        // Handle the sign-up logic here
        setErrorMessage("");
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up For Mercanto</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        secureTextEntry
        onChangeText={(text) => setConfirmPassword(text)}
      />
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    color: "#0197f6",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#e0e0e0", // Gray background
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderColor: "#ccc", // Border color
    borderWidth: 1, // Border width
  },
  button: {
    backgroundColor: "#0197f6",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  error: {
    color: "red",
    textAlign: "center",
    marginBottom: 10,
  },
});

export default SignUp;
