
const Usuario = require('../models/usuario');
const jwt = require('jsonwebtoken');


const Role = require('../models/Role');

exports.signUp = async (req, res) => {
  const { username, nombres, apellidos , email, password, roles } = req.body;

  //const userFound = Usuario.find({})

  let newuser = new Usuario({ 
     username, 
     nombres,
     apellidos,
     email, 
     password: await Usuario.encryptPassword(password) 
   })
  /*
  if (roles) {
    const foundRoles = await Role.find({name: { $in: roles }})
    newuser.roles = foundRoles.map(role => role._id)
  } else {
    const role = await Role.findOne({ name: "user" })
    newuser.roles = [role._id];
  }
  */

  let userRol = await Role.findOne({name: "user"})
  newuser.roles = [userRol._id]

  let savedUser = await newuser.save();

  const token = jwt.sign({id: savedUser._id }, 'api', { expiresIn: 86400})

  res.json({token})

}

exports.signIn = async (req, res) => {
  console.log("body",req.body)
  const userFound = await Usuario.findOne({ username: req.body.username }).populate("roles");

  if (!userFound) return res.status(400).json({message: "user not found"})

  let matchPassword =  await Usuario.comparePassword(req.body.password, userFound.password)

  if (!matchPassword) return res.status(401).json({token: null, message: 'Invalid password'})

  const token = jwt.sign({id: userFound._id}, 'api', {
    expiresIn: 86400
  })

  res.json({token})
}
