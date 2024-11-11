import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ActivityIndicator, Button, FAB } from "react-native-paper";
import { FriendsScreens } from "../../utils/constants";
import { useAuth } from "../../context/AuthProvider";
import { getSettlementBetweenFriend } from "../../sql/payments/get";
import GroupExpenseList from "../../components/groups/GroupExpenseList";

const FriendPage = () => {
  const nav = useNavigation();
  const auth = useAuth();
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  const {
    params: { users },
  } = useRoute();

  const navigateToFriendAddExpense = () => {
    nav.navigate(FriendsScreens.FriendAddExpense, { users });
  };

  useLayoutEffect(() => {
    getSettlementBetweenFriend(users[0].id, users[1].id)
      .then((d) => setExpenses(d))
      .then(() => setLoading(false))
      .catch((err) => console.log(err));
  }, []);

  return loading ? (
    <ActivityIndicator size={30} style={{ margin: "auto" }} />
  ) : (
    <View style={{ flex: 1 }}>
      <Text>Revenues and Expenses</Text>
      <Text>{JSON.stringify(expenses)}</Text>
      <GroupExpenseList expenses={expenses} isFriend={true} />
      <FAB
        onPress={navigateToFriendAddExpense}
        style={styles.fab}
        label="Add Expense"
        icon={"wallet-plus-outline"}
      />
    </View>
  );
};

export default FriendPage;

const styles = StyleSheet.create({
  fab: { position: "absolute", bottom: 15, right: 5 },
});
