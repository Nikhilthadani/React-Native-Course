import Connection from "./connection";
import { SessionTable } from "./tables/session";
import { UsersTable } from "./tables/users";

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
    await getAllTables();
  } catch (error) {
    console.log("Error while initalizing Database Tables: ", error);
    throw error;
  }
};

export const onErrorInitializingDatabase = async () => {
  alert("Something went wrong!");
};
