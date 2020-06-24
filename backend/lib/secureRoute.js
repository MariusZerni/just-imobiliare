const User = require('../models/user')
const { secret } = require('../config/environment')
const jwt = require('jsonwebtoken')

function secureRoute(req, res, next) {
  console.log('secure route')
  const authToken = req.headers.authorization
  if (!authToken || !authToken.startsWith('Bearer')) {
    return res.status(401).send({ message: 'Unauthorized, invalid login' })
  }

  const token = authToken.replace('Bearer ', '')
  jwt.verify(token, secret, (err, payload) => {
    if (err) return res.status(402).send({ message: 'Login expired!' })

    User.findById(payload.sub)
      .then(user => {
        if (!user) return res.status(403).send({ message: 'No user was found' })
        req.currentUser = user
        next()
      })
      .catch(() => {
        res
          .status(404)
          .send({ 
            message: 'Unauthorized , Middleware did not go through, error 401'
          })
      })
  })
}

module.exports = secureRoute