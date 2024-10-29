import { registerUsersUnOffical } from "../auth/user/create-user-accounts";
import Connection from "../connection";
import { createGroupMembers } from "../group-member/create";
import { CREATE_NEW_GROUP_QUERY } from "./queries";

export const createNewGroup = async (name, creatorId) => {
  const db = await Connection.getConnection();
  try {
    // verify if the creator of this group is already present
    console.log("Starting TXN");

    await db.execAsync("BEGIN"); // Starts TXN

    const group = await db.runAsync(CREATE_NEW_GROUP_QUERY, [name, +creatorId]);
    console.log("Group created!: ", JSON.stringify(group));
    const groupId = group.lastInsertRowId;

    await createGroupMembers([+creatorId], Number(groupId), db);
    console.log("group members created");

    console.log("Commiting TXN");

    await db.execAsync("COMMIT");

    return groupId;
  } catch (error) {
    console.log("TXN Failed");
    await db.execAsync("ROLLBACK"); // Revert Changes
    console.log(error);
    throw error;
  }
};

export const createNewGroupMembersTransaction = async (contactIds, groupId) => {
  const db = await Connection.getConnection();
  try {
    console.log("Starting TXN");
    await db.execAsync("BEGIN");

    const userIds = await registerUsersUnOffical(contactIds);
    if (userIds.length > 0) {
      await createGroupMembers(userIds, groupId, db);
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
