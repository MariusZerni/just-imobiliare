const mongoose = require('mongoose')
const User = require('./models/user')
const dbURI = 'mongodb://localhost/just-imobiliare-db'

mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (error, db) => {
    if (error) {
      return console.log(error)
    }
    console.log('Successfully connected to mongo!')
    db.dropDatabase()
      .then(() => {
        return User.create([
          {
            username: 'Marius',
            email: 'marius@yahoo.com',
            password: 'marius',
            passwordConfirmation: 'marius'
          }
        ])
      })




      .then(users => console.log(`${''.repeat(users.length)} created`))
      .then(() => console.log('Goodbye!'))
      .catch(err => console.log(err))
      .finally(() => mongoose.connection.close())
  
  }
)