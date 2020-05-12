const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  username: {
    type: String,
    required: true,
  },
  // make sure email is required, unique and lowercase
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: 'EmailInvalid',
    validate:
    {
      validator: ((v) => {
        return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
      })
    } 
  },
  // add a password field
  password: {
    type: String,
    select: false, 
    equired: 'PasswordInvalid'},
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

// add a pre save hook that hashesa and salts the password before storing
userSchema.pre('save', function(next) {
  var person = this;
  // no need to update the password has
  if (!person.isModified('password')) {
    return next();
  }
  // generate salt
  bcrypt.genSalt(10, function(err, salt) {
    // and hash
    bcrypt.hash(person.password, salt, function(err, hash) {
      // and store the salted and hashed password
      person.password = hash;
      next();
    });
  });
});

// add a compare password method
userSchema.methods.comparePassword = function(password, done) {
  // hash the password to test and compares the hashes
  bcrypt.compare(password, this.password, function(err, isMatch) {
    done(err, isMatch);
  });
};

const User = mongoose.model('User', userSchema);

module.exports = User;
