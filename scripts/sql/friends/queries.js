export const GET_FRIENDS_OF_USER = `SELECT u.id, u.name, u.email, u.phone
    FROM friends f
    JOIN users u ON u.id = f.added_id
    WHERE f.adder_id = ? 

    UNION

    SELECT u.id, u.name, u.email, u.phone
    FROM friends f
    JOIN users u ON u.id = f.adder_id
    WHERE f.added_id = ?
`;

export const CREATE_FRIEND_QUERY = `INSERT INTO friends 
(adder_id, added_id)
VALUES (?, ?)
`;
