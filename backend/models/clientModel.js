const mongoose = require('mongoose')



const schema = new mongoose.Schema({
  fullName: { type: String },
  email: { type: String },
  telephoneNumber: { type: Number },
  moreDetails: { type: String },
  date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Client', schema)