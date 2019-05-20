const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  username: {
    type: String,
//    unique: true,
  },
  email: {
    type: String,
//    unique: true,
//    validator: function(v) {
//      return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
//    },
  },
  address: {
    street: {
      type: String,
      unique: true
    },
    suite: String,
    city: String,
    zipcode: String,
    geo: {
      lat: {
        type: Number,
      },
      lng: {
        type: Number,
      }
    }
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
