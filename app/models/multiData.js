import SQL from "../Database/database.js";
const Task = () => {};
const log = console.log;
var date = new Date();
var now = date.toLocaleString();

Task.getDashboardData = async (bodyData, result) => {
  const noOfNotices = new Promise((resolve, reject) => {
    let query = `select count(*) as total_notices from notice where status = "1"`;
    SQL.query(query, async (err, res) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(res);
      }
    });
  });

  const noOfDepartment = new Promise((resolve, reject) => {
    let query = `select count(*) as total_dept from department where status = "1"`;
    SQL.query(query, async (err, res) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(res);
      }
    });
  });

  const noOfpositions = new Promise((resolve, reject) => {
    let query = `select count(*) as total_position from position_table where status = "1"`;
    SQL.query(query, async (err, res) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(res);
      }
    });
  });

  const activeSubject = new Promise((resolve, reject) => {
    let query = `select count(*) active_subjects from subject_master where isactive=1 and status="approved"`;
    SQL.query(query, async (err, res) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(res);
      }
    });
  });

  const totalSubject = new Promise((resolve, reject) => {
    let query = `select count(*) total_subjects from subject_master`;
    SQL.query(query, async (err, res) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(res);
      }
    });
  });

  const totalStudent = new Promise((resolve, reject) => {
    let query = `select count(*) as total_student  from student_master where current_semester between 1 and 8`;
    SQL.query(query, async (err, res) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(res);
      }
    });
  });

  const currentSemester = new Promise((resolve, reject) => {
    let query = `select * from student_master`;
    SQL.query(query, async (err, res) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        const data = JSON.parse(JSON.stringify(res));
        if (data.length !== 0) {
          const semester = data[0].current_semester % 2 === 0 ? "Even" : "Odd";
          resolve([{ semester }]);
        } else {
          resolve([{ semester: "-" }]);
        }
      }
    });
  });

  const totalTeacher = new Promise((resolve, reject) => {
    let query = `select count(*) as total_teacher from teacher_master`;
    SQL.query(query, async (err, res) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(res);
      }
    });
  });

  const totalHod = new Promise((resolve, reject) => {
    let query = `select count(*) as total_hod  from teacher_master where ishod = 1`;
    SQL.query(query, async (err, res) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(res);
      }
    });
  });

  await Promise.all([
    noOfNotices,
    noOfDepartment,
    noOfpositions,
    totalStudent,
    activeSubject,
    totalSubject,
    currentSemester,
    totalTeacher,
    totalHod,
  ])
    .then((data) => {
      result(null, data);
    })
    .catch((error) => {
      log(error);
      result(error, null);
    });
};

Task.getTeacherDashboard = async (data, result) => {
  const totalStudent = new Promise((resolve, reject) => {
    let query = `select count(*) as total_student from
    student_master as t1 join (select distinct dept_name,section,sectionadmin from department_section ) as t2 on 
    t1.department = t2.dept_name and t1.section = t2.section where current_semester
     between 0 and 8 and sectionadmin = "${data.user}"`;
    SQL.query(query, async (err, res) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(res);
      }
    });
  });

  const noOfNotices = new Promise((resolve, reject) => {
    let query = `select count(*) as total_notices from notice where status = "1"`;
    SQL.query(query, async (err, res) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(res);
      }
    });
  });

  const totalHod = new Promise((resolve, reject) => {
    let query = `select count(*) as total_hod  from teacher_master where ishod = 1`;
    SQL.query(query, async (err, res) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(res);
      }
    });
  });

  const currentSemester = new Promise((resolve, reject) => {
    let query = `select * from student_master`;
    SQL.query(query, async (err, res) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        const data = JSON.parse(JSON.stringify(res));
        if (data.length !== 0) {
          const semester = data[0].current_semester % 2 === 0 ? "Even" : "Odd";
          resolve([{ semester }]);
        } else {
          resolve([{ semester: "-" }]);
        }
      }
    });
  });

  const totalSubject = new Promise((resolve, reject) => {
    let query = `select count(*) total_subjects from subject_master`;
    SQL.query(query, async (err, res) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(res);
      }
    });
  });

  const activeSubject = new Promise((resolve, reject) => {
    let query = `select count(*) active_subjects from subject_master where isactive=1 and status="approved"`;
    SQL.query(query, async (err, res) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(res);
      }
    });
  });

  const noOfDepartment = new Promise((resolve, reject) => {
    let query = `select count(*) as total_dept from department where status = "1"`;
    SQL.query(query, async (err, res) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(res);
      }
    });
  });

  await Promise.all([
    totalStudent,
    noOfNotices,
    totalHod,
    currentSemester,
    noOfDepartment,
    activeSubject,
    totalSubject,
  ])
    .then((data) => {
      result(null, data);
    })
    .catch((error) => {
      log(error);
      result(error, null);
    });
};

export default Task;
