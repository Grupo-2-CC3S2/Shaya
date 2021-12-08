var mongoose = require('mongoose');
var { appConfig } = require('../config')

var Schema = mongoose.Schema;

var SolucionSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    likes: {type: Number, required:true},
    dislikes: {type: Number, required:true},
    url_image_solucion: {type: String, required:true, max: 200},
    usuario: { type: Schema.Types.ObjectId, ref: 'Usuario' }
  }
);

SolucionSchema.methods.setImgUrl = function setImgUrl (filename) {
  console.log("app:",appConfig)
  const { host, port } = appConfig;
  this.url_image_solucion = `${host}:${port}/public/${filename}`
}

// Virtual for author's URL
SolucionSchema
.virtual('url')
.get(function () {
  return '/catalog/solucion/' + this._id;
});

//Export model
module.exports = mongoose.model('Solucion', SolucionSchema);
