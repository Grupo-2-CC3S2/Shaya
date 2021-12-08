var mongoose = require('mongoose');
var { appConfig } = require('../config')

var Schema = mongoose.Schema;

var CommentSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    comment: {type: String, required:true, max: 4000},
    usuario: { type: Schema.Types.ObjectId, ref: 'Usuario' }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

//Export model
module.exports = mongoose.model('Comment', CommentSchema);
