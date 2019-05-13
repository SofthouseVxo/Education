import 'dotenv/config';
import models, { connectDb } from './models';

const fetch = require("node-fetch");

connectDb().then(async () => {
  
  console.log(`deleting users, posts and counters`);
  await Promise.all([
    models.User.deleteMany({}),
    models.Post.deleteMany({}),
  ]);

  await createUsersWithPosts();
  process.exit()
});

const createUsersWithPosts = async () => {

  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json()

  await Promise.all(users.map(async (user) => {
    let doc = new models.User(user);
    doc.id = user.id;
    let saved = await doc.save();
    console.log(`Added user ${saved.id} ${saved.name}`);
  }));

  response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json()

  await Promise.all(posts.map(async (post) => {
    let doc = new models.Post(post);
    doc.id = post.id;
    let saved = await doc.save();
    console.log(`Adding post ${saved.id} ${saved.title}`)
  }));
};