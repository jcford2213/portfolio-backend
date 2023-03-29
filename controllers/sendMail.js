const nodemailer = require('nodemailer');

function sendEmail (message = { name: '', email: '', message: ''}) {
  const username = process.env.USER;
  const password = process.env.PASS;
  const emailHTML = `<div>
  <h1>This message is from ${message.name} at ${message.email}</h1>
  <p>${message.message}</p>
  </div>`
  const transporter = nodemailer.createTransport({
    service: "Outlook365",
    auth: {
      user: username,
      pass: password
    }
  });
  let options = {
    from: '"Jackson Crantford" <jackson-crantford@outlook.com>',
    to: 'jackson-crantford@outlook.com',
    subject: `Message from ${message.name}`,
    html: emailHTML
  } 
  transporter.sendMail(options, (err, info) => {
    if(err) {
      console.log('Error' + err);
      return;
    }
    console.log('Email Sent' + info);
  })
}

module.exports = sendEmail;
