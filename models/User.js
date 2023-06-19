const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  // ...
  stripeCustomerId: {
    type: String,
    unique: true,
  },
  // ...
});

// ...

const User = mongoose.model('User', UserSchema);

router.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  // ...
});

module.exports = router;

const PerformanceReviewSchema = new mongoose.Schema({
  // ...
});

const JobHistoryRatingSchema = new mongoose.Schema({
  // ...
});

const JobHistoryRating = mongoose.model('JobHistoryRating', JobHistoryRatingSchema);
