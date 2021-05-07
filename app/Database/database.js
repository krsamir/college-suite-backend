import mysql from "mysql";
import { config } from "dotenv";
config();
const {
  DATABASE_HOST,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_DB,
} = process.env;
const db = mysql.createConnection({
  host: DATABASE_HOST,
  user: DATABASE_USER,
  password: DATABASE_PASSWORD,
  database: DATABASE_DB,
});
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("My SQL Connected.");
});

export default db;
