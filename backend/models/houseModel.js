const mongoose = require('mongoose')

const images = new mongoose.Schema({
  image: { type: String }
})

const annexes = new mongoose.Schema({
  numberOfRooms: { type: Number },
  bedroom: { type: Number },
  kitchen: { type: Number },
  bathrooms: { type: Number },
  bathroomWindow: { type: Boolean },
  balcony: { type: Number },
  terrace: { type: Number },
  garage: { type: Number },
  parkingSpace: { type: Number }
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
  streetFaciities: { type: [String] },
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
  transactionType: { type: String },
  useFor: { type: String },
  availability: { type: String },
  houseType: { type: String },
  interiorState: { type: String },
  year: { type: Number },
  builtArea: { type: Number },
  squareMeter: { type: Number },
  landSquareMeter: { type: Number },
  gardenSquareMeter: { type: Number },
  terrace: { type: Number },
  roof: { type: String },
  cnstructionStage: { type: String },
  constructionType: { type: String },
  seismicRisk: { type: String },
  historicalMonument: { type: Boolean },
  consolidatedBuilding: { type: Boolean },
  thermalRehabilitation: { type: Boolean },
  lowerGroundFloor: { type: Number },
  numberOfFloors: { type: Number },
  attic: { type: Boolean },
  annexes: annexes,
  descriptionAndTitle: descriptionAndTitle,
  priceForSale: priceForSale,
  priceForRenting: priceForRenting,
  facilities: facilities,
  images: images
})


module.exports = mongoose.model('House', schema)