const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    car: { type: mongoose.Schema.Types.ObjectId, ref: 'Car', required: true },
    service: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
    status: { type: String, default: 'open' },
    bids: [{ provider: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, price: Number }],
    acceptedBid: { type: mongoose.Schema.Types.ObjectId, ref: 'Bid' },
  });
  
  const Order = mongoose.model('Order', OrderSchema);
  
  module.exports = Order;
  
const BidSchema = new mongoose.Schema({
    // ...
    acceptedBid: { type: mongoose.Schema.Types.ObjectId, ref: 'Bid' },
  });
  
const ProjectManagementSchema = new mongoose.Schema({
    // ...
    startDate: { type: Date },
    endDate: { type: Date },
    status: { type: String, default: 'open', enum: ['open', 'in progress', 'completed', 'closed'] },
    // ...
  });

const OrderPaymentSchema = new mongoose.Schema({
    // ...
    paymentStatus: { type: String, default: 'unpaid', enum: ['unpaid', 'paid'] },
    // ...
  });

const AuctionSchema = new mongoose.Schema({
    // ...
    auctionEnds: { type: Date },
    bids: [{ provider: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, price: Number }],
    // ...
  });
  