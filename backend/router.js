const router = require('express').Router()
const userController = require('./controllers/userController')
const apartmentController = require('./controllers/apartmentController')
const apartmentConfigController = require('./controllers/apartmentConfigController')

const houseController = require('./controllers/houseController')

const officeController = require('./controllers/officeController')

const secureRoute = require('./lib/secureRoute')

// Apartment routes
router.route('/apartments')
  .get(apartmentController.index)
  .post(apartmentController.createApartment)

// House route
router.route('/houses')
  .get(houseController.index)
  .post(houseController.createHouse)



router.route('/apartments/:id')
  .get(apartmentController.findApartment)
  .delete(secureRoute, apartmentController.deleteApartment)
  .put(secureRoute, apartmentController.editApartment)

router.route('/apartment-config')
  .get(apartmentConfigController.indexApartmentConfig)



// Office route
router.route('/offices')
  .get(officeController.index)
  .post(officeController.createOffice)

router.route('/register').post(userController.register)

router.route('/login').post(userController.login)


module.exports = router