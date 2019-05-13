import { Router } from 'express';

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const users = await req.context.models.User.find();
    return res.send(users);
  } catch(err) {
    return next(err);
  }
});

router.post('/', async (req, res, next) => {
  console.log(req.body)
  try {
    const user = await req.context.models.User.create({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      address: {
        street: req.body.address.street,
        suite: req.body.address.suite,
        city: req.body.address.city,
        zipcode: req.body.address.zipcode,
        geo: {
          lat: req.body.address.geo.lat,
          lng: req.body.address.geo.lng,
        }
      }
    
    });

    return res.status(201).send(user);
  } catch(err) {
    return next(err);
  }
});

router.get('/:userId', async (req, res, next) => {
  try {
    const user = await req.context.models.User.findOne({
      id: parseInt(req.params.userId),
    });
    return res.send(user);
  } catch(err) {
    return next(err);
  }
});

router.put('/:userId', async (req, res, next) => {
  try {
    const user = await req.context.models.User.findOneAndUpdate({
        id: parseInt(req.params.userId),
      },
      {
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        address: {
          street: req.body.address.street,
          suite: req.body.address.suite,
          city: req.body.address.city,
          zipcode: req.body.address.zipcode,
          geo: {
            lat: req.body.address.geo.lat,
            lng: req.body.address.geo.lng,
          }
        }
      },
      {
        upsert: true,
        new: true,
        returnNewDocument: true
      }
    );

    return res.send(user);
  } catch(err) {
    return next(err);
  }
});

export default router;
