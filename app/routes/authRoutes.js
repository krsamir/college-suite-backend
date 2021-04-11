import {
  loginOwner,
  loginAdmin,
  loginStudent,
  loginTeacher,
} from "../controller/authController.js";
const authRoutes = (app) => {
  app.route("/login-owner").post(loginOwner);
  app.route("/login-admin").post(loginAdmin);
  app.route("/login-student").post(loginStudent);
  app.route("/login-teacher").post(loginTeacher);
};

export default authRoutes;
