import { Schema, model } from 'mongoose';

const ReviewSchema = new Schema({
  order: { type: Schema.Types.ObjectId, ref: 'Order', required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String },
});

const Review = model('Review', ReviewSchema);

export default Review;

