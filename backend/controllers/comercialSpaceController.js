const ComercialSpace = require('../models/comercialSpaceModel')

function index(req, res) {
  ComercialSpace.find()
    // .populate('user')
    .then(comercialSpace => {
      res.send(comercialSpace)
    })
}

function createComercialSpace(req, res) {
  const file = req.files.file
  if (file) {
    file.mv(`${__dirname}/../../frontend/images/${file.name}`, err => {
      if (err) {
        console.log(err)
        return res.status(500).send(err)
      }
    })
  }
  const comercialSpace = { ...req.body, images: { image: file.name } }
  req.body.user = req.currentUser
  ComercialSpace.create(comercialSpace)
    .then(comercialSpace => {
      res.status(201).send(comercialSpace)
    })
    .catch(error => {
      console.log(error)
      res.status(500).send(error)
    })
}

function findComercialSpace(req, res) {
  const id = req.params.id
  ComercialSpace.findById(id)
    .then(comercialSpace => {
      res.send(comercialSpace)
    })
}

function deleteComercialSpace(req, res) {
  const currentUser = req.currentUser
  const id = req.params.id
  ComercialSpace.findById(id)
    .then(comercialSpace => {
      if (!event.user.equals(currentUser))
        return res.status(401).send({
          message: 'You are not authorized!'
        })
      return comercialSpace.remove()
    })
    .then(() => {
      res.sendStatus(204)
    })
}

function editComercialSpace(req, res) {
  const currentUser = req.currentUser
  const id = req.params.id
  ComercialSpace.findById(id)
    .then(comercialSpace => {
      return comercialSpace.set(req.body)
    })
    .then(comercialSpace => {
      if (!event.user.equals(currentUser))
        return res.status(401).send({
          message: 'You are not authorized!'
        })
      return comercialSpace.save()
    })
    .then(comercialSpace => {
      res.status(202).send(comercialSpace)
    })
}



module.exports = {
  index,
  createComercialSpace,
  findComercialSpace,
  deleteComercialSpace,
  editComercialSpace
}