import SQL from "../Database/database.js";
const Task = () => {};
const log = console.log;
var date = new Date();
var now = date.toLocaleString();
Task.adminDetails = async (data, result) => {
  let query = `SELECT admin_name,email,organization,role  FROM admin_master where email="${data}"`;
  SQL.query(query, async (err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Task.createNotice = async (data, result) => {
  const { noticeTitle, noticeBody } = data.body;
  const email = data.user;
  let query = `INSERT INTO notice (Title, body, created_by,last_updated_at) VALUES ("${noticeTitle}", "${noticeBody}","${email}","${now}" )`;
  SQL.query(query, async (err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, "success");
    }
  });
};

Task.getNotice = async (data, result) => {
  let query = `SELECT * FROM NOTICE ORDER BY ID DESC`;
  SQL.query(query, async (err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Task.editNotice = async (data, result) => {
  const { id, noticeTitle, noticeBody } = data;
  let query = `UPDATE NOTICE SET Title = "${noticeTitle}", BODY="${noticeBody}", last_updated_at="${now}" WHERE (id="${id}")`;
  SQL.query(query, async (err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, "success");
    }
  });
};

Task.deleteNotice = async (data, result) => {
  const { id } = data;
  let query = `UPDATE NOTICE SET status = "${0}", last_updated_at="${now}" WHERE (id="${id}")`;
  SQL.query(query, async (err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, "success");
    }
  });
};

Task.createTeacher = async (data, result) => {
  // const { id } = data;
  let query = `INSERT INTO TEACHER_MASTER (employee_id,name,password,contact,position,department,date_of_joining,isHod) VALUES ?`;
  SQL.query(
    query,
    [
      data.map((value) => [
        value.employee_id,
        value.name,
        value.password,
        value.contact,
        value.position,
        value.department,
        value.date_of_joining,
        value.isHod,
      ]),
    ],
    async (err, res) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

export default Task;
// Task.createDepartment = (data, result) => {
//   let query = `INSERT INTO SOA_DEPARTMENT (department_name, department_id) VALUES ?`;
//   sql.query(
//     query,
//     [data.map((value) => [value.department_name, value.department_id])],
//     async (err, response) => {
//       if (err) {
//         log(err);
//         result(err, null);
//       } else {
//         result(null, response);
//       }
//     }
//   );
// };
