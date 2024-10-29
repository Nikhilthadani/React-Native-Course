import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FAB } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { GroupScreens } from "../../utils/constants";

const GroupItemMain = () => {
  const nav = useNavigation();
  const navigateToGroupExpense = () => {
    nav.navigate(GroupScreens.GroupAddExpense);
  };
  return (
    <View style={styles.container}>
      <Text>GroupItemMain</Text>
      <FAB
        onPress={navigateToGroupExpense}
        style={styles.fab}
        label="Add Expense"
        icon={"wallet-plus-outline"}
      />
    </View>
  );
};

export default GroupItemMain;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fab: { position: "absolute", bottom: 15, right: 5 },
});
