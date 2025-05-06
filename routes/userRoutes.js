const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/getuser', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

router.post('/newuser', async (req, res) => {
    const { name, email } = req.body;
    try {
        const newUser = new User({ name, email });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(400).json({ error: 'Failed to create user' });
    }
});

module.exports = router;
