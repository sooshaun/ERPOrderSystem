const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect(
  // turn on upon deployment
  // process.env.MONGO_URI,
  // turn off upon deployment
  'mongodb://localhost/ordersystem',
  { useMongoClient: true }
)
  .then(() => {
    console.log('Successfully connected to database')
  })
  .catch(() => {
    console.error('Error trying to connect to database', error)
  })

module.exports = mongoose