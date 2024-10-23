import * as SQLite from "expo-sqlite";
import { DatabaseName } from "../../utils/constants";

export default class Connection {
  static #connection = null;

  static async getConnection() {
    if (!this.#connection) {
      this.#connection = await SQLite.openDatabaseAsync(DatabaseName);
      return this.#connection;
    }
    return this.#connection;
  }
}
