export const CREATE_GROUP_MEMBER_QUERY = `INSERT INTO group_members
(group_id, user_id)
VALUES (?, ?)
`;
export const GET_ALL_GROUP_MEMBERS_BY_ID = `SELECT * FROM group_members gm
INNER JOIN users u ON gm.user_id = u.id
WHERE group_id = ?
`;

export const GET_GROUPS_OF_USER = `SELECT * FROM group_members gm
INNER JOIN groups g ON gm.group_id = g.id
WHERE user_id = ?
`;
