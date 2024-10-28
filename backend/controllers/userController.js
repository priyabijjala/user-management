const User = require('../models/userModel');

// Create a new user
exports.createUser = async (req, res) => {
    try {
        const { firstName, lastName, email } = req.body;
        const user = new User({ firstName, lastName, email });
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all users
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
