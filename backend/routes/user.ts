// const express = require('express');
// const { body, validationResult } = require('express-validator');

// const router = express.Router();
// const users = []; // Simple array to store users

// // POST route to create a new user
// router.post('/user', [
//   body('firstName').isAlpha().isLength({ max: 100 }).withMessage('First name must be alphabetical and max 100 chars'),
//   body('lastName').isAlpha().isLength({ max: 100 }).withMessage('Last name must be alphabetical and max 100 chars'),
//   body('email').isEmail().withMessage('Please provide a valid email')
// ], (req, res) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }
//   users.push(req.body); // Add user to the array
//   res.status(201).json({ message: 'User created successfully', user: req.body });
// });

// // GET route to list users
// router.get('/users', (req, res) => {
//   res.json(users);
// });

// module.exports = router;
