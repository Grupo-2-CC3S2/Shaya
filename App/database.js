const mongoose = require('mongoose');

const URI = 'mongodb://127.0.0.1:27017/Paskay2';
//const URI = 'mongodb+srv://Carlos:otMjVC1LYoAQ2po1@horarios.bwzg3.mongodb.net/Paskay?retryWrites=true&w=majority'

mongoose.connect(URI, { useNewUrlParser: true ,useUnifiedTopology: true, useCreateIndex: true})
  .then(db => console.log('Db is connected'))
  .catch(error => console.error(error));

module.exports = mongoose;
