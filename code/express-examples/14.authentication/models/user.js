const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  name: String,
  username: {
    type: String,
    required: false,
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
    required: 'PasswordInvalid',
    select: false
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
},
{
  versionKey: false,
  timestamps: false
});

// add a pre save hook that hashesa and salts the password before storing
userSchema.pre('save', function(next) {
  var user = this;
  // no need to update the password has
  if (!user.isModified('password')) {
    return next();
  }
  // generate salt
  bcrypt.genSalt(10, function(err, salt) {
    if(err) next(err)
    // and hash
    bcrypt.hash(user.password, salt, function(err, hash) {
      if(err) next(err)
      // and store the salted and hashed password
      console.log("stored", hash, user.password)
      user.password = hash;
      next();
    });
  });
});

// add a compare password method, arrow functions pervent binding this
userSchema.methods.comparePassword = function(password, cb) {
  // this.password isn't populated since it isn't selected
  User.findById(this.id)
    .select('password')
    .exec(function(err,user){
    if (err) console.error(err)
    // hash the password to test and compares the hashes
    bcrypt.compare(password, user.password, function(err, isMatch) {
      err ? cb(err) : cb(null, isMatch)
    });  
  })
};

const User = mongoose.model('User', userSchema);

module.exports = User;
