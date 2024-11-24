import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAuth } from "../../context/AuthProvider";
import { Button } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
const AccountDetails = () => {
  const { user, logout } = useAuth();
  return (
    <View style={styles.container}>
      <Icon name="user" size={60} />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.name}>{user.id}</Text>
      <Text style={styles.email}>{user.email}</Text>

      <Button style={styles.logoutButton} onPress={logout}>
        <Text style={styles.logoutText}>Logout</Text>
      </Button>
    </View>
  );
};

export default AccountDetails;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  email: {
    fontSize: 16,
    color: "#777",
    marginBottom: 30,
  },
  logoutButton: {
    backgroundColor: "#ff5252",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 25,
  },
  logoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
