import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Button, MD3Colors, TextInput } from "react-native-paper";
import { router, useLocalSearchParams } from "expo-router";
import { useAuth } from "../context/AuthProvider";
const Verify = () => {
  const { verify } = useAuth();
  const params = useLocalSearchParams();
  const [otp, setOtp] = useState("");
  const handleSubmit = async () => {
    try {
      await verify(params.email, otp);
      router.replace("products");
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Verify OTP Sent To {params.email}</Text>
      <TextInput
        value={otp}
        onChangeText={(text) => setOtp(text)}
        placeholder="Enter OTP"
        mode="outlined"
        style={styles.textInputs}
      />
      <Button onPress={handleSubmit} style={styles.button} mode="elevated">
        Submit
      </Button>
    </View>
  );
};

export default Verify;

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
