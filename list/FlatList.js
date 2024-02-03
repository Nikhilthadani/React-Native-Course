import { View, StyleSheet, Text, ScrollView, FlatList } from "react-native";
import ListItem from "./ListItem";
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];
export default function App() {
  return (
    <View style={styles.conatiner}>
      <FlatList
        data={DATA}
        renderItem={ListItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    marginVertical: 50,
  },
  button: {
    backgroundColor: "orange",
    width: 300,
    marginHorizontal: 30,
    marginVertical: 30,
    padding: 5,
    borderRadius: 10,
  },
  buttonTitle: {
    textAlign: "center",
  },
});
