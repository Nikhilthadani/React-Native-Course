import Connection from "../connection";
import {
  GET_EXPENSE_SPLITS_OF_EXPENSE,
  GET_EXPENSES_OF_A_GROUP,
} from "./queries";

export const getExpensesOfGroup = async (groupId) => {
  try {
    const db = await Connection.getConnection();
    const result = await db.getAllAsync(GET_EXPENSES_OF_A_GROUP, [groupId]);
    console.log("Expenses of GroupId: ", groupId, JSON.stringify(result));
    return result;
  } catch (error) {
    console.log("Error occurred in getExpensesOfGroup: err=>", error);
    throw error;
  }
};

export const getExpenseSplits = async (expenseId) => {
  try {
    const db = await Connection.getConnection();
    const result = await db.getAllAsync(GET_EXPENSE_SPLITS_OF_EXPENSE, [
      expenseId,
      expenseId,
    ]);
    console.log(
      "Expense SPlits of ExpenseId: ",
      expenseId,
      JSON.stringify(result)
    );
    return result;
  } catch (error) {
    console.log("Error occurred in getExpenseSplits: err=>", error);
    throw error;
  }
};
