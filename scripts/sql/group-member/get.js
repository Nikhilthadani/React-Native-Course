import Connection from "../connection";
import { GET_GROUPS_OF_USER } from "./queries";

export const getGroupsOfUser = async (userId) => {
  try {
    const db = await Connection.getConnection();

    const result = await db.getAllAsync(GET_GROUPS_OF_USER, +userId);
    console.log("Groups Of User:", result);
    return result;
  } catch (error) {
    console.log("Error in getGroupsOfUser: ", error);
    throw error;
  }
};
