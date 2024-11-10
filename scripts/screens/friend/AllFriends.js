import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { ActivityIndicator, Button, FAB } from "react-native-paper";
import { getFriendsOfUser } from "../../sql/friends/get";
import { useAuth } from "../../context/AuthProvider";
import { useNavigation } from "@react-navigation/native";
import { FriendsScreens } from "../../utils/constants";

const AllFriends = () => {
  const nav = useNavigation();
  const {
    user: { id },
  } = useAuth();
  const [loading, setLoading] = useState(true);
  const [friends, setFriends] = useState([]);
  const navigateToAddExpense = () => {
    nav.navigate(FriendsScreens.FriendAddExpense);
  };
  useLayoutEffect(() => {
    getFriendsOfUser(id)
      .then(setFriends)
      .then(() => {
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  const navigateToAddFriendScreen = () => [
    nav.navigate(FriendsScreens.AddFriend),
  ];
  return loading ? (
    <ActivityIndicator />
  ) : (
    <View style={{ flex: 1 }}>
      <Text>AllFriends</Text>
      <Text>{JSON.stringify(friends)}</Text>
      <Button
        onPress={navigateToAddFriendScreen}
        style={{ width: 200, borderRadius: 10, marginHorizontal: "auto" }}
        mode="outlined"
      >
        Add More Friends
      </Button>
      <FAB
        onPress={navigateToAddExpense}
        style={styles.fab}
        label="Add Expense"
        icon={"wallet-plus-outline"}
      />
    </View>
  );
};

export default AllFriends;

const styles = StyleSheet.create({
  fab: { position: "absolute", bottom: 15, right: 5 },
});
