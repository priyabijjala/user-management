// // routes/users.js
// const express = require('express');
// const User = require('../models/userModel');
// const validateUser = require('../validations/userValidation');
// const router = express.Router();

// // GET /users - Fetch all users
// router.get('/', async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (err) {
//     res.status(500).send('Server error');
//   }
// });

// // POST /users - Add a new user
// router.post('/', async (req, res) => {
//   const { error } = validateUser(req.body);
//   if (error) return res.status(400).json({ msg: error.details[0].message });

//   const { firstName, lastName, email } = req.body;
  
//   try {
//     const newUser = new User({ firstName, lastName, email });
//     await newUser.save();
//     res.status(201).json(newUser);
//   } catch (err) {
//     res.status(500).send('Server error');
//   }
// });

// module.exports = router;
const express = require('express');
const { createUser, getUsers } = require('../controllers/userController');
const router = express.Router();

// POST route to create a user
router.post('/', createUser);

// GET route to fetch all users
router.get('/', getUsers);

module.exports = router;
