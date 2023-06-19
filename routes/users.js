const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
const jwt = require('jsonwebtoken');

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).send('Invalid email or password.');
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
      return res.status(400).send('Invalid email or password.');
    }

    const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET_KEY);
    res.send(token);
  } catch (err) {
    res.status(400).send(err);
  }
});
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

router.post('/subscribe', async (req, res) => {
  try {
    const user = await User.findById(req.body.userId);
    if (!user) {
      return res.status(400).send('User not found.');
    }

    if (!user.stripeCustomerId) {
      const customer = await stripe.customers.create({
        email: user.email,
      });
      user.stripeCustomerId = customer.id;
      await user.save();
    }

    const subscription = await stripe.subscriptions.create({
      customer: user.stripeCustomerId,
      items: [{ price: '<your_price_id>' }],
      payment_behavior: 'default_incomplete',
      expand: ['latest_invoice.payment_intent'],
    });

    res.send(subscription);
  } catch (err) {
    res.status(400).send(err);
  }
});
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
  