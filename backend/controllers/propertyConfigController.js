const HouseConfig = require('../models/houseConfigModel')
const ApartmentConfig = require('../models/apartmentConfigModel')
const OfficeConfig = require('../models/officeConfigModel')
const LandConfig = require('../models/landConfigModel')
const IndustrialSpaceConfig = require('../models/industrialSpaceConfigModel')
const ComercialSpaceConfig = require('../models/comercialSpaceConfigModel')


function propertyTypeConfig(req) {
  const type = req.params.type

  let PropertyConfig
  
  if (type === 'apartment') {
    PropertyConfig = ApartmentConfig
  } else if (type === 'house') {
    PropertyConfig = HouseConfig
  } else if (type === 'office') {
    PropertyConfig = OfficeConfig
  } else if (type === 'land') {
    PropertyConfig = LandConfig
  } else if (type === 'industrial-space') {
    PropertyConfig = IndustrialSpaceConfig
  } else if (type === 'comercial-space') {
    PropertyConfig = ComercialSpaceConfig
  }

  return PropertyConfig

}

function index(req, res) {
  const PropertyConfig = propertyTypeConfig(req)
  PropertyConfig.find()
    .populate('user')
    .then(property => {
      res.send(property)
    })
}

function create(req, res) {

  const PropertyConfig = propertyTypeConfig(req)
  req.body.user = req.currentUser
  PropertyConfig.create(req.body)
    .then(property => {
      res.status(201).send(property)
    })
    .catch(error => {
      console.log(error)
      res.status(500).send(error)
    })
}


module.exports = {
  index,
  create
}