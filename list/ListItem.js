import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ListItem = (props) => {
  return (
    <View>
      <Text
        style={{
          backgroundColor: "pink",
          padding: 20,
          margin: 10,
          borderRadius: 10,
        }}
      >
        {props.item.title}
      </Text>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({});
