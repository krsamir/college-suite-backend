import authModel from "../models/authModels.js";

const log = console.log;
const loginOwner = (req, res) => {
  if (!req.body) return res.status(400).send("Bad request!");
  authModel.loginOwner(req.body, (err, response) => {
    if (err) {
      res.status(409).send(err);
    } else {
      res.status(200).send(response);
    }
  });
};

const loginAdmin = (req, res) => {
  if (!req.body) return res.status(400).send("Bad request!");
  authModel.loginAdmin(req.body, (err, response) => {
    if (err) {
      res.status(409).send(err);
    } else {
      res.status(200).send(response);
    }
  });
};

export { loginOwner, loginAdmin };
