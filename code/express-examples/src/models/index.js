import mongoose from 'mongoose';

import User from './user';
import Post from './post';
import Counter from './counter'

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL);
};

const models = { User, Post, Counter };

export { connectDb };

export default models;
