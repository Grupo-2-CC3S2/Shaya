var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TemaSchema = new Schema(
  {
    id_tema: {type: String, required:true, max: 50},
    curso: {type: String, required:true, max: 55},
    nombre_tema: {type: String, required:true, max: 50},
    subtemas: {type: String, required:true, max: 50}
  }
);

// Virtual for author's URL
TemaSchema
.virtual('url')
.get(function () {
  return '/catalog/tema/' + this._id;
});

//Export model
module.exports = mongoose.model('Tema', TemaSchema);