import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { Card, Chip } from "react-native-paper";
import { router } from "expo-router";
const ProductItemComponent = (props) => {
  const { id, title, name, description, image, price, category, rating } =
    props;
  const handlePress = () => {
    router.navigate({
      params: { id: id },
      pathname: `${props.id}`,
    });
  };
  return (
    <Card key={id} onPress={handlePress} style={styles.card}>
      <Card.Cover source={{ uri: image }} />
      <Card.Title title={title} />
      <Card.Content>
        <Text>{description}</Text>
      </Card.Content>
      <Card.Actions style={{ marginRight: "auto", marginVertical: 10 }}>
        <Chip onPress={() => alert("Purchased")}>RS {price}</Chip>
      </Card.Actions>
    </Card>
  );
};

export default ProductItemComponent;

const styles = StyleSheet.create({
  card: { marginHorizontal: 10, marginVertical: 10 },
  chip: {
    margin: 5,
    marginRight: "auto",
  },
});
