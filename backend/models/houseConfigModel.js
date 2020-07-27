const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  useFor: { type: [String] },
  houseType: { type: [String] },
  interiorState: { type: [String] },
  roof: { type: [String] },
  constructionStage: { type: [String] },
  constructionType: { type: [String] },
  seismicRisk: { type: [String] },
  // Features are the same for apartment and house
  features: { type: [String] },
  characteristics: { type: [String] },
  doorEntry: { type: [String] },
  interiorDoors: { type: [String] },
  realEstateFacilities: { type: [String] },
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


module.exports = mongoose.model('HouseConfig', schema)