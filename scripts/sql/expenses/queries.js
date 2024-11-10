export const CREATE_NEW_EXPENSE_QUERY = `INSERT INTO expenses 
(description, amount, paid_by, group_id, is_settled)
VALUES (?,?,?,?,?)
`;

export const CREATE_NEW_EXPENSE_SPLITS_QUERY = `INSERT INTO expense_splits 
(expense_id, user_id, amount_owed)
VALUES (?,?,?)
`;

export const GET_EXPENSES_OF_A_GROUP = `SELECT e.*,u.name FROM expenses e
INNER JOIN users u ON u.id = e.paid_by
WHERE group_id = ?
`;

export const GET_EXPENSE_SPLITS_OF_EXPENSE = `SELECT es.*,u.name,p.status,p.amount FROM expense_splits es
INNER JOIN users u ON u.id = es.user_id
INNER JOIN payments p ON p.payer_id = es.user_id
WHERE es.expense_id = ? AND p.expense_id = ?
`;

export const UPDATE_EXPENSE_SETTLEMENT_STATEMENT = `UPDATE expenses 
SET is_settled = 1 
WHERE id = ?
`;
