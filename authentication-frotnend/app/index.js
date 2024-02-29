import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { useAuth } from "../context/AuthProvider";
import { router } from "expo-router";

const MainPage = () => {
  const { isLoggedIn } = useAuth();
  const handlePress = () => {
    if (isLoggedIn) {
      router.replace("products");
    } else {
      router.replace("login");
    }
  };
  return (
    <View style={styles.conatainer}>
      <Text style={styles.text}>Welcome To</Text>
      <Text style={styles.text}>ECom.com</Text>
      <Button
        onPress={handlePress}
        mode="contained"
        style={styles.button}
        icon={"arrow-right"}
      >
        Get Started
      </Button>
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 40,
  },
  button: {
    width: Dimensions.get("window").width - 80,
    marginVertical: 20,
    borderRadius: 6,
  },
});
