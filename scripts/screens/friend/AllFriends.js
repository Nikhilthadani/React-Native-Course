import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { ActivityIndicator, Button, FAB } from "react-native-paper";
import { getFriendsOfUser } from "../../sql/friends/get";
import { useAuth } from "../../context/AuthProvider";
import { useNavigation } from "@react-navigation/native";
import { FriendsScreens } from "../../utils/constants";
import { FlatList } from "react-native-gesture-handler";
import FriendsList from "../../components/friends/FriendsList";

const AllFriends = () => {
  const nav = useNavigation();
  const {
    user: { id },
  } = useAuth();
  const [loading, setLoading] = useState(true);
  const [friends, setFriends] = useState([]);

  useLayoutEffect(() => {
    getFriendsOfUser(id)
      .then(setFriends)
      .then(() => {
        setLoading(false);
      })
      .catch((err) => console.log(err));

    nav.addListener("focus", () => {
      getFriendsOfUser(id)
        .then(setFriends)
        .then(() => {
          setLoading(false);
        })
        .catch((err) => console.log(err));
    });
  }, []);
  const navigateToAddFriendScreen = () => [
    nav.navigate(FriendsScreens.AddFriend),
  ];
  return loading ? (
    <ActivityIndicator />
  ) : (
    <View style={{ flex: 1 }}>
      <FriendsList friends={friends} />
      <Button
        onPress={navigateToAddFriendScreen}
        style={{ width: 200, borderRadius: 10, marginHorizontal: "auto" }}
        mode="outlined"
      >
        Add More Friends
      </Button>
    </View>
  );
};

export default AllFriends;
