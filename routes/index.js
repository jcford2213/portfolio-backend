const express = require('express');
const { check, validationResult } = require('express-validator');
const sendEmail = require('../controllers/sendMail');
const router = express.Router();

router.post('/', [
  check('name').notEmpty().withMessage('Name cannot be empty').trim().escape(),
  check('email').notEmpty().withMessage('Email cannot be empty')
    .isEmail().withMessage('Email is not a valid email address').normalizeEmail(),
  check('message').notEmpty().withMessage('Mesage cannot be empty').trim().escape()
],
async (req, res) => {
  console.log('Post Received');
  try {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      throw new Error();
    }
    await sendEmail(req.body);
    res.sendStatus(200) ;
  }
  catch(err) {
    console.log(err);
    res.sendStatus(400)
  }
});

module.exports = router;
