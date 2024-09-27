const express = require('express');
const router = express.Router();
import message from '../models/message.js'

// POST /api/messages - create a new anonymous message
router.post('/', async(req ,res) => {
    try {
        const newMessage = new message({
            content: req.body.content
        });
        await newMessage.save();
        res.status(201).json(newMessage);
    } catch(err) {
        res.status(400).json({error: 'failed to post message'});
    }
});

// GET /api/messages -fetch all anonymous messages
router.get('/', async (req, res) =>{
    try {
        const messages = await message.find().sort({createdAt: -1});  // this sorts by newest first
        res.status(200).json(messages)
    } catch(err) {
        res.status(500).json({error: 'Failed to fetch messages'});
    }
})

module.exports = router;