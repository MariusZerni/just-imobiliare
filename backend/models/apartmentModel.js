const mongoose = require('mongoose')

const address = new mongoose.Schema({
  county: { type: String },
  town: { type: String },
  street: { type: String },
  streetNumber: { type: Number }
})

// const images = new mongoose.Schema({
//   images: { type: [String] }
// })

const characteristics = new mongoose.Schema({
  buildingType: { type: String },
  constructionYear: { type: Number },
  constructionStage: { type: String },
  constructionType: { type: String },
  seismicRisk: { type: Boolean },
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
  streetFaciities: { type: [String] },
  parking: { type: [String] },
  windows: { type: [String] },
  generalUtilities: { type: [String] },
  heatingSystem: { type: [String] },
  insulation: { type: [String] },
  meters: { type: [String] },
  view: { type: [String] }
})
// Schema for price
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
  availability: { type: String },
  apartmentType: { type: String },
  compartments: { type: String },
  facingDirection: { type: String },
  floor: { type: Number },
  comfortType: { type: Number },
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
  
  characteristics: characteristics,
  facilities: facilities,
  priceForSale: priceForSale,
  priceForRenting: priceForRenting,
  // images: images,
  // user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  address: address
})




module.exports = mongoose.model('Apartment', schema)