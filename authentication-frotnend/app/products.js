import {
  ActivityIndicator,
  FlatList,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import React from "react";

import { useGetAllProductsQuery } from "../store/products-api";
import ProductItemComponent from "../components/ProductItemComponent";
import { Stack } from "expo-router";
import { MD3Colors } from "react-native-paper";

const Products = () => {
  const { isLoading, error, data } = useGetAllProductsQuery();
  if (isLoading) {
    return <ActivityIndicator color={"red"} />;
  }
  console.log(data);
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Products",
          headerStyle: { backgroundColor: MD3Colors.error80 },
        }}
      />
      <FlatList
        data={data}
        renderItem={(iter) => <ProductItemComponent {...iter.item} />}
        keyExtractor={(iter) => iter.id}
      />
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight + 20,
  },
});
