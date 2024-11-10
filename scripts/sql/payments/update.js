import { PaymentStatus } from "../../utils/constants";
import Connection from "../connection";
import { getPaymentStatusOfExpense } from "../expenses/get";
import { updateExpenseSettlelemt } from "../expenses/update";
import { UPDATE_PAYMENT_STATEMENT } from "./queries";

export const updatePaymentRecord = async (expenseId, userId) => {
  const db = await Connection.getConnection();
  try {
    console.log("Beginning txn");

    db.execAsync("BEGIN");
    const updatePaymentRecord = await db.runAsync(UPDATE_PAYMENT_STATEMENT, [
      expenseId,
      userId,
    ]);

    console.log("Payment Record Updated!", JSON.stringify(updatePaymentRecord));

    // check other users payments
    const payments = await getPaymentStatusOfExpense(expenseId);
    if (payments.length === 0) {
    } else {
      let flag = 0;
      for (const payment of payments) {
        if (payment.status === PaymentStatus.PENDING) {
          flag = 1;
        }
      }
      if (flag == 0) {
        // update the status of expense
        await updateExpenseSettlelemt(expenseId);
      }
    }
    console.log("Commiting txn");

    db.execAsync("COMMIT");
    return updatePaymentRecord;
  } catch (error) {
    console.log("error occurred in updatePaymentRecord, err=>", error);
    console.log("ROLLING BACK txn");
    db.execAsync("ROLLBACK");
    throw error;
  }
};
