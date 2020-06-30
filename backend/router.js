const router = require('express').Router()
const userController = require('./controllers/userController')

const propertyController = require('./controllers/propertyController')
const propertyConfigController = require('./controllers/propertyConfigController')

// const secureRoute = require('./lib/secureRoute')


router.route('/property/:type')
  .get(propertyController.index)
  .post(propertyController.create)



router.route('/property/:type/:id')
  .get(propertyController.getSingle)
  .delete(propertyController.remove)
  .put(propertyController.edit)

router.route('/property-config/:type')
  .get(propertyConfigController.index)

router.route('/register').post(userController.register)

router.route('/login').post(userController.login)


module.exports = router