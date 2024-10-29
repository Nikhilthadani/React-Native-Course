export const CreateExpensesTable = `CREATE TABLE IF NOT EXISTS expenses (
id INTEGER PRIMARY KEY AUTOINCREMENT,
description TEXT NOT NULL,
amount REAL NOT NULL,
paid_by INTEGER NOT NULL,
group_id INTEGER,
is_settled INTEGER DEFAULT 0,
created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (paid_by) REFERENCES users(id),
FOREIGN KEY (group_id) REFERENCES groups(id)
)`;
