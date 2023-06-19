const mongoose = require('mongoose');

const BidSchema = new mongoose.Schema({
  provider: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  price: { type: Number, required: true },
});

const Bid = mongoose.model('Bid', BidSchema);

module.exports = Bid;
