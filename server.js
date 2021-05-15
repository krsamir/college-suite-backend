import express from "express";
import cors from "cors";
import { config } from "dotenv";
import chalk from "chalk";
import multer from "multer";
config();
import appRoutes from "./app/routes/appRoutes.js";
import authRoutes from "./app/routes/authRoutes.js";
import SQL from "./app/Database/database.js";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const { PORT, NODE_ENV, CLIENT_URL } = process.env;
// app.use(cors({ origin: `https://lucid-mcnulty-9e22e3.netlify.app` }));
// console.log(path.join(__dirname, "../frontend/build"));
// to refer build pages
// app.use(express.static(path.join(__dirname, "../frontend/build")));
// app.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
// });
console.log(chalk.bgGreen(`Connected with ${CLIENT_URL}`));
app.use(cors({ origin: CLIENT_URL }));
app.use(express.json());
appRoutes(app);
authRoutes(app);
const log = console.log;
var date = new Date();
var now = date.toLocaleString();
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "./Upload_File"));
  },
  filename: function (req, file, cb) {
    log(chalk.white("File Uploaded >> Assignments >> "));
    log(chalk.bgGreen(chalk.white(`${Date.now()}-${file.originalname}`)));
    cb(null, `${Date.now()}-${file.originalname}`);
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
      res.send({ status: "failed" });
      // return next(error);
    }
    const { regd_no, department, subjectName, semester, section } = req.body;
    // log(
    //   regd_no,
    //   department,
    //   subjectName,
    //   semester,
    //   section,
    //   now,
    //   req.files[0].mimetype
    // );
    // log(req.files[0].mimetype);
    // log(req.files[0].filename);
    const data = {
      regd_no,
      department,
      subjectName,
      semester,
      filename: req.files[0].filename,
      section,
      mimetype: req.files[0].mimetype,
      now,
    };
    adminDetails(data, (err, response) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send({ status: "uploaded" });
      }
    });
    // console.log("Files *****" + JSON.stringify(files));
  }
);

// app.get("/", (req, res) => {
//   res.send("Backend API");
// });

const adminDetails = async (data, result) => {
  const {
    regd_no,
    department,
    subjectName,
    semester,
    filename,
    section,
    mimetype,
    now,
  } = data;
  let query = `INSERT INTO uploadtable (regd_no, department, subject_name, semester, filename, section, mimetype, uploadedat) 
  VALUES ('${regd_no}', '${department}', '${subjectName}', '${semester}', '${filename}', '${section}', '${mimetype}', '${now}');
  `;
  SQL.query(query, async (err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

app.listen(
  PORT,
  console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`)
);
