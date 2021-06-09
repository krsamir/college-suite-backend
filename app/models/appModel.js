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
  let query = `select employee_id,name, contact, position, department, date_of_joining,isHod,created_by, last_updated_at from teacher_master order by id asc`;
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
      result(null, res);
    }
  });
};

Task.editSubject = async (data, result) => {
  const { id, status, isActive } = data;
  let query = `update subject_master set isactive = '${isActive}', status = '${status}', approved_once="1" where (id = '${id}')`;
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
  let query = `select regd_no,name,department,contact,year_of_joining,current_semester,section  from student_master where regd_no="${data}"`;
  SQL.query(query, async (err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Task.addSemester = async (data, result) => {
  let query = `update student_master set current_semester = current_semester + 1;`;
  SQL.query(query, async (err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Task.reduceSemester = async (data, result) => {
  let query = `update student_master set current_semester = current_semester - 1;`;
  SQL.query(query, async (err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Task.getSemester = async (data, result) => {
  let query = `select current_semester from student_master`;
  SQL.query(query, async (err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Task.getAssignment = async (data, result) => {
  const { user } = data;
  let query = `select t1.*,t2.allocated_teacher from uploadtable as t1 left join department_section as t2 
              on t1.subjectCode = t2.subjectCode and t1.department = t2.dept_name and t1.section = t2.section
              where allocated_teacher = "${user}"`;
  SQL.query(query, async (err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Task.updateMarks = async (data, result) => {
  const { id, assignedmarks, totalmarks } = data;
  let query = `update uploadtable set assignedmarks = "${assignedmarks}", totalmarks = "${totalmarks}" where id="${id}"`;
  SQL.query(query, async (err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Task.createSection = async (data, result) => {
  const arrays = [];
  const final = arrays.concat(...data);
  let query = `insert into department_section (dept_name,subjectCode,subject_name,section) values ?`;
  SQL.query(
    query,
    [
      final.map((val) => [
        val.departmentName,
        val.subjectCode,
        val.subjectName,
        val.section,
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

Task.getSection = async (data, result) => {
  let query = `select t1.*,t2.semester from department_section as t1 left join subject_master as t2 on t1.subjectCode = t2.subjectCode order by dept_name`;
  SQL.query(query, async (err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Task.editSection = async (data, result) => {
  const { name, id } = data;
  let query = `update department_section set allocated_teacher = '${name}' WHERE (id = "${id}");`;
  SQL.query(query, async (err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Task.deleteSection = async (data, result) => {
  const { id } = data;
  let query = `update department_section set status = '0' WHERE (id = "${id}");`;
  SQL.query(query, async (err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Task.getParticularSection = async (data, result) => {
  const { id } = data;
  let query = `select * from department_section where dept_name = "cse"
  and section = "A"`;
  SQL.query(query, async (err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};
Task.getSectionByDepartment = async (data, result) => {
  const { dept_name } = data;
  let query = `select dept_name,section from department_section where dept_name = "${dept_name}" group by section`;
  SQL.query(query, async (err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Task.attendance = async (data, result) => {
  const {
    uniqueId,
    name,
    regd_no,
    department,
    section,
    time,
    current_semester,
  } = data;
  let query = `insert into attendance_master (uniqueid, name, regd_no, department, section, date, time, current_semester)
    values ('${uniqueId}', '${name}', '${regd_no}', '${department}', '${section}', date(now())  , "${time}","${current_semester}" );
  `;
  SQL.query(query, async (err, res) => {
    if (err) {
      if (err.code === "ER_DUP_ENTRY") {
        result(null, { status: "duplicate" });
      } else {
        console.log(err);
        result(err, null);
      }
    } else {
      result(null, { status: "punched" });
    }
  });
};

Task.getallSection = async (data, result) => {
  let query = `select distinct dept_name,section,sectionadmin from department_section order by dept_name asc`;
  SQL.query(query, async (err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Task.sectionAdmin = async (data, result) => {
  const { name, dept_name, section } = data;
  let query = `update department_section set sectionadmin = "${name}" where dept_name = "${dept_name}" and section = "${section}";  `;
  SQL.query(query, async (err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Task.getAttendanceByTeacer = async (data, result) => {
  let query = `select t1.name,t1.regd_no,t1.department,t1.section,t1.date,t1.time,t1.current_semester,t2.sectionadmin from attendance_master as t1 join (select distinct dept_name,section,sectionadmin 
    from department_section) as t2 on t1.department = t2.dept_name and t1.section = t2.section
    where sectionadmin = "${data.user}" and regd_no = "${data.body.studentid}"`;
  SQL.query(query, async (err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Task.getStudentList = async (data, result) => {
  let query = `select id,t1.regd_no,t1.name,t1.department,t1.current_semester,t1.section,t2.sectionadmin from student_master as t1 join
  (select distinct dept_name,section,sectionadmin from department_section ) as t2 on 
  t1.department = t2.dept_name and t1.section = t2.section where current_semester
   between 0 and 8 and sectionadmin = "${data.user}" order by t1.department asc`;
  SQL.query(query, async (err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Task.getMarks = async (data, result) => {
  let query = `select regd_no, subject_name, semester, uploadedat,totalmarks,assignedmarks 
  from uploadtable where regd_no ="${data.user}"`;

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
