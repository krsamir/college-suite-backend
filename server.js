import express from "express";
import cors from "cors";
import { config } from "dotenv";
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

const { PORT, NODE_ENV } = process.env;
app.listen(
  PORT,
  console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`)
);
