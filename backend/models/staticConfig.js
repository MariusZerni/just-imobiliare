const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  tipOferta: { type: String },
  numeConfig: { type: String },
  valori: { type: [ String] }

})


module.exports = mongoose.model('StaticConfig', schema)