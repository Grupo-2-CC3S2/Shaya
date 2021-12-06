//import jwt from "jsonwebtoken";
const jwt = require("jsonwebtoken")
//import config from "../config";

const Role = require('../models/Role');
const Usuario = require('../models/usuario');

exports.verifyToken = async (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) return res.status(403).json({ message: "No token provided" });

  try {
    const decoded = jwt.verify(token, "api");
    req.userId = decoded.id;

    const user = await Usuario.findById(req.userId, { password: 0 });
    if (!user) return res.status(404).json({ message: "No user found" });
    req.userData = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized!" });
  }
};

exports.isModerator = async (req, res, next) => {
  try {
    const user = await Usuario.findById(req.userId);
    const roles = await Role.find({ _id: { $in: user.roles } });

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === "moderator") {
        next();
        return;
      }
    }

    return res.status(403).json({ message: "Require Moderator Role!" });
  } catch (error) {
    console.log(error)
    return res.status(500).send({ message: error });
  }
};

exports.isAdmin = async (req, res, next) => {
  try {
    const user = await Usuario.findById(req.userId);
    const roles = await Role.find({ _id: { $in: user.roles } });

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === "admin") {
        next();
        return;
      }
    }

    return res.status(403).json({ message: "Require Admin Role!" });
  } catch (error) {
    console.log(error)
    return res.status(500).send({ message: error });
  }
};
