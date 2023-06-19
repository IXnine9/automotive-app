const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['carOwner', 'serviceProvider'],
    required: true,
  },
  subscriptionStatus: {
    type: Boolean,
    default: false,
  },
});

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
router.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
    const sig = req.headers['stripe-signature'];
    let event;
  
    try {
      event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
    } catch (err) {
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }
  
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      const user = await User.findOne({ stripeCustomerId: session.customer });
      user.subscriptionStatus = true;
      await user.save();
    }
  
    res.json({ received: true });
  });

  const JobHistoryRatingSchema = new mongoose.Schema({
    // ...
    jobHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
    // ...
  });
  
module.exports = router;
