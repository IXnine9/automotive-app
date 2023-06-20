import { Router } from 'express';
const router = Router();
import Order, { find, findById } from '../models/Order';

router.post('/', async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).send(order);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get('/', async (req, res) => {
  try {
    const orders = await find({ 'car.owner': req.body.owner });
    res.send(orders);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.put('/:id/bid', async (req, res) => {
  try {
    const order = await findById(req.params.id);
    if (!order) {
      return res.status(400).send('Order not found.');
    }

    order.bids.push({ provider: req.body.provider, price: req.body.price });
    await order.save();
    res.send(order);
  } catch (err) {
    res.status(400).send(err);
  }
});

export default router;
import Bid, { findById as _findById } from '../models/Bid';

router.put('/:id/bid', async (req, res) => {
  try {
    const order = await findById(req.params.id);
    if (!order) {
      return res.status(400).send('Order not found.');
    }

    const bid = new Bid({ provider: req.body.provider, order: order._id, price: req.body.price });
    await bid.save();

    order.bids.push(bid._id);
    await order.save();

    res.send(order);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.put('/:id/accept', async (req, res) => {
  try {
    const order = await findById(req.params.id);
    if (!order) {
      return res.status(400).send('Order not found.');
    }

    const bid = await _findById(req.body.bidId);
    if (!bid) {
      return res.status(400).send('Bid not found.');
    }

    order.acceptedBid = bid._id;
    await order.save();

    res.send(order);
  } catch (err) {
    res.status(400).send(err);
  }
});
import Bid from '../models/Bid';

router.put('/:id/bid', async (req, res) => {
  try {
    const order = await findById(req.params.id);
    if (!order) {
      return res.status(400).send('Order not found.');
    }

    const bid = new Bid({ provider: req.body.provider, order: order._id, price: req.body.price });
    await bid.save();

    order.bids.push(bid._id);
    await order.save();

    res.send(order);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.put('/:id/accept', async (req, res) => {
  try {
    const order = await findById(req.params.id);
    if (!order) {
      return res.status(400).send('Order not found.');
    }

    const bid = await _findById(req.body.bidId);
    if (!bid) {
      return res.status(400).send('Bid not found.');
    }

    order.acceptedBid = bid._id;
    await order.save();

    res.send(order);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.put('/:id/start', async (req, res) => {
    try {
      const order = await findById(req.params.id);
      if (!order) {
        return res.status(400).send('Order not found.');
      }
  
      order.startDate = new Date();
      order.status = 'in progress';
      await order.save();
  
      res.send(order);
    } catch (err) {
      res.status(400).send(err);
    }
  });
  
  router.put('/:id/complete', async (req, res) => {
    try {
      const order = await findById(req.params.id);
      if (!order) {
        return res.status(400).send('Order not found.');
      }
  
      order.endDate = new Date();
      order.status = 'completed';
      await order.save();
  
      res.send(order);
    } catch (err) {
      res.status(400).send(err);
    }
  });
  router.put('/:id/pay', async (req, res) => {
    try {
      const order = await findById(req.params.id);
      if (!order) {
        return res.status(400).send('Order not found.');
      }
  
      order.paymentStatus = 'paid';
      order.status = 'closed';
      await order.save();
  
      res.send(order);
    } catch (err) {
      res.status(400).send(err);
    }
  });
  router.put('/:id/pay', async (req, res) => {
    try {
      const order = await findById(req.params.id);
      if (!order) {
        return res.status(400).send('Order not found.');
      }
  
      order.paymentStatus = 'paid';
      order.status = 'closed';
      await order.save();
  
      const user = await user.findById(req.body.owner);
      if (!user) {
        return res.status(400).send('User not found.');
      }
  
      user.jobHistory.push(order._id);
      await user.save();
  
      res.send(order);
    } catch (err) {
      res.status(400).send(err);
    }
  });
  router.put('/:id/bid', async (req, res) => {
    try {
      const order = await findById(req.params.id);
      if (!order) {
        return res.status(400).send('Order not found.');
      }
  
      if (new Date() > order.auctionEnds) {
        return res.status(400).send('Auction has ended.');
      }
  
      order.bids.push({ provider: req.body.provider, price: req.body.price });
      await order.save();
  
      res.send(order);
    } catch (err) {
      res.status(400).send(err);
    }
  });
  
  router.put('/:id/accept', async (req, res) => {
    try {
      const order = await findById(req.params.id);
      if (!order) {
        return res.status(400).send('Order not found.');
      }
  
      const bid = order.bids.id(req.body.bidId);
      if (!bid) {
        return res.status(400).send('Bid not found.');
      }
  
      order.acceptedBid = bid._id;
      await order.save();
  
      res.send(order);
    } catch (err) {
      res.status(400).send(err);
    }
  });
  