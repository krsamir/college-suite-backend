import {
  loginOwner,
  loginAdmin,
  loginStudent,
  loginTeacher,
} from "../controller/authController.js";
const authRoutes = (app) => {
  app.route("/api/login-owner").post(loginOwner);
  app.route("/api/login-admin").post(loginAdmin);
  app.route("/api/login-student").post(loginStudent);
  app.route("/api/login-teacher").post(loginTeacher);
};

export default authRoutes;
