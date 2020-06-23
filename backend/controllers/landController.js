const Land = require('../models/landModel')

function index(req, res) {
  Land.find()
    // .populate('user')
    .then(land => {
      res.send(land)
    })
}

function createLand(req, res) {
  const file = req.files.file
  if (file) {
    file.mv(`${__dirname}/../../frontend/images/${file.name}`, err => {
      if (err) {
        console.log(err)
        return res.status(500).send(err)
      }
    })
  }
  const land = { ...req.body, images: { image: file.name } }
  req.body.user = req.currentUser
  Land.create(land)
    .then(land => {
      res.status(201).send(land)
    })
    .catch(error => {
      console.log(error)
      res.status(500).send(error)
    })
}

function findLand(req, res) {
  const id = req.params.id
  Land.findById(id)
    .then(land => {
      res.send(land)
    })
}

function deleteLand(req, res) {
  const currentUser = req.currentUser
  const id = req.params.id
  Land.findById(id)
    .then(land => {
      if (!event.user.equals(currentUser))
        return res.status(401).send({
          message: 'You are not authorized!'
        })
      return land.remove()
    })
    .then(() => {
      res.sendStatus(204)
    })
}

function editLand(req, res) {
  const currentUser = req.currentUser
  const id = req.params.id
  Land.findById(id)
    .then(land => {
      return land.set(req.body)
    })
    .then(land => {
      if (!event.user.equals(currentUser))
        return res.status(401).send({
          message: 'You are not authorized!'
        })
      return land.save()
    })
    .then(land => {
      res.status(202).send(land)
    })
}



module.exports = {
  index,
  createLand,
  findLand,
  deleteLand,
  editLand
}