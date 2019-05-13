import { Router } from 'express';

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    let posts = {}
    if (req.query.userId) {
      posts = await req.context.models.Post.find({
        userId: parseInt(req.query.userId)
      });
    } else {
      posts = await req.context.models.Post.find();
    }
    return res.send(posts);
  } catch(err) {
    return next(err);
  }
});

router.get('/:postId', async (req, res, next) => {
  console.log(req.params.postId)
  try {
    const post = await req.context.models.Post.findOne({
      id: parseInt(req.params.postId),
    });
    console.log(post)
    return res.send(post);
  } catch(err) {
    return next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    if (!req.body.userId) return res.status(400).send("userId missing");
    const post = await req.context.models.Post.create({
      body: req.body.body,
      title: req.body.title,
      userId: req.body.userId,
    });

    return res.status(201).send(post);
  } catch(err) {
    return next(err);
  }
});

router.put('/:postId', async (req, res, next) => {
  if (!req.body.userId) return res.status(400).send("userId missing");

  try {
    const post = await req.context.models.Post.findOneAndUpdate({
        id: parseInt(req.params.postId),
      },
      {
        body: req.body.body,
        title: req.body.title,
        userId: req.body.userId,
      },
      {
        upsert: true,
        new: true,
        returnNewDocument: true
      }
    );

    return res.send(post);
  } catch(err) {
    return next(err);
  }
});

router.patch('/:postId', async (req, res, next) => {
  if (!req.body.userId) return res.status(400).send("userId missing");

  try {
    let patch = {}
    if (req.body.body) patch.body = req.body.body;
    if (req.body.title) patch.title = req.body.title;
    if (req.body.userId) patch.userId = req.body.userId;

    console.log(patch)

    const post = await req.context.models.Post.findOneAndUpdate({
        id: parseInt(req.params.postId),
      },
      { 
        $set: patch
      },
      {
        returnNewDocument: true,
        new: true
      });

    return res.send(post);
  } catch(err) {
    return next(err);
  }
});

router.delete('/:postId', async (req, res, next) => {
  try {
    const post = await req.context.models.Post.findOneAndDelete({
      id: parseInt(req.params.postId),
    });

    if(post)return res.sendStatus(200);
    return res.sendStatus(204);
  } catch(err) {
    return next(err);
  }
});

export default router;
