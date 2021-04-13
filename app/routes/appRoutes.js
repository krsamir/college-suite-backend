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
};

export default appRoutes;
