const ApartmentConfig = require('../models/apartmentConfigModel')

function indexApartmentConfig(req, res) {
  ApartmentConfig.find()
    // .populate('user')
    .then(apartmentConfig => {
      console.log(apartmentConfig)
      res.send(apartmentConfig)
    })
}


module.exports = {
  indexApartmentConfig
}