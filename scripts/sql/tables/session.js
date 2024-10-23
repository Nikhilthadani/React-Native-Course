export const SessionTable = `CREATE TABLE IF NOT EXISTS session (
id INTEGER,
user_id INTEGER,
PRIMARY KEY (id, user_id),
FOREIGN KEY (user_id) REFERENCES users(id)
);`;
