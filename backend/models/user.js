const mongoose = require('mongoose')
const mongooseHidden = require('mongoose-hidden')()

const bcrypt = require('bcryptjs')

const schema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  image: { type: String },
  name: { type: String, required: true, unique: true },
  email: { type: String, required: [true, 'Email required'], unique: [true, 'Email has to be unique'] },
  password: { type: String, required: true, hide: true, minLength: 9 }
})

schema.plugin(require('mongoose-unique-validator'))
schema.plugin(mongooseHidden, { hidden: { _id: false, password: true } })




schema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation
  })

schema.pre('validate', function checkPassword(next) {
  if (
    this.isModified('password') &&
    this._passwordConfirmation !== this.password
  ) {
    this.invalidate('passwordConfirmation', 'Should match')
  }
  next()
})

schema.pre('save', function hashPassword(next) {
  if (this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync())
  }
  next()
})

schema.methods.validatePassword = function validatePassword(password) {
  console.log(password)
  console.log(this.password)
  return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model('User', schema)