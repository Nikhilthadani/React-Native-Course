import Connection from "../../connection";
import { CREATE_USER, GET_USER } from "./queries";

export const createUser = async (
  name,
  email,
  phone,
  password,
  isRegistered = 1
) => {
  try {
    const db = await Connection.getConnection();
    const result = await db.runAsync(CREATE_USER, [
      name,
      email,
      phone,
      password,
      isRegistered,
    ]);
    console.log(result.lastInsertRowId);
    return await getUserById(result.lastInsertRowId);
  } catch (error) {
    console.log("Error creating new user: ", error);
    throw error;
  }
};

export const getUserById = async (id) => {
  try {
    const db = await Connection.getConnection();
    const result = await db.getFirstAsync(GET_USER, id);
    return result;
  } catch (error) {
    console.log("Error while getiing user by id: ", error);
    throw error;
  }
};
