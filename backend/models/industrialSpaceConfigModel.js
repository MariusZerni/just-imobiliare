const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  useFor: { type: [String] },
  officeType: { type: [String] },
  buildingType: { type: [String] },
  // floors need to accept strings an numbers
  layout: { type: [String] },
  additionalCharacteristics: { type: [String] },
  parking: { type: [String] },
  streetFacilities: { type: [String] },
  landFacilities: { type: [String] }
})

module.exports = mongoose.model('IndustrialSpaceConfig', schema)