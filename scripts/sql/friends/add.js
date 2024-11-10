import { registerUsersUnOffical } from "../auth/user/create-user-accounts";
import Connection from "../connection";
import { CREATE_FRIEND_QUERY } from "./queries";

export const createFriends = async (arrOfUserId, adderId, db) => {
  if (!arrOfUserId || arrOfUserId.length === 0)
    throw new Error("No user id present");
  try {
    for (const id of arrOfUserId) {
      const result = await db.runAsync(CREATE_FRIEND_QUERY, [adderId, id]);
      console.log("New friend created! ", result);
    }
  } catch (error) {
    console.log("Error occurred while createFriends: ", error);
    throw error;
  }
};

export const createFriendTransaction = async (contactIds, adderId) => {
  const db = await Connection.getConnection();
  try {
    console.log("Starting TXN");
    await db.execAsync("BEGIN");

    const userIds = await registerUsersUnOffical(contactIds);
    if (userIds.length > 0) {
      await createFriends(userIds, adderId, db);
    }
    console.log("Commiting TXN");
    await db.execAsync("COMMIT");
  } catch (error) {
    console.log("TXN Failed");
    await db.execAsync("ROLLBACK"); // Revert Changes
    console.log(error);
    throw error;
  }
};
