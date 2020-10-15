require('dotenv').config();
const express = require('express');
const router = express.Router();
console.log(process.env);
// Load User model
const User = require('../../models/User');
const db = require('../../models');

// GET api/users/test (Public)
router.get('/test', (req, res) => {
  res.json({ msg: 'User endpoint OK'});
});

// POST api/users/register (Public)
router.post('/register', (req, res) => {

  // Find user by email
  db.User.findOne({ name: req.body.name })
  .then(user => {
    // if email already exists, send a 400 response
    if (user) {
      return res.status(400).json({ msg: 'User Exists'});
    } else {
      // Create a new user
      const newUser = new User({
        name: req.body.name,
      });

      // Salt and hash the password, then save the user

    }
  })
});

// POST api/users/login (Public)
router.post('/login', (req, res) => {
  const name = req.body.name;


  // Find a user via email
  db.User.findOne({ name })
  .then(user => {
    if (!user) {
      res.status(400).json({ msg: 'User not found'});
    } else {
      return res.status(400).json({ password: 'Name is incorrect' });
    }
  });
});

// GET api/users/current (Private)
// router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
//   res.json({
//     id: req.user.id,
//     name: req.user.name,
//     email: req.user.email
//   });
// });

module.exports = router;
