import { loginOwner, loginAdmin } from "../controller/authController.js";
const authRoutes = (app) => {
  app.route("/login-owner").post(loginOwner);
  app.route("/login-admin").post(loginAdmin);
};

export default authRoutes;
