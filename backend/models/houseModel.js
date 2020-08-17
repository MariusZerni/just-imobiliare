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


const descriptionAndTitle = new mongoose.Schema({
  title: { type: String, maxLength: 80 },
  description: { type: String, maxLength: 300 }
})

const facilities = new mongoose.Schema({
  transactionType: { type: String },
  propertyType: { type: String },
  features: { type: [String] },
  realEstateFacilities: { type: [String] },
  doorEntry: { type: [String] },
  interiorDoors: { type: [String] },
  walls: { type: [String] },
  floorType: { type: [String] },
  furnished: { type: [String] },
  kitchenType: { type: [String] },
  otherSpaces: { type: [String] },
  streetFacilities: { type: [String] },
  parking: { type: [String] },
  windows: { type: [String] },
  generalUtilities: { type: [String] },
  heating: { type: [String] },
  insulation: { type: [String] },
  meters: { type: [String] },
  view: { type: [String] }
})

// Schema Price
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
  propertyType: { type: String },
  transactionType: { type: String },
  useFor: { type: String },
  availability: { type: String },
  houseType: { type: String },
  interiorState: { type: String },
  refurbishedYear: { type: Number },
  builtArea: { type: Number },
  squareMeters: { type: Number },
  landSquareMeters: { type: Number },
  gardenSquareMeter: { type: Number },
  terrace: { type: Number },
  frontAccess: { type: Number },
  roof: { type: String },
  constructionStage: { type: String },
  constructionYear: { type: String },
  constructionType: { type: String },
  seismicRisk: { type: String },
  historicalMonument: { type: Boolean },
  consolidatedBuilding: { type: Boolean },
  thermalRehabilitation: { type: Boolean },
  basement: { type: Number },
  numberOfFloors: { type: Number },
  attic: { type: Boolean },
  numberOfRooms: { type: Number },
  bedrooms: { type: Number },
  kitchens: { type: Number },
  bathrooms: { type: Number },
  bathroomWindow: { type: Boolean },
  balconies: { type: Number },
  garage: { type: Number },
  parkingSpace: { type: Number },
  images: { type: [String] },
  date: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  descriptionAndTitle: descriptionAndTitle,
  lanlordDetails: lanlordDetails,
  priceForSale: priceForSale,
  priceForRenting: priceForRenting,
  facilities: facilities,
  address: address
  
})


module.exports = mongoose.model('House', schema)