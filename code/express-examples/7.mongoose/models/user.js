const mongoose = require('mongoose');

// validation function returns true if valid
const isEmail = ((v) => {
  // email validation regexps will make your eyes bleed... find one on stackoverflow
  return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
});

// defines what the json should look like
// body should be {"name": "myName", "username": ...}
const userSchema = new mongoose.Schema({
  name: String, //can be a simple type String, Number etc
  username: { //or a more complex type
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    validate:
    {
      validator: isEmail //calls a function for validation
    } 
  },
  address: {
    street: String,
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
