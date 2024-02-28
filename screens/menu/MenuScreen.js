import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, Card } from "react-native-paper";
const MenuScreen = () => {
  const handleFontChange = () => {
    console.log("Fonct Changed");
  };
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="Products" />
        <Card.Content>
          <Button>Add A Product</Button>
          <Button>Display All Products</Button>
          <Button>Delete All Products</Button>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Title title="User" />
        <Card.Content>
          <Button>Move to profile</Button>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Title title="Font" />
        <Card.Content>
          <Button onPress={handleFontChange}>Swictch Font</Button>
        </Card.Content>
      </Card>
    </View>
  );
};
export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  card: {
    width: Dimensions.get("window").width - 100,
    height: Dimensions.get("window").height / 4,
    marginVertical: 20,
  },
});
