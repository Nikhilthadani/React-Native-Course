import { SafeAreaView, StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import ListItem from "../components/ListItem";
import generateFakeNews from "../data/fake-news";

const Allnews = () => {
  const news = generateFakeNews(15);
  return (
    <SafeAreaView>
      <FlatList
        data={news}
        keyExtractor={(item) => item.id}
        renderItem={(iter) => <ListItem {...iter.item} />}
      />
    </SafeAreaView>
  );
};

export default Allnews;

const styles = StyleSheet.create({});
