import Connection from "../connection";
import { GET_ACTIVITIES_OF_USER } from "./queries";

export const getActivitiesOfUser = async (userId) => {
  try {
    const db = await Connection.getConnection();
    const result = await db.getAllAsync(GET_ACTIVITIES_OF_USER, [+userId]);
    console.log("Activities of UserId: ", userId, JSON.stringify(result));
    return result;
  } catch (error) {
    console.log("Error occurred in getActivitiesOfUser: err=>", error);
    throw error;
  }
};
