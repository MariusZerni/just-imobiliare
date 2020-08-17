const Client = require('../models/clientModel')



function index(req, res) {
  Client.find()
    .populate('user')
    .then(property => {
      res.send(property)
    })
}


function create(req, res) {
  req.body.user = req.currentUser
  Client.create(req.body)
    .then(client => {
      console.log('then', client)
      res.status(201).send(client)
    })
    .catch(error => {
      console.log('error', error)
      res.status(500).send(error)
    })
}

function remove(req, res) {
  const currentUser = req.currentUser
  const id = req.params.id
  console.log('remove')
  Client.findById(id)
    .then(client => {
      console.log('user', client)
      if (!client.user.equals(currentUser._id)) return res.status(401).send({ message: 'Unauthorized' })
      return client.remove()
    })
    .then(() => {
      res.sendStatus(204)
    })
}


module.exports = {
  index, create,
  remove
}