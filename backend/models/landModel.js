const mongoose = require('mongoose')

const images = new mongoose.Schema({
  image: { type: String }
})

const townPlanning = new mongoose.Schema({
  CUT: { type: String },
  constructionAuthorization: { type: Boolean },
  approvedPUD: { type: Boolean },
  POT: { type: Number },
  approvedPUZ: { type: Boolean },
  urbanCertificate: { type: Boolean }
})

const description = new mongoose.Schema({
  title: { type: String, maxLength: 80 },
  description: { type: String, maxLength: 300 }
})

const additionalFeature = new mongoose.Schema({
  additionalFeature: { type: String },
  landUtilities: { type: String },
  streetFacilities: { type: String },
  view: { type: String },
  parking: { type: String }
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
  transactionType: { type: String },
  propertyType: { type: String },
  type: { type: String },
  squareMeter: { type: Number },
  streetFront: { type: Number },
  access: { type: String },
  distanceFromUtilities: { type: Number },
  inclination: { type: Number },
  accessRoadWidth: { type: Number },
  landType: { type: String },
  areaUnit: { type: String },
  roadFronts: { type: Number },
  classification: { type: String },
  destination: { type: String },
  availability: { type: String },
  priceForSale: priceForSale,
  priceForRenting: priceForRenting,
  townPlanning: townPlanning,
  description: description,
  additionalFeature: additionalFeature,
  images: images
})



module.exports = mongoose.model('Land', schema)