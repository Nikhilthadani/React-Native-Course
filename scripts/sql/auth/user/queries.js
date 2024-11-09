export const CREATE_USER = `INSERT INTO users 
    (name,email,phone,password, is_registered)
    VALUES (? ,?, ?, ?, ?)
`;

export const GET_USER = `SELECT id,name,email,phone,password from users 
    WHERE id = ?
`;

export const GET_USER_BY_PHONE = `SELECT id,name,email,phone,password from users 
    WHERE phone = ?
`;
