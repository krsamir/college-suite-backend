import appModel from "../models/appModel.js";

const adminDetails = (req, res) => {
  appModel.adminDetails(req.user, (err, response) => {
    if (err || req.role !== "admin") {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
};

const createNotice = (req, res) => {
  appModel.createNotice(req, (err, response) => {
    if (err || req.role !== "admin") {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
};

const getNotice = (req, res) => {
  appModel.getNotice(req.body, (err, response) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
};

const editNotice = (req, res) => {
  appModel.editNotice(req.body, (err, response) => {
    if (err || req.role !== "admin") {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
};

const deleteNotice = (req, res) => {
  appModel.deleteNotice(req.body, (err, response) => {
    if (err || req.role !== "admin") {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
};

const createTeacher = (req, res) => {
  appModel.createTeacher(req, (err, response) => {
    if (err || req.role !== "admin") {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
};

const createDepartment = (req, res) => {
  appModel.createDepartment(req, (err, response) => {
    if (err || req.role !== "admin") {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
};

const createPosition = (req, res) => {
  appModel.createPosition(req, (err, response) => {
    if (err || req.role !== "admin") {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
};

const getDepartment = (req, res) => {
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

const getPosition = (req, res) => {
  appModel.getPosition(req, (err, response) => {
    if (err || req.role !== "admin") {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
};

const getTeacher = (req, res) => {
  appModel.getTeacher(req, (err, response) => {
    if (err || req.role !== "admin") {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
};

const editPosition = (req, res) => {
  appModel.editPosition(req.body, (err, response) => {
    if (err || req.role !== "admin") {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
};

const deletePosition = (req, res) => {
  appModel.deletePosition(req.body, (err, response) => {
    if (err || req.role !== "admin") {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
};

const editDepartment = (req, res) => {
  appModel.editDepartment(req.body, (err, response) => {
    if (err || req.role !== "admin") {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
};

const deleteDepartment = (req, res) => {
  appModel.deleteDepartment(req.body, (err, response) => {
    if (err || req.role !== "admin") {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
};

const getParticularTeacher = (req, res) => {
  appModel.getParticularTeacher(req, (err, response) => {
    if (err || req.role !== "teacher") {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
};

const createSubject = (req, res) => {
  appModel.createSubject(req, (err, response) => {
    if (err || req.role !== "teacher") {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
};

const getSubject = (req, res) => {
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

const editSubject = (req, res) => {
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

const getStudent = (req, res) => {
  appModel.getStudent(req.user, (err, response) => {
    if (err || req.role !== "student") {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
};

const changeSemester = () => {};
export {
  createNotice,
  adminDetails,
  getNotice,
  editNotice,
  deleteNotice,
  createTeacher,
  createDepartment,
  createPosition,
  getDepartment,
  getPosition,
  getTeacher,
  editPosition,
  deletePosition,
  editDepartment,
  deleteDepartment,
  getParticularTeacher,
  createSubject,
  getSubject,
  editSubject,
  changeSemester,
  getStudent,
};
