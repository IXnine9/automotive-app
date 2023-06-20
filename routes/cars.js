import { Router } from 'express';
const router = Router();
import Car, { find } from '../models/Car';

router.post('/', async (req, res) => {
  try {
    const car = new Car(req.body);
    await car.save();
    res.status(201).send(car);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get('/', async (req, res) => {
  try {
    const cars = await find({ owner: req.body.owner });
    res.send(cars);
  } catch (err) {
    res.status(400).send(err);
  }
});

export default router;
