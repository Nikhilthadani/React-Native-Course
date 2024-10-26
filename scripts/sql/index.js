import Connection from "./connection";
import { CreateActivitiesTable } from "./tables/activities";
import { CreateGroupsTable } from "./tables/group";
import { CreateGroupMembersTable } from "./tables/group-members";
import { SessionTable } from "./tables/session";
import { alterTableUsers, tableDefUsers, UsersTable } from "./tables/users";

const getAllTables = async () => {
  try {
    const db = await Connection.getConnection();
    const QUERY = `SELECT name FROM sqlite_master WHERE type = 'table'`;
    const result = await db.getAllAsync(QUERY);
    console.log(JSON.stringify(result));
  } catch (error) {
    console.log("Error while getiing all tables: ", error);
    throw error;
  }
};
export const onInitDatabase = async () => {
  try {
    const db = await Connection.getConnection();
    await db.execAsync(UsersTable);
    await db.execAsync(SessionTable);
    await db.execAsync(CreateGroupsTable);
    await db.execAsync(CreateGroupMembersTable);
    await db.execAsync(CreateActivitiesTable);
    await getAllTables();
  } catch (error) {
    console.log("Error while initalizing Database Tables: ", error);
    throw error;
  }
};

export const onErrorInitializingDatabase = async () => {
  alert("Something went wrong!");
};
