const express = require('express');
const router = express.Router();
const Car = require('../models/Car');

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
    const cars = await Car.find({ owner: req.body.owner });
    res.send(cars);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
