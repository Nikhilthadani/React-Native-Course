import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Card, MD3Colors } from "react-native-paper";
import { AppScreens } from "../utils/constants";

const ListItem = ({ id, title, content, image, author, date, navigation }) => {
  const onPressNews = () => {
    navigation.navigate(AppScreens.NewsItem, {
      id,
      title,
      author,
      content,
      date,
      image,
    });
  };
  return (
    <Card onPress={onPressNews} style={styles.conatiner}>
      <Card.Cover source={{ uri: image }} />
      <Card.Title style={styles.date} title={new Date(date).toLocaleString()} />
      <Card.Title title={title} />
      <Card.Content>
        <Text variant="titleLarge">{content}</Text>
      </Card.Content>
    </Card>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  conatiner: {
    margin: 10,
    padding: 10,
  },
  date: {
    color: MD3Colors.tertiary100,
  },
});
