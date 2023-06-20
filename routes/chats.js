import { Router } from 'express';
const router = Router();
import Chat, { findById } from '../models/Chat';

router.post('/', async (req, res) => {
  try {
    const chat = new Chat(req.body);
    await chat.save();
    res.status(201).send(chat);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const chat = await findById(req.params.id);
    if (!chat) {
      return res.status(400).send('Chat not found.');
    }
    res.send(chat);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.put('/:id/message', async (req, res) => {
  try {
    const chat = await findById(req.params.id);
    if (!chat) {
      return res.status(400).send('Chat not found.');
    }

    chat.messages.push({ sender: req.body.sender, text: req.body.text, timestamp: new Date() });
    await chat.save();

    res.send(chat);
  } catch (err) {
    res.status(400).send(err);
  }
});

export default router;
