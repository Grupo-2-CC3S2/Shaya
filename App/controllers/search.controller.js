const Problema = require('../models/problema');

exports.search_in_db = (search_query, options) => {

  return Problema.find(
      {
        $text: {
          $search: search_query
        },
        universidad: {$regex: options.regex_universidad},
        curso: {$regex: options.regex_curso},
        anio: {$regex: options.regex_anio},
        tema: {$regex: options.regex_tema}
      },
      {
        score: {$meta: 'textScore'}
      }
    ).populate("usuario").sort({
      score: {$meta: 'textScore'}
    });

}
