const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String },
});

const Review = mongoose.model('Review', ReviewSchema);

module.exports = Review;
