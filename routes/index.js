const express = require('express');
const { check, validationResult } = require('express-validator');
const sendEmail = require('../controllers/sendMail');
const router = express.Router();


router.post('/', [
  check('name').notEmpty().trim().escape(),
  check('email').notEmpty().isEmail().normalizeEmail(),
  check('subject').notEmpty().trim().escape(),
  check('message').notEmpty().trim().escape()
],
async (req, res) => {
  console.log(`Post received from ${req.hostname}`);
  try {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      throw 'Server could not validate message';
    }
    await sendEmail(req.body);
    res.status(200).send('Message Sent!') ;
  }
  catch(err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = router;
