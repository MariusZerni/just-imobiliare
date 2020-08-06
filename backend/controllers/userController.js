const User = require('../models/user')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')

function register(req, res) {
  User.create(req.body)
    .then(user => {
      res.status(201).send(user)
    })
    .catch(error => {
      console.log(error)
      res.status(500).send(error)
    })
}

function login(req, res) {
  User
    .findOne({ email: req.body.email })
    .then(user => {
      const errorMsg = { message: 'Invalid credentials' }
      if (!user) {
        return res.status(401).send(errorMsg)
      }
      if (!user.validatePassword(req.body.password)) {
        console.log('unauthorized')
        return res.status(401).send(errorMsg)
      }
      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '14d' })
      console.log('login token', token)
      res.status(202).send({ user: user, token })
    })
    .catch(error => {
      console.log(error)
      res.status(500).send(error)
    })
}

function getUser(req, res) {
  const id = req.params.id
  User.findById(id)
    .then(user => {
      console.log('user', user)
      res.send(user)
    })
}

function findUsers(req, res) {
  User.find().then(user => {
    console.log('m', user)
    res.send(user)
  })
}

function edit(req, res) {
  // const currentUser = req.currentUser
  const id = req.params.id
  const newBody = {}
  for (const [key, value] of Object.entries(req.body)) {
    newBody[key] = value
  }
  let editedUser = { ...newBody, images: [] }
  if (req.files && req.files.file) {
    const file = req.files.file

    editedUser = { ...newBody, image: file.name }
    file.mv(`${__dirname}/../../backend/images/profiles/${file.name}`, err => {
      console.log('one image')
      if (err) {
        console.log(err)
        return res.status(500).send(err)
      }
    })


    console.log('editedUser', editedUser)
    User.findById(id)
      .then(user => {
        console.log(user)
        return user.set(editedUser)
      })
      .then(user => {
        // if (!event.user.equals(currentUser))
        //   return res.status(401).send({
        //     message: 'You are not authorized!'
        //   })
        return user.save()
      })
      .then(user => {
        res.status(202).send(user)
      })

  } else {
    User.findById(id)
      .then(user => {
        return user.set(editedUser)
      })
      .then(user => {
        // if (!event.user.equals(currentUser))
        //   return res.status(401).send({
        //     message: 'You are not authorized!'
        //   })
        return user.save()
      })
      .then(user => {
        res.status(202).send(user)
      })
  }
}




module.exports = {
  register,
  login, getUser,
  findUsers, edit
}