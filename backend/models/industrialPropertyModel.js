const mongoose = require('mongoose')

const lanlordDetails = new mongoose.Schema({
  fullName: { type: String },
  email: { type: String },
  phoneNumber: { type: Number },
  moreDetails: { type: String }
})

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
const additionalCharacteristics = new mongoose.Schema({
  moreCharacteristics: { type: String },
  parking: { type: String },
  streetFacilities: { type: String },
  landFacilities: { type: String }
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
  layout: { type: String },
  propertyType: { type: String },
  useFor: { type: String },
  bathrooms: { type: Number },
  terrace: { type: Number },
  constructionYear: { type: Number },
  officeSquareMeters: { type: Number },
  productionAreaSqm: { type: Number },
  squareMeters: { type: Number },
  doorsDimensions: { type: Number },
  buildingType: { type: String },
  numberOfFloors: { type: Number },
  numberOfRooms: { type: Number },
  cloackroom: { type: Number },
  kitchen: { type: Number },
  parking: { type: Number },
  landSquareMeters: { type: Number },
  interiorHeight: { type: Number },
  availability: { type: String },
  images: { type: [String] },
  date: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  priceForSale: priceForSale,
  lanlordDetails: lanlordDetails,
  priceForRenting: priceForRenting,
  description: description,
  additionalCharacteristics: additionalCharacteristics,
  address: address
})

module.exports = mongoose.model('IndustrialProperty', schema)