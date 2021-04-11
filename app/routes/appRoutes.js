import {
  createNotice,
  adminDetails,
  getNotice,
  editNotice,
  deleteNotice,
  createTeacher,
} from "../controller/appController.js";
import auth from "../Authentication/Auth.js";
const appRoutes = (app) => {
  app.route("/api/admin").get(auth, adminDetails);
  app.route("/api/create-notice").post(auth, createNotice);
  app.route("/get_notice").get(getNotice);
  app.route("/api/edit_notice").put(auth, editNotice);
  app.route("/api/delete_notice").put(auth, deleteNotice);
  app.route("/api/create_teacher").post(auth, createTeacher);
};

export default appRoutes;
