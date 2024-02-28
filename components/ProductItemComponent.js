import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { IconButton, MD3Colors } from "react-native-paper";
import { Dimensions } from "react-native";
import { Platform } from "react-native";
import { Image } from "react-native";
const ProductItemComponent = ({ name, image, price, description }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.price}>{price}</Text>
      <Image style={styles.image} source={{ uri: image }} />
      <Text style={{ fontFamily: "WorkSans" }}>{name}</Text>
      <Text style={{ fontFamily: "RobotoSlab" }}>
        {description.slice(0, 20)}
      </Text>
      <View style={styles.actions}>
        <IconButton style={styles.plus} icon={"plus"} />
        <IconButton style={styles.minus} icon={"minus"} />
      </View>
    </View>
  );
};

export default ProductItemComponent;

const styles = StyleSheet.create({
  card: {
    backgroundColor: MD3Colors.neutral95,
    width: Dimensions.get("window").width / 2 + 20,
    height: 400,
    margin: 20,
    display: "flex",
    alignItems: "center",
    borderRadius: 10,
    gap: 5,

    ...Platform.select({
      ios: {
        shadowOffset: { width: 5, height: 2 },
        shadowColor: "#000",
        shadowOpacity: 0.4,
        shadowRadius: 2,
      },
      android: { elevation: 4 },
    }),
  },
  price: {
    marginLeft: "auto",
    padding: 10,
    fontWeight: "bold",
    fontFamily: "RobotoSlab",
  },
  image: {
    width: 200,
    height: 200,
    margin: "auto",
    borderRadius: 10,
  },
  actions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "auto",
    width: Dimensions.get("window").width / 2 + 20,
  },
  minus: {
    backgroundColor: MD3Colors.error80,
  },
  plus: {
    backgroundColor: MD3Colors.primary60,
  },
});
