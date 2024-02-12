import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Icon from "react-native-vector-icons/Fontisto";

const NewsItem = ({ navigation, route }) => {
  const { id, title, author, content, date, image } = route.params;
  useEffect(() => {
    navigation.setOptions({ headerTitle: title });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.imageStyles} source={{ uri: image }} />
      <View style={styles.dateNAuthor}>
        <Text style={{ marginRight: "auto" }}>
          <Icon name="person" size={20} /> {author}
        </Text>
        <Text style={{ marginLeft: "auto" }}>
          <Icon size={20} name="date" /> {new Date(date).toLocaleString()}
        </Text>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
    </SafeAreaView>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  imageStyles: {
    width: "95%",
    height: 300,
    borderRadius: 10,
  },
  dateNAuthor: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    paddingVertical: 10,
  },
  content: {
    fontSize: 16,
    fontWeight: "600",
    paddingVertical: 10,
  },
});
