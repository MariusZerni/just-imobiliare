const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  apartmentType: { type: [String] },
  compartments: { type: [String] },
  facingDirection: { type: [String] },
  floor: { type: [String] },
  comfortType: { type: [String] },
  interiorState: { type: [String] },
  buildingType: { type: [String] },
  constructionStage: { type: [String] },
  constructionType: { type: [String] },
  features: { type: [String] },
  characteristics: { type: [String] },
  seismicRisk: { type: [String] },
  realEstateFacilities: { type: [String] },
  doorEntry: { type: [String] },
  interiorDoors: { type: [String] },
  walls: { type: [String] },
  floorType: { type: [String] },
  furnished: { type: [String] },
  streetFacilities: { type: [String] },
  kitchenType: { type: [String] },
  otherSpaces: { type: [String] },
  parking: { type: [String] },
  windows: { type: [String] },
  generalUtilities: { type: [String] },
  heatingSystem: { type: [String] },
  insulation: { type: [String] },
  meters: { type: [String] },
  view: { type: [String] }

})


module.exports = mongoose.model('ApartmentConfig', schema)