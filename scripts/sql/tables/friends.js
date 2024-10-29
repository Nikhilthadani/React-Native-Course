export const CreateFriendsTable = `CREATE TABLE IF NOT EXISTS friends (
adder_id INTEGER NOT NULL,
added_id INTEGER NOT NULL,
PRIMARY KEY (adder_id, added_id),
FOREIGN KEY (adder_id) REFERENCES users(id),
FOREIGN KEY (added_id) REFERENCES users(id)
)`;
