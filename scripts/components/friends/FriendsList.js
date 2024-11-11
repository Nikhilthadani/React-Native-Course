import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAuth } from "../../context/AuthProvider";
import { useNavigation } from "@react-navigation/native";
import { FriendsScreens } from "../../utils/constants";
const RenderItem = ({ data, user, nav }) => {
  return (
    <View
      style={{ borderWidth: 1, margin: 4, padding: 10, borderRadius: 10 }}
      onTouchEnd={() =>
        nav.navigate(FriendsScreens.FriendPage, {
          users: [{ ...data }, { ...user }],
        })
      }
    >
      <Text>{data.name}</Text>
    </View>
  );
};
const FriendsList = ({ friends }) => {
  const nav = useNavigation();
  const { user } = useAuth();
  return (
    <View style={{ margin: 10 }}>
      <FlatList
        data={friends}
        renderItem={(info) => (
          <RenderItem data={info.item} user={user} nav={nav} />
        )}
      />
    </View>
  );
};

export default FriendsList;

const styles = StyleSheet.create({});
