
const Problema = require('../models/problema');
const Usuario = require('../models/usuario');

var mongoose = require('mongoose');

exports.uploadProblem = async (req, res, next) => {

  console.log(req.headers)

  let { 
          //usuario,
          question,
          anio,
          universidad,
          tema,
          curso,
          opc_a,
          opc_b,
          opc_c,
          opc_d,
          opc_e/*,
          url_image,
          soluciones*/
        } = req.body;

  let _id = mongoose.Types.ObjectId();
  //usuario = mongoose.Types.ObjectId(usuario);

  //const userAdmin = await new Usuario({username: 'admin'}).save()
  //const userAdmin = await Usuario.findOne({username: "admin"})
  const user = await Usuario.findById(req.userId);

  user.publishedProblem.push(_id)
  let usuario = user._id

  user.save()

  
  //let usuario = mongoose.Types.ObjectId('60ea935b75794a5859a37a7b');
  let soluciones = []
  let opciones = [opc_a, opc_b, opc_c, opc_d, opc_e]  
  let keywords = curso + " " + tema + " " + universidad + " " + anio;
  let comments = []
  let type = "text"
  
  /*
  let soString = soluciones
  soluciones = []
  for (sol in soString){
    soluciones.push(mongoose.Types.ObjectId(soString[sol]))
  }
  */
  let likes = [];
  let dislikes = [];
  const problema = new Problema({ 
                                  _id,
                                  usuario,
                                  likes,
                                  dislikes,
                                  type,
                                  question,
                                  keywords,
                                  opciones,
                                  anio,
                                  universidad,
                                  tema,
                                  curso,
                                  soluciones,
                                  comments
                                });
  if(req.file) {
    const {filename} = req.file
    problema.setImgUrl(filename)

  }
  await problema.save();
  res.json({status: 'Problem Saved'});
}


exports.getAllProblems = async (req, res, next) => {

  if (req.query.curso || req.query.count){
    Problema.aggregate([
        { "$match": { curso: req.query.curso } },
        {
            "$sample": {size: parseInt(req.query.count)}
        }
    ]).exec((err, problemas) => {
        if (err) throw err;

        res.json(problemas);
        //db.products.aggregate([
        //  {$match: {category:"Electronic Devices"}}, // filter the results
        //  {$sample: {size: 5}} // You want to get 5 docs
        //kkkk]);


    })
  } else {
    const problemas = await Problema.find({});
    console.log(problemas);
    res.json(problemas);
  }
}


exports.putProblems = (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /users');
}

exports.deleteAllProblems = async (req, res, next) => {
    await Problema.deleteMany({});
    res.end('Deleting all users');
}

exports.getProblem = async (req, res, next) => {
  const problem = await Problema.findById(req.params.id);
  res.json(problem);
}

exports.putProblem = async (req, res) => {

  let { 
          _id,
          usuario,
          likes,
          dislikes,
          name,
          description,
          claves,
          anio_tomado,
          universidad,
          id_tema,
          url_image,
          soluciones
        } = req.body;

  usuario = mongoose.Types.ObjectId(usuario);

  let soString = soluciones
  soluciones = []
  for (sol in soString){
    soluciones.push(mongoose.Types.ObjectId(soString[sol]))
  }

  const newProblema = new Problema({ _id,
                                  usuario,
                                  likes,
                                  dislikes,
                                  name,
                                  description,
                                  claves,
                                  anio_tomado,
                                  universidad,
                                  id_tema,
                                  url_image,
                                  soluciones
                                });

  await Problema.findByIdAndUpdate(req.params.id, newProblema);
  res.json({status: 'Problem updated'});

}

exports.deleteProblem = async (req, res) => {
  await Problema.findByIdAndRemove(req.params.id);
  res.json({status: 'Problem Deleted'});
}
