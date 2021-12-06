let bcrypt = require('bcryptjs');
//let { Schema, model } = require('mongoose');

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//const Problema  = require('../models/problema');


//////////////////////////////////////////////////7

const UsuarioSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    nombres: {
      type: String,
      required: true,
    },
    apellidos: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    imageProfileUrl: {
      type: String
    },
    Description: {
      type: String
    },
    //publishedProblem : [{ type: Schema.ObjectId, ref: 'Problema'}],
    roles: [
      {
        type: Schema.Types.ObjectId,
        ref: "Role",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

UsuarioSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

UsuarioSchema.statics.comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword)
}

module.exports = mongoose.model('Usuario', UsuarioSchema);
