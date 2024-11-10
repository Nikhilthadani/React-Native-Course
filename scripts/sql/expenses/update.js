import Connection from "../connection";
import { UPDATE_EXPENSE_SETTLEMENT_STATEMENT } from "./queries";

export const updateExpenseSettlelemt = async (expenseId) => {
  try {
    const db = await Connection.getConnection();
    const result = await db.runAsync(UPDATE_EXPENSE_SETTLEMENT_STATEMENT, [
      expenseId,
    ]);
    console.log("Updated Expense Details ", expenseId, JSON.stringify(result));
    return result;
  } catch (error) {
    console.log("Error occurred in updateExpenseSettlelemt: err=>", error);
    throw error;
  }
};
