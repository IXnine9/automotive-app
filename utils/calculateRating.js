const Review = require('../models/Review');

async function calculateRating(providerId) {
  const reviews = await Review.find({ provider: providerId });
  const total = reviews.reduce((sum, review) => sum + review.rating, 0);
  return total / reviews.length;
}

module.exports = calculateRating;
