import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { ActivityIndicator, FAB } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { GroupScreens } from "../../utils/constants";
import { getExpensesOfGroup } from "../../sql/expenses/get";
import { useAppState } from "../../context/AppStateProvider";
import GroupExpenseList from "../../components/groups/GroupExpenseList";

const GroupItemMain = () => {
  const [loading, setLoading] = useState(true);
  const [expenses, setExpenses] = useState([]);
  const { selectedGroup } = useAppState();
  const nav = useNavigation();
  const navigateToGroupExpense = () => {
    nav.navigate(GroupScreens.GroupAddExpense);
  };

  useLayoutEffect(() => {
    getExpensesOfGroup(selectedGroup?.id)
      .then(setExpenses)
      .then(() => {
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return loading ? (
    <ActivityIndicator size={30} style={{ margin: "auto" }} />
  ) : (
    <View style={styles.container}>
      <GroupExpenseList expenses={expenses} />
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
