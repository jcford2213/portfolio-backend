const nodemailer = require('nodemailer');

function sendEmail (message = { name: '', email: '', message: ''}) {
  return new Promise((resolve, reject) => {
    try{
      const transporter = nodemailer.createTransport({
        service: "Outlook365",
        auth: {
          user: process.env.USER,
          pass: process.env.PASS
        }
      });

      const messageToMe = `<div>
      <h2>An email from the website</h2>
      <h3>Name: ${message.name}<br>Email: ${message.email}</h3>
      <h4>Message:</h4>
      <p>${message.message}</p>
      </div>`

      let emailToMe = {
        from: 'jackson-crantford@outlook.com',
        to: 'jackson-crantford@outlook.com',
        subject: `Message from ${message.name}`,
        html: messageToMe
      } 

      transporter.sendMail(emailToMe, (err, info) => {
        if(err) {
          throw new Error(err.message);
        }
        console.log(`Email sent - ${JSON.stringify(info.envelope)}`);
      })
      resolve();
    }
    catch(err) {
      reject(err.message);
    }
  })
}

module.exports = sendEmail;
