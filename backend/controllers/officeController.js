const Office = require('../models/officeModel')

function index(req, res) {
  Office.find()
    // .populate('user')
    .then(office => {
      res.send(office)
    })
}

function createOffice(req, res) {
  const file = req.files.file
  if (file) {
    file.mv(`${__dirname}/../../frontend/images/${file.name}`, err => {
      if (err) {
        console.log(err)
        return res.status(500).send(err)
      }
    })
  }
  const office = { ...req.body, images: { image: file.name } }
  req.body.user = req.currentUser
  Office.create(office)
    .then(office => {
      res.status(201).send(office)
    })
    .catch(error => {
      console.log(error)
      res.status(500).send(error)
    })
}

function findOffice(req, res) {
  const id = req.params.id
  Office.findById(id)
    .then(office => {
      res.send(office)
    })
}

function deleteOffice(req, res) {
  const currentUser = req.currentUser
  const id = req.params.id
  Office.findById(id)
    .then(office => {
      if (!event.user.equals(currentUser))
        return res.status(401).send({
          message: 'You are not authorized!'
        })
      return office.remove()
    })
    .then(() => {
      res.sendStatus(204)
    })
}

function editOffice(req, res) {
  const currentUser = req.currentUser
  const id = req.params.id
  Office.findById(id)
    .then(office => {
      return office.set(req.body)
    })
    .then(office => {
      if (!event.user.equals(currentUser))
        return res.status(401).send({
          message: 'You are not authorized!'
        })
      return office.save()
    })
    .then(office => {
      res.status(202).send(office)
    })
}



module.exports = {
  index,
  createOffice,
  findOffice,
  deleteOffice,
  editOffice
}