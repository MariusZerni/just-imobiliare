const mongoose = require('mongoose')

const images = new mongoose.Schema({
  image: { type: String }
})

const buidingCharacteristics = new mongoose.Schema({
  year: { type: Number },
  numberOfFloors: { type: Number },
  lowerGroundFloor: { type: Number },
  seismicRisk: { type: String },
  historicalMonument: { type: Boolean },
  attic: { type: Boolean }
})

const description = new mongoose.Schema({
  title: { type: String, maxLength: 80 },
  description: { type: String, maxLength: 300 }
})

const additionalFeatures = new mongoose.Schema({
  landUtilities: { type: String },
  ecoElements: { type: String },
  extraCharacteristics: { type: String },
  parking: { type: String },
  view: { type: String }
})

// Price Schema
const commissionFromLanlordOnSale = new mongoose.Schema({
  servicesOnContractForSale: { type: String },
  exclusive: { type: Boolean },
  intermediation: { type: Boolean },
  contractNumber: { type: Number },
  contractSigningDate: { type: Date },
  contractExpiringDate: { type: Date },
  lanlordComsionPercentage: { type: Number },
  lanlordComision: { type: Number }
})

const collaborationInSale = new mongoose.Schema({
  collaborationInSale: { type: Boolean },
  currencyCommission: { type: Number },
  percentageCommission: { type: Number }
})

const priceForSale = new mongoose.Schema({
  price: { type: Number },
  lowerPrice: { type: Number },
  negociable: { type: Boolean },
  commissionFromLanlordOnSale: commissionFromLanlordOnSale,
  collaborationInSale: collaborationInSale
})

const commissionLanlordRenting = new mongoose.Schema({
  contractRentalServices: { type: String },
  exclusiveRepresentation: { type: Boolean },
  exclusiveIntermediation: { type: Boolean },
  contractNUmber: { type: Number },
  contractSignDate: { type: Date },
  contractExpiringDate: { type: Date },
  lanlordCommissionPercentage: { type: Number },
  lanlordCommission: { type: Number }
})

const otherDetailsRenting = new mongoose.Schema({
  pricePerMounth: { type: Number },
  commissionCurrency: { type: Number },
  commissionPercentage: { type: Number }
})

const priceForRenting = new mongoose.Schema({
  pricePerMounth: { type: Number },
  negociablePrice: { type: Boolean },
  lanlord: { type: String },
  deposit: { type: Number },
  commissionLanlordRenting: commissionLanlordRenting,
  otherDetailsRenting: otherDetailsRenting
})

const schema = new mongoose.Schema({
  transactionType: { type: String, required: true },
  propertyType: { type: String, required: true },
  pedestrianTraffic: { type: String },
  numberOfFloors: { type: Number },
  bathroom: { type: Number },
  kitchen: { type: Number },
  squareMeter: { type: Number },
  roadFronts: { type: Number },
  interiorHeight: { type: Number },
  layout: { type: String },
  buildingTypes: { type: String },
  destination: { type: String },
  rooms: { type: Number },
  terrace: { type: Number },
  parking: { type: Number },
  priceForSale: priceForSale,
  priceForRenting: priceForRenting,
  buidingCharacteristics: buidingCharacteristics,
  description: description,
  additionalFeatures: additionalFeatures,
  images: images
})

module.exports = mongoose.model('ComercialSpace', schema)