import { Schema, model } from 'mongoose';

const ChatSchema = new Schema({
  order: { type: Schema.Types.ObjectId, ref: 'Order', required: true },
  messages: [{ sender: { type: Schema.Types.ObjectId, ref: 'User' }, text: String, timestamp: Date }],
});

const Chat = model('Chat', ChatSchema);

export default Chat;
