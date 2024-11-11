import Connection from "../connection";
import { GET_SETTLEMENT_BETWEEN_FRIEND } from "./queries";

export const getSettlementBetweenFriend = async (user1, user2) => {
  try {
    const db = await Connection.getConnection();
    const result = await db.getAllAsync(GET_SETTLEMENT_BETWEEN_FRIEND, [
      +user1,
      +user2,
      +user2,
      +user1,
    ]);
    console.log("Settlements between Of Users", result);
    return result;
  } catch (error) {
    console.log("Error in getSettlementBetweenFriend: ", error);
    throw error;
  }
};
