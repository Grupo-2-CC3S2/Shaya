var mongoose = require('mongoose');

const { appConfig } = require('../config')

var Schema = mongoose.Schema;

var ProblemaSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    usuario: { type: Schema.Types.ObjectId, required: true, ref: 'Usuario' },
    likes : [{ type: Schema.ObjectId, ref: 'Usuario'}],
    dislikes : [{ type: Schema.ObjectId, ref: 'Usuario'}],
    type: {type: String, required:true, max: 10},
    keywords: {type: String, required:true, max: 1000},
    question: {type: String, required:true, max: 3000},
    opciones: [{type: String}],
    anio: {type: String, required: true},
    universidad: {type: String, required:true, max: 100},
    tema: {type: String, required:true, max: 50},
    curso: {type: String, required:true, max: 50},
    url_image: {type: String, max: 200},
    soluciones: [{ type: Schema.Types.ObjectId, ref: 'Solucion' }],
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
  },
  {
    timestamps: true,
    autoIndex: true
  }
);

ProblemaSchema.index(
                    {
                        'question': "text",
                        'keywords': "text" 
                    }
                ); // schema level

ProblemaSchema.methods.setImgUrl = function setImgUrl (filename) {
  const { host, port } = appConfig;
  this.url_image = `${host}:${port}/public/${filename}`
}

//Export model
module.exports = mongoose.model('Problema', ProblemaSchema);
