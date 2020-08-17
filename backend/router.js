const router = require('express').Router()
const userController = require('./controllers/userController')
const clientController = require('./controllers/clientController')

const propertyController = require('./controllers/propertyController')
const propertyConfigController = require('./controllers/propertyConfigController')

const secureRoute = require('./lib/secureRoute')


router.route('/property/:type')
  .get(propertyController.index)
  .post(secureRoute, propertyController.create)


router.route('/property/:type/:id')
  .get(propertyController.getSingle)
  .delete(secureRoute, propertyController.remove)
  .put(propertyController.edit)

router.route('/add-clients')
  .get(clientController.index)
  .post(secureRoute, clientController.create)

router.route('/property-config/:type')
  .get(propertyConfigController.index)

router.route('/register').post(userController.register)
router.route('/edit-user/:id').put(userController.edit)

router.route('/login').post(userController.login)

router.route('/user/:id').get(userController.getUser)

router.route('/users').get(userController.findUsers)


module.exports = router