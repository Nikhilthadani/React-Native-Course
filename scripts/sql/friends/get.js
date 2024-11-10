import Connection from "../connection";
import { GET_FRIENDS_OF_USER } from "./queries";

export const getFriendsOfUser = async (userId) => {
  try {
    const db = await Connection.getConnection();
    const result = await db.getAllAsync(GET_FRIENDS_OF_USER, [
      +userId,
      +userId,
    ]);
    console.log("Friends Of User:", result);
    return result;
  } catch (error) {
    console.log("Error in getFriendsOfUser: ", error);
    throw error;
  }
};
