import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import favicon from "../assets/favicon.png";
const ImageExample = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: "https://images.unsplash.com/photo-1706463661407-e2b69fe55000?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
          loadingIndicatorSource={favicon}
        />
        <Image
          style={styles.image}
          source={{
            uri: "https://images.unsplash.com/photo-1706463661407-e2b69fe55000?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
          loadingIndicatorSource={favicon}
        />
        <Image
          style={styles.image}
          source={{
            uri: "https://images.unsplash.com/photo-1706463661407-e2b69fe55000?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
          loadingIndicatorSource={favicon}
        />
        <Image
          style={styles.image}
          source={{
            uri: "https://images.unsplash.com/photo-1706463661407-e2b69fe55000?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
          loadingIndicatorSource={favicon}
        />
      </View>
    </ScrollView>
  );
};

export default ImageExample;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
    marginTop: 40,
  },
  image: {
    width: 400,
    height: 400,
    marginTop: 10,
  },
});
