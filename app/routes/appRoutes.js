import path from "path";
import { fileURLToPath } from "url";
import appController from "../controller/appController.js";
import auth from "../Authentication/Auth.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const appRoutes = (app) => {
  app.route(`/api/download`).post(auth, (req, res, next) => {
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
        next("File not found");
      } else {
        console.log("Sent:", filename);
      }
    });
  });
  app.route("/api/admin").get(auth, appController.adminDetails);

  app.route("/api/create-notice").post(auth, appController.createNotice);
  app.route("/api/get_notice").get(appController.getNotice);
  app.route("/api/edit_notice").put(auth, appController.editNotice);
  app.route("/api/delete_notice").put(auth, appController.deleteNotice);

  app.route("/api/create_teacher").post(auth, appController.createTeacher);
  app.route(`/api/getTeacher`).get(auth, appController.getTeacher);
  app
    .route("/api/create_department")
    .post(auth, appController.createDepartment);
  app.route(`/api/getDepartment`).get(auth, appController.getDepartment);
  app.route(`/api/editDepartment`).put(auth, appController.editDepartment);
  app.route(`/api/deleteDepartment`).put(auth, appController.deleteDepartment);
  app.route("/api/create_position").post(auth, appController.createPosition);
  app.route(`/api/getPosition`).get(auth, appController.getPosition);
  app.route(`/api/editPosition`).put(auth, appController.editPosition);
  app.route(`/api/deletePosition`).put(auth, appController.deletePosition);
  app
    .route(`/api/getParticularTeacher`)
    .get(auth, appController.getParticularTeacher);
  app.route(`/api/createSubject`).post(auth, appController.createSubject);
  app.route(`/api/getSubject`).get(auth, appController.getSubject);
  app.route(`/api/editSubject`).put(auth, appController.editSubject);
  app.route(`/api/getStudent`).get(auth, appController.getStudent);
  app.route(`/api/addSemester`).get(auth, appController.addSemester);
  app.route(`/api/reduceSemester`).get(auth, appController.reduceSemester);
  app.route(`/api/getSemester`).get(auth, appController.getSemester);
  app.route(`/api/assignment`).get(auth, appController.getAssignment);
  app.route(`/api/updateMarks`).post(auth, appController.updateMarks);
  app.route(`/api/getDashboard`).get(auth, appController.getDashboardData);
  app.route(`/api/createSection`).post(auth, appController.createSection);
  app.route(`/api/getSection`).get(auth, appController.getSection);
  app.route(`/api/editSection`).post(auth, appController.editSection);
  app.route(`/api/deleteSection`).post(auth, appController.deleteSection);
  app
    .route(`/api/getParticularSection`)
    .get(auth, appController.getParticularSection);
  app
    .route(`/api/getSectionByDept`)
    .post(auth, appController.getSectionByDepartment);
  app.route(`/api/attendance`).post(auth, appController.attendance);
  app.route(`/api/getallSection`).get(auth, appController.getallSection);
  app.route(`/api/sectionAdmin`).post(auth, appController.sectionAdmin);
  app
    .route(`/api/getAttendanceByTeacher`)
    .post(auth, appController.getAttendanceByTeacer);
  app.route(`/api/getStudentList`).get(auth, appController.getStudentList);
  app.route(`/api/getMarks`).get(auth, appController.getMarks);
  app
    .route(`/api/getTeacherDashboard`)
    .get(auth, appController.getTeacherDashboard);
};

export default appRoutes;
