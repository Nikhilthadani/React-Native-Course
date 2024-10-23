import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ActivityIndicator } from "react-native-paper";

const Fallback = () => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Text>SPLIT BILL Application</Text>
      {/*LOGO  */}
      <ActivityIndicator />
    </View>
  );
};

export default Fallback;

const styles = StyleSheet.create({});
