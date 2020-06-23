const IndustrialSpace = require('../models/instrialSpaceModel')

function index(req, res) {
  IndustrialSpace.find()
    // .populate('user')
    .then(industrialSpace => {
      res.send(industrialSpace)
    })
}

function createIndustrialSpace(req, res) {
  const file = req.files.file
  if (file) {
    file.mv(`${__dirname}/../../frontend/images/${file.name}`, err => {
      if (err) {
        console.log(err)
        return res.status(500).send(err)
      }
    })
  }
  const industrialSpace = { ...req.body, images: { image: file.name } }
  req.body.user = req.currentUser
  IndustrialSpace.create(industrialSpace)
    .then(industrialSpace => {
      res.status(201).send(industrialSpace)
    })
    .catch(error => {
      console.log(error)
      res.status(500).send(error)
    })
}

function findIndustrialSpace(req, res) {
  const id = req.params.id
  IndustrialSpace.findById(id)
    .then(industrialSpace => {
      res.send(industrialSpace)
    })
}

function deleteIndustrialSpace(req, res) {
  const currentUser = req.currentUser
  const id = req.params.id
  IndustrialSpace.findById(id)
    .then(industrialSpace => {
      if (!event.user.equals(currentUser))
        return res.status(401).send({
          message: 'You are not authorized!'
        })
      return industrialSpace.remove()
    })
    .then(() => {
      res.sendStatus(204)
    })
}

function editIndustrialSpace(req, res) {
  const currentUser = req.currentUser
  const id = req.params.id
  IndustrialSpace.findById(id)
    .then(industrialSpace => {
      return industrialSpace.set(req.body)
    })
    .then(industrialSpace => {
      if (!event.user.equals(currentUser))
        return res.status(401).send({
          message: 'You are not authorized!'
        })
      return industrialSpace.save()
    })
    .then(industrialSpace => {
      res.status(202).send(industrialSpace)
    })
}



module.exports = {
  index,
  createIndustrialSpace,
  findIndustrialSpace,
  deleteIndustrialSpace,
  editIndustrialSpace
}