import 'dotenv/config';
import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';
import morgan from 'morgan';

import models, { connectDb } from './models';
import routes from './routes';

const app = express();

// Application-Level Middleware

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(async (req, res, next) => {
  req.context = {
    models,
    //me: await models.User.findById('1'),
  };
  next();
});

// Routes
app.use('/healthz', routes.health)

// Don't log health checks
app.use(morgan(':method :url :status :response-time ms - :res[content-length] :req[x-goog-authenticated-user-email]'));

app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/posts', routes.post);
app.use('/', express.static(__dirname + '/swagger'));

// Error

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send(err)
})

// Start

connectDb().then(async () => {
  app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`),
  );
});
