export const CreateExpenseSplitsTable = `CREATE TABLE IF NOT EXISTS expense_splits (
    expense_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    amount_owed REAL NOT NULL,
    PRIMARY KEY (expense_id, user_id),
    FOREIGN KEY (expense_id) REFERENCES expenses (id),
    FOREIGN KEY (user_id) REFERENCES users (id)
    )`;
