import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import generateFakeNews from "../data/fake-news";
import ListItem from "../components/ListItem";

const LatestNews = ({ navigation }) => {
  const news = generateFakeNews(4);
  return (
    <SafeAreaView>
      <FlatList
        data={news}
        keyExtractor={(item) => item.id}
        renderItem={(iter) => (
          <ListItem {...iter.item} navigation={navigation} />
        )}
      />
    </SafeAreaView>
  );
};

export default LatestNews;

const styles = StyleSheet.create({});
