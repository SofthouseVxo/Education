dotify = require('node-dotify');

get = (req, res, next) => {
  var query;
  if(req.query.username) {
    query = req.models.User.find({username: req.query.username})
  }
  else
  {
    query = req.models.User.find()
  }


  query.exec().then((users) => {
      return res.send(users);
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
  req.models.User.findByIdAndDelete(req.params.id).then((deleted)=> {
    if (deleted)
      return res.send(deleted).status(200)
    res.sendStatus(204)
  }).catch((error) => next(error))
}

put = (req, res, next) => {
  req.models.User.updateOne({_id: req.params.id},
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
      },
    },{
      new: true,
      upsert: true,
      runvalidators: true,
    }).then((status) => {
      console.log("status: ", status)
      if (status.upserted) {
        res.status(201)
       } else if (status.nModified) {
        res.status(200)
       } else {
        res.status(204)
      }
      req.models.User.findById(req.params.id).then((user) => {
        res.send(user)
      })
    }).catch((error) => next(error))
}

const patch = (req, res, next) => {
  console.log(dotify(req.body))
/*
  Dotify translates this:
  {
   "name": "name other than my name",
   "address" : {
      "street": "coolz street"
   }
  }

  to this:

  { 
   "name": "name other than my name",
   "address.street": "coolz street"
  }

  replacing the key street in the object address with the new value, 
  instead of replacing the entire address object
*/
  
  req.models.User.findByIdAndUpdate(req.params.id,
  { 
    $set: dotify(req.body)
  },
  {
    returnNewDocument: true,
    new: true,
  }).then((user) => {
    console.log("user after request:", user)
    res.send(user)
  }).catch((error) => next(error))
}

module.exports = {
  get,
  post,
  getById,
  deleteById,
  put,
  patch
}