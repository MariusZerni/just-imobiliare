const Apartment = require('../models/apartmentModel')

function index(req, res) {
  Apartment.find()
    // .populate('user')
    .then(apartment => {
      res.send(apartment)
    })
}

function createApartment(req, res) {
  const file = req.files.file
  if (file) {
    file.mv(`${__dirname}/../../frontend/images/${file.name}`, err => {
      if (err) {
        console.log(err)
        return res.status(500).send(err)
      }
    })
  }
  const apartment = { ...req.body, images: { image: file.name } }
  req.body.user = req.currentUser
  Apartment.create(apartment)
    .then(apartment => {
      res.status(201).send(apartment)
    })
    .catch(error => {
      console.log(error)
      res.status(500).send(error)
    })
}

function findApartment(req, res) {
  const id = req.params.id
  Apartment.findById(id)
    .then(apartment => {
      res.send(apartment)
    })
}

function deleteApartment(req, res) {
  const currentUser = req.currentUser
  const id = req.params.id
  Apartment.findById(id)
    .then(apartment => {
      if (!event.user.equals(currentUser))
        return res.status(401).send({
          message: 'You are not authorized!'
        })
      return apartment.remove()
    })
    .then(() => {
      res.sendStatus(204)
    })
}

function editApartment(req, res) {
  const currentUser = req.currentUser
  const id = req.params.id
  Apartment.findById(id)
    .then(apartment => {
      return apartment.set(req.body)
    })
    .then(apartment => {
      if (!event.user.equals(currentUser))
        return res.status(401).send({
          message: 'You are not authorized!'
        })
      return apartment.save()
    })
    .then(apartment => {
      res.status(202).send(apartment)
    })
}



module.exports = {
  index,
  createApartment,
  findApartment,
  deleteApartment,
  editApartment
}