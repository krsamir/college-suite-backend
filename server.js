import express from "express";
import cors from "cors";
import { config } from "dotenv";
import chalk from "chalk";
import multer from "multer";
config();
import appRoutes from "./app/routes/appRoutes.js";
import authRoutes from "./app/routes/authRoutes.js";
const app = express();
app.use(cors());
app.use(express.json());
appRoutes(app);
authRoutes(app);
app.get("/", (req, res) => {
  res.send("Backend API");
});
const log = console.log;

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "C:\\Users\\samir\\Desktop\\College-Suite\\backend\\Upload_File");
  },
  filename: function (req, file, cb) {
    const { regd_no, subjectName, department } = req.body;
    // console.log(`${file.originalname}-${req.body.userId}-${Date.now()}`);
    log(chalk.white("File Uploaded >> Assignments >> "));
    log(
      chalk.bgGreen(
        chalk.white(
          `${regd_no}-${subjectName}-${department}-${Date.now()}-${
            file.originalname
          }`
        )
      )
    );
    cb(
      null,
      `${regd_no}-${subjectName}-${department}-${Date.now()}-${
        file.originalname
      }`
    );
    ``;
  },
});

var upload = multer({ storage: storage });
app.post(
  "/studentassignment",
  upload.array("myFile[]", 12),
  (req, res, next) => {
    const files = req.files;
    if (!files) {
      const error = new Error("Please choose files");
      error.httpStatusCode = 400;
      return next(error);
    }
    // console.log("Files *****" + JSON.stringify(files));
    // console.log("User Detail >> " + JSON.stringify(req.body.userId));
    res.json({ status: "uploaded" });
  }
);

const { PORT, NODE_ENV } = process.env;
app.listen(
  PORT,
  console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`)
);
