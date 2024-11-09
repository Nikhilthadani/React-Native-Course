import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAuth } from "../../context/AuthProvider";
import { Button } from "react-native-paper";

const AccountDetails = () => {
  const auth = useAuth();

  return (
    <View>
      <Text>{JSON.stringify(auth?.user)}</Text>
      <Button onPress={auth.logout}>Logout</Button>
    </View>
  );
};

export default AccountDetails;

const styles = StyleSheet.create({});
