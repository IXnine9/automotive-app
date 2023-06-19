const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  provider: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
});

const Service = mongoose.model('Service', ServiceSchema);

module.exports = Service;
