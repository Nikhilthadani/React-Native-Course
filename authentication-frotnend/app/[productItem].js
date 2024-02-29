import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import { useGetProductByIdQuery } from "../store/products-api";
import { ActivityIndicator } from "react-native-paper";

const ProductItem = () => {
  const params = useLocalSearchParams();
  const { isLoading, data, error } = useGetProductByIdQuery(params.id);
  if (isLoading) {
    return <ActivityIndicator size={30} color="green" />;
  }
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Stack.Screen options={{ title: data.title }} />
      <Image style={{ width: 400, height: 300 }} source={{ uri: data.image }} />
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({});
