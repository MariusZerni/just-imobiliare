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


const characteristics = new mongoose.Schema({
  buildingType: { type: String },
  constructionYear: { type: Number },
  constructionStage: { type: String },
  constructionType: { type: String },
  seismicRisk: { type: String },
  historicalMonument: { type: Boolean },
  thermalRehabilitation: { type: Boolean },
  consolidatedBuilding: { type: Boolean },
  numberOfFloors: { type: Number },
  lowerGroundFloor: { type: Number },
  attic: { type: Boolean },
  description: { type: String, maxLength: 300 },
  title: { type: String, maxLength: 80 }
})


const facilities = new mongoose.Schema({
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
  heatingSystem: { type: [String] },
  insulation: { type: [String] },
  meters: { type: [String] },
  view: { type: [String] }
})
// Schema for price

const priceForSale = new mongoose.Schema({
  price: { type: String },
  priceSqm: { type: String },
  lowerPrice: { type: String },
  negociable: { type: Boolean },
  comissionOnCollab: { type: Number },
  comissionOnCollabPercent: { type: Number },
  VAT: { type: String },
  lanlord: { type: String },
  percentageCommission: { type: Number },
  servicesOnContractForSale: { type: String },
  exclusive: { type: Boolean },
  intermediation: { type: Boolean },
  contractNumber: { type: Number },
  contractSigningDate: { type: String },
  contractExpiringDate: { type: String },
  lanlordComssionPercentage: { type: Number },
  lanlordComission: { type: Number }
})


const priceForRenting = new mongoose.Schema({
  pricePerMounth: { type: Number },
  lastPrice: { type: Number },
  negociablePrice: { type: Boolean },
  VAT: { type: String },
  lanlord: { type: String },
  deposit: { type: Number },
  commissionCurrency: { type: Number },
  commissionPercentage: { type: Number },
  contractRentalServices: { type: String },
  exclusive: { type: Boolean },
  intermediation: { type: Boolean },
  contractNumber: { type: Number },
  contractSigningDate: { type: Date },
  contractExpiringDate: { type: Date },
  lanlordCommissionPercentage: { type: Number },
  lanlordCommission: { type: Number }
})

const schema = new mongoose.Schema({
  transactionType: { type: String },
  propertyType: { type: String },
  availability: { type: String },
  apartmentType: { type: String },
  compartments: { type: String },
  facingDirection: { type: String },
  floor: { type: String },
  comfortType: { type: String },
  interiorState: { type: String },
  year: { type: Number },
  images: { type: [String] },
  // suprafata utila
  squareMeters: { type: Number },
  builtArea: { type: Number },
  terrace: { type: Number },
  balcony: { type: Number },
  garden: { type: Number },
  numberOfRooms: { type: Number },
  bedrooms: { type: Number },
  kitchen: { type: Number },
  bathrooms: { type: Number },
  bathroomWindow: { type: Boolean },
  garage: { type: Number },
  parkingSpace: { type: Number },
  date: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  lanlordDetails: lanlordDetails,
  characteristics: characteristics,
  facilities: facilities,
  priceForSale: priceForSale,
  priceForRenting: priceForRenting,
  // images: images,
  // user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  address: address
})




module.exports = mongoose.model('Apartment', schema)