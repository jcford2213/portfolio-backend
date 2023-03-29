const express = require('express');
const sendEmail = require('../controllers/sendMail');

const router = express.Router();

router.post('/', async (req, res) => {
  await sendEmail(req.body)
  console.log(req.body)
  res.sendStatus(200);
});

module.exports = router;