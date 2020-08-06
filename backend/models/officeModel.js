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

const technicalParameters = new mongoose.Schema({
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
  officeType: { type: String },
  bathrooms: { type: Number },
  terrace: { type: Number },
  availability: { type: String },
  squareMeters: { type: Number },
  parkings: { type: String },
  parkingPrice: { type: Number },
  buildingType: { type: String },
  floor: { type: Number },
  numberOfRooms: { type: Number },
  layout: { type: String },
  year: { type: Number },
  numberOfFloors: { type: Number },
  images: { type: [String] },
  date: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  priceForSale: priceForSale,
  priceForRenting: priceForRenting,
  description: description,
  technicalParameters: technicalParameters,
  address: address
})


module.exports = mongoose.model('Office', schema)