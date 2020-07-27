const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  officeType: { type: [String] },
  buildingType: { type: [String] },
  layout: { type: [String] },
  servicesProvided: { type: [String] },
  internetAndComunication: { type: [String] },
  safetyAndSecurity: { type: [String] },
  electricalSystem: { type: [String] },
  ecoElements: { type: [String] },
  arhitecture: { type: [String] },
  officeAirConditioning: { type: [String] },
  parking: { type: [String] },
  view: { type: [String] }
})

module.exports = mongoose.model('OfficeConfig', schema)