export const CREATE_NEW_PAYMENT_QUERY = `INSERT INTO payments
(payer_id, payee_id, amount, expense_id, status)
VALUES (?, ?, ?, ?, ?)
`;
