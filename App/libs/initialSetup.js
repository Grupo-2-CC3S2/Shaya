const Role = require('../models/Role');
const Usuario = require('../models/usuario');

var mongoose = require('mongoose');

exports.createRoles = async () => {
  const count = await Role.estimatedDocumentCount()

  if (count > 0) return;

  try {
    new Role({name: 'user'}).save()
    new Role({name: 'moderator'}).save()
    const roleAdmin = await new Role({name: 'admin'}).save()

    new Usuario(
      {
        _id: mongoose.Types.ObjectId('60eb8611ff314575c76d9865'),
        username: 'admin',
        nombres: 'admin',
        apellidos: 'admin',
        email: 'paskay@gmail.com', 
        password: await Usuario.encryptPassword('apipaskay'), 
        roles: [roleAdmin._id]
      }).save()
  }catch (error) {
    console.error(error)
  }
}
