export const CreatePaymentsTable = `CREATE TABLE IF NOT EXISTS payments (
id INTEGER PRIMARY KEY AUTOINCREMENT,
payer_id INTEGER NOT NULL,
payee_id INTEGER NOT NULL,
amount REAL NOT NULL,
expense_id INTEGER NOT NULL,
status TEXT,
created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (payer_id) REFERENCES users (id),
FOREIGN KEY (payee_id) REFERENCES users (id),
FOREIGN KEY (expense_id) REFERENCES expenses (id)
)`;
