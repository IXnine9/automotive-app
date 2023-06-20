import { Schema, model } from 'mongoose';

const OrderSchema = new Schema({
    car: { type: Schema.Types.ObjectId, ref: 'Car', required: true },
    service: { type: Schema.Types.ObjectId, ref: 'Service', required: true },
    status: { type: String, default: 'open' },
    bids: [{ provider: { type: Schema.Types.ObjectId, ref: 'User' }, price: Number }],
    acceptedBid: { type: Schema.Types.ObjectId, ref: 'Bid' },
  });
  
  const Order = model('Order', OrderSchema);
  
  export default Order;
  
const BidSchema = new Schema({
    // ...
    acceptedBid: { type: Schema.Types.ObjectId, ref: 'Bid' },
  });
  
const ProjectManagementSchema = new Schema({
    // ...
    startDate: { type: Date },
    endDate: { type: Date },
    status: { type: String, default: 'open', enum: ['open', 'in progress', 'completed', 'closed'] },
    // ...
  });

const OrderPaymentSchema = new Schema({
    // ...
    paymentStatus: { type: String, default: 'unpaid', enum: ['unpaid', 'paid'] },
    // ...
  });

const AuctionSchema = new Schema({
    // ...
    auctionEnds: { type: Date },
    bids: [{ provider: { type: Schema.Types.ObjectId, ref: 'User' }, price: Number }],
    // ...
  });
  