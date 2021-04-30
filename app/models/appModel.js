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
  let query = `select * from notice order by id desc`;
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
  let query = `INSERT INTO TEACHER_MASTER (employee_id,name,password,contact,position,department,date_of_joining,isHod,created_by,last_updated_at) VALUES ?`;
  SQL.query(
    query,
    [
      data.body.map((value) => [
        value.employee_id,
        value.name,
        value.password,
        value.contact,
        value.position,
        value.department,
        value.date_of_joining,
        value.isHod,
        data.user,
        now,
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

Task.createDepartment = async (data, result) => {
  let query = `INSERT INTO DEPARTMENT (DEPT_ID,DEPT_NAME,section,CREATED_BY) VALUES ?`;
  SQL.query(
    query,
    [
      data.body.map((value) => [
        value.dept_id,
        value.dept_name,
        value.section,
        data.user,
      ]),
    ],
    async (err, res) => {
      if (err) {
        if (err.code === "ER_DUP_ENTRY") {
          result(null, { status: "duplicate" });
        } else {
          console.log(err);
          result(err, null);
        }
      } else {
        result(null, { status: "created" });
      }
    }
  );
};

Task.createPosition = async (data, result) => {
  let query = `INSERT INTO position_table (position_id,position,created_by) VALUES ?`;
  SQL.query(
    query,
    [data.body.map((value) => [value.position_id, value.position, data.user])],
    async (err, res) => {
      if (err) {
        if (err.code === "ER_DUP_ENTRY") {
          result(null, { status: "duplicate" });
        } else {
          console.log(err);
          result(err, null);
        }
      } else {
        result(null, { status: "created" });
      }
    }
  );
};

Task.getDepartment = async (data, result) => {
  let query = `SELECT * FROM department order by dept_id ASC`;
  SQL.query(query, data, async (err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Task.getPosition = async (data, result) => {
  let query = `SELECT * FROM position_table ORDER BY POSITION_ID ASC`;
  SQL.query(query, data, async (err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Task.getTeacher = async (data, result) => {
  let query = `SELECT * FROM TEACHER_MASTER ORDER BY ID ASC`;
  SQL.query(query, data, async (err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Task.editPosition = async (data, result) => {
  const { id, position_id, position, status } = data;
  let query = `UPDATE position_table SET position_id = "${position_id}", position="${position}", status="${status}" WHERE (id="${id}")`;
  SQL.query(query, async (err, res) => {
    if (err) {
      if (err.code === "ER_DUP_ENTRY") {
        result(null, { status: "duplicate" });
      } else {
        console.log(err);
        result(err, null);
      }
    } else {
      result(null, { status: "success" });
    }
  });
};

Task.deletePosition = async (data, result) => {
  const { id } = data;
  let query = `UPDATE position_table SET status = "${0}" WHERE (id="${id}")`;
  SQL.query(query, async (err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, "success");
    }
  });
};

Task.editDepartment = async (data, result) => {
  const { id, dept_id, dept_name, status, section } = data;
  let query = `UPDATE department SET dept_id = "${dept_id}", dept_name="${dept_name}",section="${section}", status="${status}" WHERE (id="${id}")`;
  SQL.query(query, async (err, res) => {
    if (err) {
      if (err.code === "ER_DUP_ENTRY") {
        result(null, { status: "duplicate" });
      } else {
        console.log(err);
        result(err, null);
      }
    } else {
      result(null, { status: "success" });
    }
  });
};

Task.deleteDepartment = async (data, result) => {
  const { id } = data;
  let query = `UPDATE department SET status = "${0}" WHERE (id="${id}")`;
  SQL.query(query, async (err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, "success");
    }
  });
};
Task.getParticularTeacher = async (data, result) => {
  const { user } = data;
  let query = `select employee_id,name,position,department,isHod from teacher_master where employee_id = "${user}"`;
  SQL.query(query, data, async (err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Task.createSubject = async (data, result) => {
  let query = `insert into subject_master (subjectCode,subjectName,semester,isActive,department,created_by,last_updated_at) values ?`;
  SQL.query(
    query,
    [
      data.body.map((value) => [
        value.subjectCode,
        value.subjectName,
        value.semester,
        value.isActive,
        value.department,
        data.user,
        now,
      ]),
    ],
    async (err, res) => {
      if (err) {
        if (err.code === "ER_DUP_ENTRY") {
          result(null, { status: "duplicate" });
        } else {
          console.log(err);
          result(err, null);
        }
      } else {
        result(null, { status: "created" });
      }
    }
  );
};

Task.getSubject = async (data, result) => {
  let query = `select * from subject_master order by id asc`;
  SQL.query(query, data, async (err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Task.editSubject = async (data, result) => {
  const { id, status, isActive } = data;
  let query = `update subject_master set isactive = '${isActive}', status = '${status}' where (id = '${id}')`;
  SQL.query(query, data, async (err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

export default Task;
