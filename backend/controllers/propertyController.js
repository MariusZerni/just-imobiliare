const House = require('../models/houseModel')
const Apartment = require('../models/apartmentModel')
const Office = require('../models/officeModel')
const Land = require('../models/landModel')
const IndustrialSpace = require('../models/industrialSpaceModel')
const ComercialSpace = require('../models/comercialSpaceModel')

function propertyType(req) {
  const type = req.params.type

  let Property
  
  if (type === 'apartment') {
    Property = Apartment
  } else if (type === 'house') {
    Property = House
  } else if (type === 'office') {
    Property = Office
  } else if (type === 'land') {
    Property = Land
  } else if (type === 'industrial-space') {
    Property = IndustrialSpace
  } else if (type === 'comercial-space') {
    Property = ComercialSpace
  }

  return Property

}

function index(req, res) {
  const Property = propertyType(req)
  Property.find()
    // .populate('user')
    .then(property => {
      res.send(property)
    })
}

function create(req, res) {
  console.log(req.params.type)

  const Property = propertyType(req)
  // const file = req.files.file
  // if (file) {
  //   file.mv(`${__dirname}/../../frontend/images/${file.name}`, err => {
  //     if (err) {
  //       console.log(err)
  //       return res.status(500).send(err)
  //     }
  //   })
  // }
  // const property = { ...req.body, images: { image: file.name } }
  req.body.user = req.currentUser
  Property.create(req.body)
    .then(property => {
      res.status(201).send(property)
    })
    .catch(error => {
      console.log(error)
      res.status(500).send(error)
    })
}


function getSingle(req, res) {
  const id = req.params.id
  const Property = propertyType(req)
  Property.findById(id)
    .then(property => {
      res.send(property)
    })
}

function remove(req, res) {
  const currentUser = req.currentUser
  const id = req.params.id
  const Property = propertyType(req)
  Property.findById(id)
    .then(property => {
      if (!event.user.equals(currentUser))
        return res.status(401).send({
          message: 'You are not authorized!'
        })
      return property.remove()
    })
    .then(() => {
      res.sendStatus(204)
    })
}

function edit(req, res) {
  const currentUser = req.currentUser
  const id = req.params.id
  const Property = propertyType(req)
  Property.findById(id)
    .then(property => {
      return property.set(req.body)
    })
    .then(property => {
      if (!event.user.equals(currentUser))
        return res.status(401).send({
          message: 'You are not authorized!'
        })
      return property.save()
    })
    .then(property => {
      res.status(202).send(property)
    })
}


module.exports = {
  index,
  create,
  getSingle,
  edit,
  remove
}