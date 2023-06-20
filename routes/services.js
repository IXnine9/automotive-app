import { Router } from 'express';
const router = Router();
import Service, { find } from '../models/Service';

router.post('/', async (req, res) => {
  try {
    const service = new Service(req.body);
    await service.save();
    res.status(201).send(service);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get('/', async (req, res) => {
  try {
    const services = await find({ provider: req.body.provider });
    res.send(services);
  } catch (err) {
    res.status(400).send(err);
  }
});

export default router;
