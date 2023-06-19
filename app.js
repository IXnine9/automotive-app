const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));
const cors = require('cors');
  app.use(cors());
  app.use(express.json());
  const userRoutes = require('./routes/users');

  app.use(express.json());
  app.use('/api/users', userRoutes);
  const carRoutes = require('./routes/cars');

app.use('/api/cars', carRoutes);
const serviceRoutes = require('./routes/services');

app.use('/api/services', serviceRoutes);
const orderRoutes = require('./routes/orders');

app.use('/api/orders', orderRoutes);
const chatRoutes = require('./routes/chats');

app.use('/api/chats', chatRoutes);
const reviewRoutes = require('./routes/reviews');

app.use('/api/reviews', reviewRoutes);
app.use(express.static('public'));
