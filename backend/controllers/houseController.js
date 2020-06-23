const House = require('../models/houseModel')

function index(req, res) {
  House.find()
    // .populate('user')
    .then(house => {
      res.send(house)
    })
}

function createHouse(req, res) {
  const file = req.files.file
  if (file) {
    file.mv(`${__dirname}/../../frontend/images/${file.name}`, err => {
      if (err) {
        console.log(err)
        return res.status(500).send(err)
      }
    })
  }
  const house = { ...req.body, images: { image: file.name } }
  // console.log(house)
  req.body.user = req.currentUser
  House.create(house)
  // console.log(house)
    .then(house => {
      res.status(201).send(house)
      console.log(house)
    })
    .catch(error => {
      console.log(error)
      res.status(500).send(error)
    })
}

function findHouse(req, res) {
  const id = req.params.id
  House.findById(id)
    .then(house => {
      res.send(house)
    })
}

function deleteHouse(req, res) {
  const currentUser = req.currentUser
  const id = req.params.id
  House.findById(id)
    .then(house => {
      if (!event.user.equals(currentUser))
        return res.status(401).send({
          message: 'You are not authorized!'
        })
      return house.remove()
    })
    .then(() => {
      res.sendStatus(204)
    })
}

function editHouse(req, res) {
  const currentUser = req.currentUser
  const id = req.params.id
  House.findById(id)
    .then(house => {
      return house.set(req.body)
    })
    .then(house => {
      if (!event.user.equals(currentUser))
        return res.status(401).send({
          message: 'You are not authorized!'
        })
      return house.save()
    })
    .then(house => {
      res.status(202).send(house)
    })
}



module.exports = {
  index,
  createHouse,
  findHouse,
  deleteHouse,
  editHouse
}