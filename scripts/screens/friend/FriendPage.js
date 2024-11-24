import { View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ActivityIndicator, Button, FAB } from "react-native-paper";

import { getSettlementBetweenFriend } from "../../sql/payments/get";
import GroupExpenseList from "../../components/groups/GroupExpenseList";

const FriendPage = () => {
  const nav = useNavigation();
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  const {
    params: { users },
  } = useRoute();

  useLayoutEffect(() => {
    getSettlementBetweenFriend(users[0].id, users[1].id)
      .then((d) => setExpenses(d))
      .then(() => setLoading(false))
      .catch((err) => console.log(err));

    nav.addListener("focus", () => {
      getSettlementBetweenFriend(users[0].id, users[1].id)
        .then((d) => setExpenses(d))
        .then(() => setLoading(false))
        .catch((err) => console.log(err));
    });
  }, []);

  return loading ? (
    <ActivityIndicator size={30} style={{ margin: "auto" }} />
  ) : (
    <View style={{ flex: 1 }}>
      <GroupExpenseList expenses={expenses} isFriend={true} />
    </View>
  );
};

export default FriendPage;
