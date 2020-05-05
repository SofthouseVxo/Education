get = (req, res, next) => {
  // localhost:3000/user => req.query {}
  // localhost:3000/user?usermame=pelle => req.query {"username": "pelle"}
  req.models.User.find(req.query).then((user) => {
      return res.send(user);
    }).catch((error) => {
      next(error)
    })
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
  }).catch((error) => {
    next(error)
  })
}

getById = (req, res, next) => {
  req.models.User.findById(req.params.id).then((user) => {
    return res.send(user);
  })
}

module.exports = {
  get,
  post,
  getById,
}