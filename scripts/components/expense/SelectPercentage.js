import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";

const SelectPercentage = ({ user, splitPercentage, updateSplitPercentage }) => {
  const [split, setSplit] = useState(String(splitPercentage));
  const updatePercentage = (val) => {
    setSplit(val);
    updateSplitPercentage(val);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{user.name}</Text>
      <TextInput
        style={styles.input}
        value={split}
        onChangeText={updatePercentage}
      />
    </View>
  );
};

export default SelectPercentage;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
    marginVertical: 10,
  },
  text: { width: 130 },
  input: {
    width: Dimensions.get("screen").width / 2,
  },
});
