const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  pedestrianTraffic: { type: [String] },
  // floors need to accept strings and numbers
  buildingType: { type: [String] },
  useFor: { type: [String] },
  layout: { type: [String] },
  seismicRisk: { type: [String] },
  landUtilities: { type: [String] },
  ecoElements: { type: [String] },
  extraCharacteristics: { type: [String] },
  parking: { type: [String] },
  view: { type: [String] }
})

module.exports = mongoose.model('CommercialPropertyConfig', schema)