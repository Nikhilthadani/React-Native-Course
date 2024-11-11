import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { ActivityIndicator, Button } from "react-native-paper";
import { useRoute } from "@react-navigation/native";
import { getExpenseSplits } from "../../sql/expenses/get";
import { PaymentStatus } from "../../utils/constants";
import Icon from "react-native-vector-icons/FontAwesome";
import { useAuth } from "../../context/AuthProvider";
import { updatePaymentRecord } from "../../sql/payments/update";

const RenderItem = ({ data, expense, userId }) => {
  const isUserDuePending = () => {
    if (data.user_id === userId && data.status === PaymentStatus.PENDING)
      return true;
    return false;
  };
  const settleUserDues = async () => {
    try {
      await updatePaymentRecord(expense.expense_id, userId);
      alert("SUCCESS");
    } catch (error) {
      alert("ERROR");
      console.log(error);
    }
  };
  return (
    <View
      style={{
        margin: 10,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        backgroundColor:
          data.status === PaymentStatus.PENDING ? "#E75A7C" : "#7FC6A4",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View>
        <Text>{data.name}</Text>
        <Text>{data.status}</Text>
        <Text>{data.amount_owed}</Text>
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "auto",
          padding: 10,
          gap: 5,
        }}
      >
        <Icon
          color="#0B132B"
          size={20}
          style={{}}
          name={
            data.status === PaymentStatus.PENDING ? "hourglass" : "check-circle"
          }
        />
      </View>
      {isUserDuePending() && (
        <Button onPress={settleUserDues} mode="elevated" textColor="black">
          Settle
        </Button>
      )}
    </View>
  );
};

const FriendExpenseItem = () => {
  const {
    params: { expense },
  } = useRoute();
  const {
    user: { id },
  } = useAuth();
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  useLayoutEffect(() => {
    getExpenseSplits(expense.expense_id)
      .then(setExpenses)
      .then(() => setLoading(false))
      .catch((err) => console.log(err));
  }, []);

  return loading ? (
    <ActivityIndicator style={{ margin: "auto" }} size={30} />
  ) : (
    <View>
      <Text style={{ fontSize: 20, padding: 20 }}>
        Expense Amount: {expense.amount}
      </Text>
      <Text style={{ fontSize: 20, padding: 20 }}>
        Expense Paid By: {expense.name}
      </Text>
      <FlatList
        data={expenses}
        renderItem={(info) => (
          <RenderItem data={info.item} expense={expense} userId={id} />
        )}
      />
    </View>
  );
};

export default FriendExpenseItem;

const styles = StyleSheet.create({});
