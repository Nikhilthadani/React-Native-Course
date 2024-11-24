import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Chip, Icon } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { FriendsScreens, GroupScreens } from "../../utils/constants";
const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const RenderItem = ({ data, expenses, isFriend }) => {
  const nav = useNavigation();
  const onExpenseClick = () => {
    nav.navigate(
      isFriend
        ? FriendsScreens.FriendExpenseItem
        : GroupScreens.GroupExpenseItem,
      { expense: data }
    );
  };
  return (
    <TouchableOpacity
      onPress={onExpenseClick}
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#1e2420",
        width: Dimensions.get("window").width - 20,
        borderRadius: 15,
        padding: 20,
        gap: 2,
        margin: 10,
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 1,
          borderColor: "white",
          borderRadius: 10,
          padding: 5,
        }}
      >
        <Text style={{ color: "white" }}>
          {monthNames[new Date(data.created_at).getMonth()]}
        </Text>
        <Text style={{ color: "white" }}>
          {new Date(data.created_at).getDate()}
        </Text>
      </View>
      <View style={{ marginHorizontal: 5 }}>
        <Icon size={50} source={"receipt"} color="white" />
      </View>
      <View style={{ width: Dimensions.get("window").width / 2, padding: 5 }}>
        <Text style={{ color: "white", fontSize: 20, fontWeight: "500" }}>
          {data.description}
        </Text>
        <Text style={{ color: "white", fontWeight: "600" }}>
          {data.name} Paid {data.amount}
        </Text>
      </View>
      <View>
        <Chip
          style={{
            backgroundColor: data.is_settled ? "green" : "red",
            marginLeft: "auto",
          }}
        />
        <Text style={{ color: "white" }}>
          {data.is_settled ? "Settled" : "Unsettled"}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const GroupExpenseList = ({ expenses, isFriend }) => {
  return (
    <View style={{ marginTop: 40 }}>
      <Text style={{ fontWeight: "500", fontSize: 20, padding: 10 }}>
        Splits
      </Text>
      <FlatList
        keyExtractor={(item) => `${item.id + item.expense_id}`}
        data={expenses}
        renderItem={(info) => (
          <RenderItem
            data={info.item}
            expenses={expenses}
            isFriend={isFriend}
          />
        )}
      />
    </View>
  );
};

export default GroupExpenseList;

const styles = StyleSheet.create({});
