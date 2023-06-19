const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  messages: [{ sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, text: String, timestamp: Date }],
});

const Chat = mongoose.model('Chat', ChatSchema);

module.exports = Chat;
