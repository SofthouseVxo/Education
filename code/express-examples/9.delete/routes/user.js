get = (req, res, next) => {
  var query;
  if(req.query.username) {
    query = req.models.User.findOne({username: req.query.username})
  }
  else
  {
    query = req.models.User.find()
  }

  query.exec().then((user) => {
      return res.send(user);
    }).catch((error) => next(error))
}

post = (req, res, next) => {
  req.models.User.create({
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
  }).then((user) => {
    return res.status(201).send(user)
  }).catch((error) => next(error))
}

getById = (req, res, next) => {
  req.models.User.findById(req.params.id).then((user) => {
    return res.send(user);
  }).catch((error) => next(error))
}

deleteById = (req, res, next) => {
  req.models.User.findOneAndDelete().then((deleted)=> {
    if (deleted)
      return res.send(deleted).status(200)
    res.sendStatus(204)
  }).catch((error) => next(error))
}

module.exports = {
  get,
  post,
  getById,
  deleteById,
}