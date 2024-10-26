export const CREATE_NEW_GROUP_QUERY = `INSERT INTO groups 
(group_name,created_by)
VALUES (?, ?)
`;

export const GET_ALL_GROUPS = `SELECT * FROM groups
`;
