import { CREATE_NEW_PAYMENT_QUERY } from "./queries";

export const addNewPaymentRecord = async (
  db,
  payerId,
  payeeId,
  amount,
  expenseId,
  status
) => {
  try {
    const newPaymentRecord = await db.runAsync(CREATE_NEW_PAYMENT_QUERY, [
      payerId,
      payeeId,
      amount,
      expenseId,
      status,
    ]);
    console.log("Payment Record Created!", JSON.stringify(newPaymentRecord));
    return newPaymentRecord?.lastInsertRowId;
  } catch (error) {
    console.log("error occurred in addNewPaymentRecord, err=>", error);
    throw error;
  }
};
