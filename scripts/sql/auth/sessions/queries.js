export const ADD_NEW_SESSION = `INSERT INTO session 
(id, user_id) 
VALUES (1, ?)
`;

export const DELETE_SESSION = "DELETE FROM session";

export const GET_SESSION = "SELECT * FROM session";
