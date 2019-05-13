import { Router } from 'express';
import mongoose from 'mongoose';

const router = Router();

router.get('/', async (req, res) => {
  return res.sendStatus(200)
});

router.get('/readiness', async (req, res) => {
  if (mongoose.connection.readyState === 1) {
    return res.sendStatus(200)
  } else {
    return res.status(500).send("Database not ready")
  }
});

export default router;