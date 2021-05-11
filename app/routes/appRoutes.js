import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import {
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
  getStudent,
  addSemester,
  reduceSemester,
  getSemester,
  getAssignment,
  // downloadAssignment,
} from "../controller/appController.js";
import auth from "../Authentication/Auth.js";
const appRoutes = (app) => {
  app.route("/api/admin").get(auth, adminDetails);
  app.route("/api/create-notice").post(auth, createNotice);
  app.route("/api/get_notice").get(getNotice);
  app.route("/api/edit_notice").put(auth, editNotice);
  app.route("/api/delete_notice").put(auth, deleteNotice);
  app.route("/api/create_teacher").post(auth, createTeacher);
  app.route(`/api/getTeacher`).get(auth, getTeacher);
  app.route("/api/create_department").post(auth, createDepartment);
  app.route(`/api/getDepartment`).get(auth, getDepartment);
  app.route(`/api/editDepartment`).put(auth, editDepartment);
  app.route(`/api/deleteDepartment`).put(auth, deleteDepartment);
  app.route("/api/create_position").post(auth, createPosition);
  app.route(`/api/getPosition`).get(auth, getPosition);
  app.route(`/api/editPosition`).put(auth, editPosition);
  app.route(`/api/deletePosition`).put(auth, deletePosition);
  app.route(`/api/getParticularTeacher`).get(auth, getParticularTeacher);
  app.route(`/api/createSubject`).post(auth, createSubject);
  app.route(`/api/getSubject`).get(auth, getSubject);
  app.route(`/api/editSubject`).put(auth, editSubject);
  app.route(`/api/getStudent`).get(auth, getStudent);
  app.route(`/api/addSemester`).get(auth, addSemester);
  app.route(`/api/reduceSemester`).get(auth, reduceSemester);
  app.route(`/api/getSemester`).get(auth, getSemester);
  app.route(`/api/assignment`).get(auth, getAssignment);
  app.route(`/api/download`).post(auth, (req, res) => {
    const { filename } = req.body;
    // console.log(filename);
    // console.log(path.join(__dirname, "../../Upload_File"));
    const options = {
      root: path.join(__dirname, "../../Upload_File"),
      dotfiles: "deny",
      headers: {
        "x-timestamp": Date.now(),
        "x-sent": true,
      },
    };
    res.sendFile(filename, options, function (err) {
      if (err) {
        next(err);
      } else {
        console.log("Sent:", filename);
      }
    });
  });
};

export default appRoutes;
