import { SectionList, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
const DUMMY_DATA = [
  {
    id: 1,
    category: "Laptops",
    data: ["Macbook Pro M1", "Lenovo Idepad", "Dell Business"],
  },
  {
    id: 2,
    category: "Mobiles",
    data: ["iPhone 15", "Samsung Fold", "OnePlus 3"],
  },
];
const SectionListExample = () => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={DUMMY_DATA}
        renderItem={(iter) => <Text style={styles.listtext}>{iter.item}</Text>}
        renderSectionHeader={(iter) => (
          <Text style={styles.header}>{iter.section.category}</Text>
        )}
        // renderSectionFooter={(iter) => <Text>{iter.section.category}</Text>}
      />
    </View>
  );
};

export default SectionListExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  listtext: {
    backgroundColor: "cadetblue",
    padding: 20,
    margin: 10,
    borderRadius: 10,
    color: "white",
    fontSize: 20,
  },
  header: {
    backgroundColor: "pink",
    padding: 20,
    margin: 10,
    borderRadius: 10,
    fontSize: 20,
  },
});
