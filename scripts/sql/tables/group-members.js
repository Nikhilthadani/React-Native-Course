export const CreateGroupMembersTable = `CREATE TABLE IF NOT EXISTS group_members (
group_id INTEGER NOT NULL,
user_id INTEGER NOT NULL,
added_at DATETIME DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (group_id, user_id),
FOREIGN KEY (group_id) REFERENCES groups(id),
FOREIGN KEY (user_id) REFERENCES users(id)
)`;

// user -1, group- [1]
// user -1, group- [2]
// user -1, group- [3]
// user -1, group- [4]
// user -1, group- [5]

// SELECT has 5 rows
// join condition where groupId = groupId
// user -1, group- [1] (groupMembers) => groupId = 1 (...groumember,...group)
// user -1, group- [2] (rec) => join on group and if you find id in groupTable, just merge records
// user -1, group- [3] (rec) => join on group and if you find id in groupTable, just merge records
// user -1, group- [4] (rec) => join on group and if you find id in groupTable, just merge records
// user -1, group- [5] (rec) => join on group and if you find id in groupTable, just merge records
