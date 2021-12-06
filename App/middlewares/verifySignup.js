
const Usuario = require('../models/usuario');


//let {  ROLES } = require("../models/Role")


exports.checkDuplicateUsernameOrEmail = async (req, res, next) => {
  try {
    const user = await Usuario.findOne({ username: req.body.username });
    if (user)
      return res.status(400).json({ message: "The user already exists" });
    const email = await Usuario.findOne({ email: req.body.email });
    if (email)
      return res.status(400).json({ message: "The email already exists" });
    next();
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

exports.checkRolesExisted = (req, res, next) => {
  let ROLES = ["user", "admin", "moderator"];
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        return res.status(400).json({
          message: `Role ${req.body.roles[i]} does not exist`,
        });
      }
    }
  }

  next();
};

//export { checkDuplicateUsernameOrEmail, checkRolesExisted };
