import SQL from "../Database/database.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { config } from "dotenv";
config();
const { JWT_SECRET, JWT_EXPIRATION_TIME } = process.env;
const Auth = () => {};
const log = console.log;
Auth.loginOwner = (data, result) => {
  const { email, password } = data;
  let query = `SELECT * FROM owner_master where email="${email}"`;
  SQL.query(query, async (err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      if (res.length === 0) {
        result(null, "usernotfound");
      } else {
        const response = JSON.parse(JSON.stringify(res))[0];
        // const isMatched = await bcrypt.compare(password, response.password);
        const isMatched = password === response.password;
        if (isMatched) {
          const token = jwt.sign({ id: email, role: "owner" }, JWT_SECRET, {
            expiresIn: JWT_EXPIRATION_TIME,
            // expiresIn: "7 days",
          });
          return result(null, { token });
        } else {
          result(null, "invaliduser");
        }
      }
    }
  });
};

Auth.loginAdmin = (data, result) => {
  const { email, password } = data;
  let query = `SELECT * FROM admin_master where email="${email}"`;
  SQL.query(query, async (err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      if (res.length === 0) {
        result(null, "usernotfound");
      } else {
        const response = JSON.parse(JSON.stringify(res))[0];
        // const isMatched = await bcrypt.compare(password, response.password);
        const isMatched = password === response.password;
        if (isMatched) {
          const token = jwt.sign({ id: email, role: "admin" }, JWT_SECRET, {
            expiresIn: JWT_EXPIRATION_TIME,
          });
          return result(null, { token });
        } else {
          result(null, "invaliduser");
        }
      }
    }
  });
};

Auth.loginTeacher = (data, result) => {
  const { empId, password } = data;
  let query = `SELECT * FROM teacher_master where employee_id="${empId}"`;
  SQL.query(query, async (err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      if (res.length === 0) {
        result(null, "usernotfound");
      } else {
        const response = JSON.parse(JSON.stringify(res))[0];
        // const isMatched = await bcrypt.compare(password, response.password);
        const isMatched = password === response.password;
        if (isMatched) {
          const token = jwt.sign({ id: empId, role: "teacher" }, JWT_SECRET, {
            expiresIn: JWT_EXPIRATION_TIME,
          });
          return result(null, { token });
        } else {
          result(null, "invaliduser");
        }
      }
    }
  });
};

Auth.loginStudent = (data, result) => {
  const { regdno, password } = data;
  let query = `SELECT * FROM student_master where regd_no="${regdno}"`;
  SQL.query(query, async (err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      if (res.length === 0) {
        result(null, "usernotfound");
      } else {
        const response = JSON.parse(JSON.stringify(res))[0];
        // const isMatched = await bcrypt.compare(password, response.password);
        const isMatched = password === response.password;
        if (isMatched) {
          const token = jwt.sign({ id: regdno, role: "student" }, JWT_SECRET, {
            expiresIn: JWT_EXPIRATION_TIME,
          });
          return result(null, { token });
        } else {
          result(null, "invaliduser");
        }
      }
    }
  });
};

export default Auth;
