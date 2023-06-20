import { find } from '../models/Review';

async function calculateRating(providerId) {
  const reviews = await find({ provider: providerId });
  const total = reviews.reduce((sum, review) => sum + review.rating, 0);
  return total / reviews.length;
}

export default calculateRating;
