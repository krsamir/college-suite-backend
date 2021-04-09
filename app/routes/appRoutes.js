import {
  createNotice,
  adminDetails,
  getNotice,
  editNotice,
  deleteNotice,
} from "../controller/appController.js";
import auth from "../Authentication/Auth.js";
const appRoutes = (app) => {
  app.route("/api/admin").get(auth, adminDetails);
  app.route("/api/create-notice").post(auth, createNotice);
  app.route("/get_notice").get(getNotice);
  app.route("/api/edit_notice").put(auth, editNotice);
  app.route("/api/delete_notice").put(auth, deleteNotice);
};

export default appRoutes;
