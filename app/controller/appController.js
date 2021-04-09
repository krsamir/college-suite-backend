import appModel from "../models/appModel.js";

const adminDetails = (req, res) => {
  appModel.adminDetails(req.user, (err, response) => {
    if (err || req.role !== "admin") {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
};

const createNotice = (req, res) => {
  appModel.createNotice(req, (err, response) => {
    if (err || req.role !== "admin") {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
};

const getNotice = (req, res) => {
  appModel.getNotice(req.body, (err, response) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
};

const editNotice = (req, res) => {
  appModel.editNotice(req.body, (err, response) => {
    if (err || req.role !== "admin") {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
};

const deleteNotice = (req, res) => {
  appModel.deleteNotice(req.body, (err, response) => {
    if (err || req.role !== "admin") {
      res.status(404).send(err);
    } else {
      res.status(200).send(response);
    }
  });
};

export { createNotice, adminDetails, getNotice, editNotice, deleteNotice };
