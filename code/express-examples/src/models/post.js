import mongoose from 'mongoose';
import { increment, initialize } from './counter';

const postSchema = new mongoose.Schema({
  id: Number,
  title : {
    type: String,
//    required: true,
  },
  body: {
    type: String,
//    required: true,
  },
  userId: { type: Number }, // ref: 'User' // to reference real id
});

initialize('Post');
postSchema.pre('save', increment('Post'));

const Post = mongoose.model('Post', postSchema);

export default Post;
