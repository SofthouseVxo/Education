const mongoose = require('mongoose')

//import specific models, just one at the moment
const User = require('./user.js')

//connection string for mongodb is a URI:
//scheme is a mongodb specific protocol
//the path is name of the database, in this case example
const uri = process.env.DATABASE_URL || "mongodb://localhost:27017/example"

// returs a promise that resolves when the database is connected
const connectDb = () => {
  return mongoose.connect(uri);
};

module.exports = {
  connectDb,
  models: {
    User
  }
} 