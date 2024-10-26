import Connection from "../../connection";
import { ADD_NEW_SESSION, DELETE_SESSION, GET_SESSION } from "./queries";

export const createNewSession = async (userId) => {
  try {
    const db = await Connection.getConnection();
    const result = await db.runAsync(ADD_NEW_SESSION, userId);
    console.log("createNewSession >>>", JSON.stringify(result));
    return result;
  } catch (error) {
    console.log("Error while performing createNewSession: ", error);
    throw error;
  }
};

export const deleteSessions = async () => {
  try {
    const db = await Connection.getConnection();
    const result = await db.runAsync(DELETE_SESSION);
    console.log("deleteSessions >>>", JSON.stringify(result));
    return result;
  } catch (error) {
    console.log("Error while performing deleteSessions: ", error);
    throw error;
  }
};

export const getSession = async () => {
  try {
    const db = await Connection.getConnection();
    const result = await db.getAllAsync(GET_SESSION);
    console.log("getSession >>>", JSON.stringify(result));
    return result;
  } catch (error) {
    console.log("Error while performing getSession: ", error);
    throw error;
  }
};
