const mongoose = require('mongoose')

const address = new mongoose.Schema({
  county: { type: String },
  town: { type: String },
  street: { type: String },
  streetNumber: { type: Number }
})


const description = new mongoose.Schema({
  title: { type: String, maxLength: 80 },
  description: { type: String, maxLength: 300 }
})

const additionalFeatures = new mongoose.Schema({
  moreFeatures: { type: [String] },
  landUtilities: { type: [String] },
  streetFacilities: { type: [String] },
  view: { type: [String] },
  parking: { type: [String] }
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
  squareMeters: { type: Number },
  streetFront: { type: Number },
  accessFrom: { type: String },
  distanceFromUtilities: { type: Number },
  inclination: { type: Number },
  landType: { type: String },
  areaUnit: { type: String },
  roadFronts: { type: Number },
  classification: { type: String },
  useFor: { type: String },
  availability: { type: String },
  CUT: { type: String },
  constructionAuthorization: { type: Boolean },
  approvedPUD: { type: Boolean },
  POT: { type: Number },
  approvedPUZ: { type: Boolean },
  urbanCertificate: { type: Boolean },
  date: { type: Date, default: Date.now },
  images: { type: [String] },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  priceForSale: priceForSale,
  priceForRenting: priceForRenting,
  description: description,
  additionalFeatures: additionalFeatures,
  address: address
})



module.exports = mongoose.model('Land', schema)