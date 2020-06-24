const router = require('express').Router()
const userController = require('./controllers/userController')

const propertyController = require('./controllers/propertyController')

const secureRoute = require('./lib/secureRoute')


router.route('/property/:type')
  .get(secureRoute, propertyController.index)
  .post(secureRoute, propertyController.create)
  .get(secureRoute, propertyController.getSingle)
  .delete(secureRoute, propertyController.remove)
  .put(secureRoute, propertyController.edit)


router.route('/register').post(userController.register)

router.route('/login').post(userController.login)


module.exports = router