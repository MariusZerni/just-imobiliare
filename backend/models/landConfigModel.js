const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  accessFrom: { type: [String] },
  landType: { type: [String] },
  areaUnit: { type: [String] },
  classification: { type: [String] },
  useFor: { type: [String] },
  moreFeatures: { type: [String] },
  landUtilities: { type: [String] },
  streetFacilities: { type: [String] },
  view: { type: [String] },
  parking: { type: [String] }
})

module.exports = mongoose.model('LandConfig', schema)