import { Router } from 'express';
const router = Router();
import Review, { findById } from '../models/Review';

router.post('/', async (req, res) => {
  try {
    const review = new Review(req.body);
    await review.save();
    res.status(201).send(review);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const review = await findById(req.params.id);
    if (!review) {
      return res.status(400).send('Review not found.');
    }
    res.send(review);
  } catch (err) {
    res.status(400).send(err);
  }
});

export default router;
import { findById as _findById } from '../models/User';

router.post('/', async (req, res) => {
  try {
    const review = new Review(req.body);
    await review.save();

    const user = await _findById(req.body.provider);
    if (!user) {
      return res.status(400).send('User not found.');
    }

    user.ratings.push(review._id);
    await user.save();

    res.status(201).send(review);
  } catch (err) {
    res.status(400).send(err);
  }
});
