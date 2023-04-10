const express = require('express');
const sendEmail = require('../controllers/sendMail');

const router = express.Router();

router.get('/', (req, res) => {
  res.send("<p>Yo, Sup dawg</p>")
});

router.post('/', (req, res) => {
  sendEmail(req.body);
  res.sendStatus(200);
});

module.exports = router;

// Test comment