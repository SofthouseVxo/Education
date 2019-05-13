import mongoose from 'mongoose';
import { increment, initialize } from './counter';

const userSchema = new mongoose.Schema({
  id: Number,
  name: {
    type: String,
  },
  username: {
    type: String,
//    unique: true,
  },
  email: {
    type: String,
//    unique: true,
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

userSchema.statics.findByLogin = async function(login) {
  let user = await this.findOne({
    username: login,
  });

  if (!user) {
    user = await this.findOne({ email: login });
  }

  return user;
};

userSchema.pre('remove', function(next) {
  this.model('Post').deleteMany({ user: this.id }, next);
});

initialize('User');
userSchema.pre('save', increment('User'));

const User = mongoose.model('User', userSchema);

export default User;
