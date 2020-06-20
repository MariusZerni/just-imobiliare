const router = require('express').Router()
const userController = require('./controllers/userController')
const apartmentController = require('./controllers/apartmentController')
const apartmentConfigController = require('./controllers/apartmentConfigController')

const secureRoute = require('./lib/secureRoute')


router.route('/apartments')
  .get(apartmentController.index)
  .post(apartmentController.createApartment)

router.route('/apartments/:id')
  .get(apartmentController.findApartment)
  .delete(secureRoute, apartmentController.deleteApartment)
  .put(secureRoute, apartmentController.editApartment)

router.route('/apartment-config')
  .get(apartmentConfigController.indexApartmentConfig)


router.route('/register').post(userController.register)

router.route('/login').post(userController.login)


module.exports = router