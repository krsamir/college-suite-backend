import SQL from "../Database/database.js";
const Task = () => {};
const log = console.log;
var date = new Date();
var now = date.toLocaleString();
Task.adminDetails = async (data, result) => {
  let query = `select admin_name,email,organization,role  from admin_master where email="${data}"`;
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
  let query = `insert into notice (title, body, created_by,last_updated_at) values ("${noticeTitle}", "${noticeBody}","${email}","${now}" )`;
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
  let query = `update notice set title = "${noticeTitle}", body="${noticeBody}", last_updated_at="${now}" where (id="${id}")`;
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
  let query = `update notice set status = "${0}", last_updated_at="${now}" where (id="${id}")`;
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
  let query = `INSERT INTO TEACHER_MASTER (employee_id,name,password,contact,position,department,date_of_joining,isHod,created_by,last_updated_at) values ?`;
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
  let query = `insert into department (dept_id,dept_name,section,created_by) values ?`;
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
  let query = `insert into position_table (position_id,position,created_by) values ?`;
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
  let query = `select * from department order by dept_id asc`;
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
  let query = `select * from position_table order by position_id asc`;
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
  let query = `select * from teacher_master order by id asc`;
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
  let query = `update position_table set position_id = "${position_id}", position="${position}", status="${status}" where (id="${id}")`;
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
  let query = `update position_table set status = "${0}" where (id="${id}")`;
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
  let query = `update department set dept_id = "${dept_id}", dept_name="${dept_name}",section="${section}", status="${status}" where (id="${id}")`;
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
  let query = `update department set status = "${0}" where (id="${id}")`;
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
  let query = `select employee_id,name,position,department,ishod from teacher_master where employee_id = "${user}"`;
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
      console.log(res);
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

Task.getStudent = async (data, result) => {
  let query = `select regd_no,name,department,contact,year_of_joining  from student_master where regd_no="${data}"`;
  SQL.query(query, async (err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

export default Task;
