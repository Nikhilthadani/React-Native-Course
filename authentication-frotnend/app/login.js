import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Button, MD3Colors, TextInput } from "react-native-paper";
import { Link } from "expo-router";
import { useAuth } from "../context/AuthProvider";

const Login = () => {
  const { login } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async () => {
    try {
      await login(email, password);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login to, Ecom.com</Text>
      <TextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="Enter Email"
        mode="outlined"
        style={styles.textInputs}
      />
      <TextInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="Enter Password"
        mode="outlined"
        style={styles.textInputs}
      />
      <Button onPress={handleSubmit} style={styles.button} mode="elevated">
        Submit
      </Button>
      <Link style={{ marginTop: 20 }} href={"/signup"}>
        <Button mode="text">Register New User</Button>
      </Link>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: MD3Colors.secondary10,
    fontSize: 20,
    fontWeight: "600",
  },
  textInputs: {
    width: Dimensions.get("window").width - 100,
    marginVertical: 10,
  },
  button: {
    width: Dimensions.get("window").width - 100,
    marginTop: 10,
    borderRadius: 7,
  },
});
