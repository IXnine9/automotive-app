newFunction();
function newFunction() {
  const mongoose = require('mongoose');

  const CarSchema = new mongoose.Schema({
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    fuelType: { type: String, required: true },
    mileage: { type: Number, required: true },
  });

  const Car = mongoose.model('Car', CarSchema);

  module.exports = Car;
}

