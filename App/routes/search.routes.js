var express = require('express');
var router = express.Router();
const cors = require('cors');

var { search_in_db } = require('../controllers/search.controller')

const getRegexOfOption = (option) => {
  if (option) return option == "all" ? "." : option;
  else return ".";
}


const getOptionsOfAdvancedSearch = (queryOfURL) => {
  return {
    regex_curso: getRegexOfOption(queryOfURL.curso),
    regex_tema: getRegexOfOption(queryOfURL.tema),
    regex_anio: getRegexOfOption(queryOfURL.anio),
    regex_universidad: getRegexOfOption(queryOfURL.universidad),
  }
}
router.get('/', cors(), async (req, res, next) => {

  let results;

  const optionsOfAdvancedSearch = getOptionsOfAdvancedSearch(req.query)

  if(req.query.search_query){
    results = await search_in_db(req.query.search_query, optionsOfAdvancedSearch) 
  }
  console.log(results)

  res.json(results)
});

module.exports = router;
