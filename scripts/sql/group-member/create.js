import { CREATE_GROUP_MEMBER_QUERY } from "./queries";

export const createGroupMembers = async (arrOfUserId, groupId, db) => {
  if (!arrOfUserId || arrOfUserId.length === 0)
    throw new Error("No user id present");
  try {
    for (const id of arrOfUserId) {
      // insert to groumember
      const result = await db.runAsync(CREATE_GROUP_MEMBER_QUERY, [
        groupId,
        id,
      ]);
      console.log("New group member created! ", result);
    }
  } catch (error) {
    console.log("Error occurred while creating new group member: ", error);
    throw error;
  }
};
