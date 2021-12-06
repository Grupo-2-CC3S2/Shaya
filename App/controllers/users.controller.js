const jwt = require('jsonwebtoken');

var mongoose = require('mongoose');

const Usuario = require('../models/usuario');

const Role = require('../models/Role');

exports.getAllUsers = async (req, res, next) => {
  const usuarios = await Usuario.find({}).populate("roles");
//const userFound = await Usuario.findOne({ email: req.body.email }).populate("roles");
  console.log(usuarios)
  res.json(usuarios);
}

exports.createUser = async (req, res, next) => {

  const { username, nombres, apellidos, email, password, roles } = req.body;

  //const userFound = Usuario.find({})

  let newuser = new Usuario({ 
     username, 
     email,
     nombres,
     apellidos,
     password: await Usuario.encryptPassword(password) 
   })

  if (roles) {
    const foundRoles = await Role.find({name: { $in: roles }})
    newuser.roles = foundRoles.map(role => role._id)
  } else {
    const role = await Role.findOne({ name: "user" })
    newuser.roles = [role._id];
  }

  let savedUser = await newuser.save();

  const token = jwt.sign({id: savedUser._id }, 'api', { expiresIn: 86400})

  res.json({token})

}


exports.deleteAllUsers = async (req, res, next) => {
    await Usuario.deleteMany({});
    res.end('Deleting all users');
}



exports.getUser = async (req, res, next) => {
  try{
    //const user = await Usuario.findById(req.params.Id);
    res.json(req.userData);
  } catch(error){
    console.log(error)
    res.statusCode = 400
    res.end()
  }
  //res.send('respond with a resource');
}


exports.updateUser = async (req, res, next) => {
  /*
    res.statusCode = 403;
  const { 
              _id,
              nickname,
              nombre,
              apellido,
              correo
       } = req.body;

      _id =  mongoose.Types.ObjectId(_id);

  const newUser = new Usuario({ 
                                      _id,
                                      nickname,
                                      nombre,
                                      apellido,
                                      correo
                                  });

  await Usuario.findByIdAndUpdate(req.params.Id, newUser);
  */
  res.json({status: 'User updated'});
}


exports.deleteUser = async (req, res, next) => {
    const { username } = req.body;
    let result = await Usuario.find({"username": username});
    console.log(result);
    res.end('Deleting user');
}
