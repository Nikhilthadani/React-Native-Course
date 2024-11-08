import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar } from "react-native-paper";
import { useAuth } from "../../context/AuthProvider";

const RenderUserShareItem = ({
  totalAmount,
  expenseData,
  users,
  dataKey,
  loggedInUserId,
}) => {
  const user = users.find((u) => u.id === +dataKey);
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "start",
        alignItems: "center",
        gap: 4,
        margin: 10,
        padding: 4,
      }}
    >
      <Avatar.Text label={user.name[0]} size={30}></Avatar.Text>
      {loggedInUserId === user.id && <Text>Paid by you: {totalAmount}</Text>}
      {loggedInUserId !== user.id && (
        <Text>
          You Owe {user.name} : {totalAmount * (expenseData[dataKey] / 100)}
        </Text>
      )}
    </View>
  );
};

const ExpenseDetails = ({ expenseData, totalAmount, users }) => {
  const {
    user: { id },
  } = useAuth();
  return (
    <View
      style={{
        maxHeight: 300,
        width: Dimensions.get("window").width - 50,
        padding: 20,
        marginVertical: 10,
      }}
    >
      <Text style={{ fontSize: 20 }}>Split Details</Text>
      <FlatList
        data={Object.keys(expenseData)}
        renderItem={(info) => (
          <RenderUserShareItem
            loggedInUserId={id}
            dataKey={info.item}
            expenseData={expenseData}
            totalAmount={totalAmount}
            users={users}
          />
        )}
      />
    </View>
  );
};

export default ExpenseDetails;

const styles = StyleSheet.create({});
