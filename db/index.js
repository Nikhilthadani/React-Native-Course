import * as Sqlite from "expo-sqlite";

// Setup new database
const db = Sqlite.openDatabase("marketplace.db");

// generate new table if not exists

export const deleteDb = () => {
  return new Promise((resolve, reject) => {
    db.transaction((trx) => {
      trx.executeSql(
        ` DROP TABLE products`,
        [],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      );
    });
  });
};
export const initDb = () => {
  return new Promise((resolve, reject) => {
    db.transaction((trx) => {
      trx.executeSql(
        ` CREATE TABLE IF NOT EXISTS products (
        id INTEGER primary key,
        price INTEGER NOT NULL,
        category TEXT NOT NULL,
        name TEXT NOT NULL,
        description TEXT NOT NULL,
        image TEXT NOT NULL,
        lat REAL NOT NULL,
        lng REAL NOT NULL
      );`,
        [],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      );
    });
  });
};
export const insertIntoDb = (
  id,
  name,
  price,
  category,
  description,
  image,
  lat,
  lng
) => {
  return new Promise((resolve, reject) => {
    db.transaction((trx) => {
      trx.executeSql(
        `INSERT INTO products 
          (id,name, price,category,description, image, lat, lng )
          VALUES(?,?,?,?,?,?,?,?);
          `,
        [id, name, price, category, description, image, lat, lng],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      );
    });
  });
};

export const fetchAllRecords = () => {
  return new Promise((resolve, reject) => {
    db.transaction((trx) => {
      trx.executeSql(
        ` SELECT * FROM products;`,
        [],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      );
    });
  });
};
