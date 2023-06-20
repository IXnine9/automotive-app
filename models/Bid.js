import { Schema, model } from 'mongoose';

const BidSchema = new Schema({
  provider: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  order: { type: Schema.Types.ObjectId, ref: 'Order', required: true },
  price: { type: Number, required: true },
});

const Bid = model('Bid', BidSchema);

export default Bid;
