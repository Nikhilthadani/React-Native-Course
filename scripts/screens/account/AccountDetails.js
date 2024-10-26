import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAuth } from "../../context/AuthProvider";

const AccountDetails = () => {
  const auth = useAuth();

  return (
    <View>
      <Text>{JSON.stringify(auth?.user)}</Text>
    </View>
  );
};

export default AccountDetails;

const styles = StyleSheet.create({});
