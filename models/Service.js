import { Schema, model } from 'mongoose';

const ServiceSchema = new Schema({
  provider: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
});

const Service = model('Service', ServiceSchema);

export default Service;
