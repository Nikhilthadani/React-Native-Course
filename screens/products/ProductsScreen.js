import { RefreshControl, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FlatList } from "react-native";
import ProductItemComponent from "../../components/ProductItemComponent";
import FETCH_ALL_PRODUCTS from "../../store/thunks-queries/FetchProductThunk";

const ProductsScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FETCH_ALL_PRODUCTS());
  }, []);
  const products = useSelector((state) => state.products.products);
  const onRefreshList = () => {
    setRefreshing(true);
    dispatch(FETCH_ALL_PRODUCTS());
    setRefreshing(false);
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={(item) => <ProductItemComponent {...item.item} />}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefreshList} />
        }
      />
    </View>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
