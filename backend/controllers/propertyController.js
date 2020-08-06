const House = require('../models/houseModel')
const Apartment = require('../models/apartmentModel')
const Office = require('../models/officeModel')
const Land = require('../models/landModel')
const IndustrialProperty = require('../models/industrialPropertyModel')
const CommercialProperty = require('../models/commercialPropertyModel')

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
  } else if (type === 'industrial-property') {
    Property = IndustrialProperty
  } else if (type === 'commercial-property') {
    Property = CommercialProperty
  }

  return Property

}

function index(req, res) {
  const Property = propertyType(req)
  Property.find()
    .populate('user')
    .then(property => {
      res.send(property)
    })
}



function create(req, res) {

  const user = req.currentUser


  const property = { ...req.body, user: user }
  const PropertyModel = propertyType(req)

  // if (req.files && req.files.file) {
  //   const file = req.files.file
  //   console.log('file', file)
  //   file.mv(`${__dirname}/../../frontend/images/${file.name}`, err => {
  //     if (err) {
  //       console.log(err)
  //       return res.status(500).send(err)
  //     }
  //     property = { ...req.body, images: file.name }
  //   })
  // }
  //console.log(file)

  console.log('req.body property', property)
  req.body.user = req.currentUser
  console.log('currentUser', req.body)
  PropertyModel.create(property)
    .then(property => {
      console.log('then', property)
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
  console.log('remove')
  Property.findById(id)
    .then(property => {
      console.log('user', property)
      if (!property.user.equals(currentUser._id)) return res.status(401).send({ message: 'Unauthorized' })
      return property.remove()
    })
    .then(() => {
      res.sendStatus(204)
    })
}

function edit(req, res) {
  console.log('edit')
  // const currentUser = req.currentUser
  const id = req.params.id
  const newBody = {}
  
  for (const [key, value] of Object.entries(req.body)) {
    // console.log(`${key}: ${value}`)
    newBody[key] =  JSON.parse(value)
  }
  if (newBody.priceForSale.price) {
    newBody.priceForSale.price = newBody.priceForSale.price.replace(/,/g, '')
    
  }
  console.log('newBody',newBody)
  let editedProperty = { ...newBody, images: [] }
  if (req.files && req.files.file) {
    const file = req.files.file
    console.log('files', req.files)
    console.log('file1')
    if (file.length < 1) {
      console.log('multiple files')
      file.forEach((file) => {
        editedProperty = { ...newBody, images: [ ...editedProperty.images, file.name ] }
  
        file.mv(`${__dirname}/../../frontend/images/${file.name}`, err => {
          if (err) {
            console.log(err)
            return res.status(500).send(err)
          }        
        })   
      })
    } else {
      
      editedProperty = { ...newBody, images: [file.name] }
      file.mv(`${__dirname}/../../frontend/images/${file.name}`, err => {
        if (err) {
          return res.status(500).send(err)
        }        
      }) 
    }
    console.log('edited property', editedProperty)


    const Property = propertyType(req)
    console.log('Property', Property)
    Property.findById(id)
      .then(property => {
        console.log('property')
        return property.set(editedProperty)
      })
      .then(property => {
        console.log('saving', id)
        // console.log(property)
        // if (!event.user.equals(currentUser))
        //   return res.status(401).send({
        //     message: 'You are not authorized!'
        //   })
        return property.save()
      })
      .then(property => {
        res.status(202).send(property)
      })

  } else {
    const Property = propertyType(req)
    console.log('Property', Property)
    Property.findById(id)
      .then(property => {
        console.log('else', property)
        return property.set(editedProperty)
      })
      .then(property => {
        // if (!event.user.equals(currentUser))
        //   return res.status(401).send({
        //     message: 'You are not authorized!'
        //   })
        return property.save()
      })
      .then(property => {
        res.status(202).send(property)
      })
  }
}


module.exports = {
  index,
  create,
  getSingle,
  edit,
  remove
}