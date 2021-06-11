import appModel from "../models/appModel.js";
import multiData from "../models/multiData.js";
const Task = () => {};
Task.adminDetails = (req, res) => {
  appModel.adminDetails(req.user, (err, response) => {
    if (err || req.role !== "admin") {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
};

Task.createNotice = (req, res) => {
  appModel.createNotice(req, (err, response) => {
    if (err || req.role !== "admin") {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
};

Task.getNotice = (req, res) => {
  appModel.getNotice(req.body, (err, response) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
};

Task.editNotice = (req, res) => {
  appModel.editNotice(req.body, (err, response) => {
    if (err || req.role !== "admin") {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
};

Task.deleteNotice = (req, res) => {
  appModel.deleteNotice(req.body, (err, response) => {
    if (err || req.role !== "admin") {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
};

Task.createTeacher = (req, res) => {
  appModel.createTeacher(req, (err, response) => {
    if (err || req.role !== "admin") {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
};

Task.createDepartment = (req, res) => {
  appModel.createDepartment(req, (err, response) => {
    if (err || req.role !== "admin") {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
};

Task.createPosition = (req, res) => {
  appModel.createPosition(req, (err, response) => {
    if (err || req.role !== "admin") {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
};

Task.getDepartment = (req, res) => {
  appModel.getDepartment(req, (err, response) => {
    if (err) {
      res.status(404).send(err);
    } else if (req.role === "teacher") {
      res.status(200).send(response);
    } else if (req.role === "admin") {
      res.status(200).send(response);
    } else {
      res.status(404).send(err);
    }
    // if (err || req.role !== "teacher") {
    //   res.status(404).send(err);
    // } else {
    //   res.status(200).send(response);
    // }
  });
};

Task.getPosition = (req, res) => {
  appModel.getPosition(req, (err, response) => {
    if (err || req.role !== "admin") {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
};

Task.getTeacher = (req, res) => {
  appModel.getTeacher(req, (err, response) => {
    if (err || req.role !== "admin") {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
};

Task.editPosition = (req, res) => {
  appModel.editPosition(req.body, (err, response) => {
    if (err || req.role !== "admin") {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
};

Task.deletePosition = (req, res) => {
  appModel.deletePosition(req.body, (err, response) => {
    if (err || req.role !== "admin") {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
};

Task.editDepartment = (req, res) => {
  appModel.editDepartment(req.body, (err, response) => {
    if (err || req.role !== "admin") {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
};

Task.deleteDepartment = (req, res) => {
  appModel.deleteDepartment(req.body, (err, response) => {
    if (err || req.role !== "admin") {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
};

Task.getParticularTeacher = (req, res) => {
  appModel.getParticularTeacher(req, (err, response) => {
    if (err || req.role !== "teacher") {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
};

Task.createSubject = (req, res) => {
  appModel.createSubject(req, (err, response) => {
    if (err || req.role !== "teacher") {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
};

Task.getSubject = (req, res) => {
  appModel.getSubject(req, (err, response) => {
    if (err) {
      res.status(404).send(err);
    } else if (req.role === "teacher") {
      res.status(200).send(response);
    } else if (req.role === "admin") {
      res.status(200).send(response);
    } else if (req.role === "student") {
      res.status(200).send(response);
    } else {
      res.status(404).send(err);
    }
  });
};

Task.editSubject = (req, res) => {
  appModel.editSubject(req.body, (err, response) => {
    if (err) {
      res.status(404).send(err);
    } else if (req.role === "teacher") {
      res.status(200).send(response);
    } else if (req.role === "admin") {
      res.status(200).send(response);
    } else {
      res.status(404).send(err);
    }
  });
};

Task.getStudent = (req, res) => {
  appModel.getStudent(req.user, (err, response) => {
    if (err || req.role !== "student") {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
};

Task.addSemester = (req, res) => {
  appModel.addSemester(req.body, (err, response) => {
    if (err || req.role !== "admin") {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
};
Task.reduceSemester = (req, res) => {
  appModel.reduceSemester(req, (err, response) => {
    if (err || req.role !== "admin") {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
};

Task.getSemester = (req, res) => {
  appModel.getSemester(req, (err, response) => {
    if (err || req.role !== "admin") {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
};

Task.getAssignment = (req, res) => {
  appModel.getAssignment(req, (err, response) => {
    if (err) {
      res.status(404).send(err);
    } else if (req.role === "teacher") {
      res.status(200).send(response);
    } else if (req.role === "admin") {
      res.status(200).send(response);
    } else {
      res.status(404).send(err);
    }
  });
};

Task.updateMarks = (req, res) => {
  appModel.updateMarks(req.body, (err, response) => {
    if (err || req.role !== "teacher") {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
};

Task.getDashboardData = (req, res) => {
  multiData.getDashboardData(req.body, (err, response) => {
    if (err || req.role !== "admin") {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
};

Task.createSection = (req, res) => {
  appModel.createSection(req.body, (err, response) => {
    if (err || req.role !== "admin") {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
};

Task.getSection = (req, res) => {
  appModel.getSection(req.body, (err, response) => {
    if (err) {
      res.status(404).send(err);
    } else if (req.role === "teacher") {
      res.status(200).send(response);
    } else if (req.role === "admin") {
      res.status(200).send(response);
    } else if (req.role === "student") {
      res.status(200).send(response);
    } else {
      res.status(404).send(err);
    }
  });
};

Task.editSection = (req, res) => {
  appModel.editSection(req.body, (err, response) => {
    if (err || req.role !== "admin") {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
};
Task.deleteSection = (req, res) => {
  appModel.deleteSection(req.body, (err, response) => {
    if (err || req.role !== "admin") {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
};
Task.getParticularSection = (req, res) => {
  appModel.getParticularSection(req.body, (err, response) => {
    if (err || req.role !== "student") {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
};

Task.getSectionByDepartment = (req, res) => {
  appModel.getSectionByDepartment(req.body, (err, response) => {
    if (err || req.role !== "admin") {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
};

Task.attendance = (req, res) => {
  appModel.attendance(req.body, (err, response) => {
    if (err || req.role !== "student") {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
};

Task.getallSection = (req, res) => {
  appModel.getallSection(req.body, (err, response) => {
    if (err || req.role !== "admin") {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
};

Task.sectionAdmin = (req, res) => {
  appModel.sectionAdmin(req.body, (err, response) => {
    if (err || req.role !== "admin") {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
};

Task.getAttendanceByTeacer = (req, res) => {
  appModel.getAttendanceByTeacer(req, (err, response) => {
    if (err || req.role !== "teacher") {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
};

Task.getStudentList = (req, res) => {
  appModel.getStudentList(req, (err, response) => {
    if (err || req.role !== "teacher") {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
};

Task.getMarks = (req, res) => {
  appModel.getMarks(req, (err, response) => {
    if (err || req.role !== "student") {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
};

Task.getTeacherDashboard = (req, res) => {
  multiData.getTeacherDashboard(req, (err, response) => {
    if (err || req.role !== "teacher") {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
};

export default Task;
