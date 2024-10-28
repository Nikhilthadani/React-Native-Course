import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

/** Target
 * 1. Add new participants (select contacts, add those contacts in DB, unique mobile , unregisterd)
 * 2. Share expense
 * 3. See details, history of payments
 */
const GroupItem = () => {
  const {
    params: { group },
  } = useRoute();
  return (
    <View>
      <Text>{group.group_name}</Text>
    </View>
  );
};

export default GroupItem;

const styles = StyleSheet.create({});
