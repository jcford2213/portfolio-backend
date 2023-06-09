const nodemailer = require('nodemailer');

function sendEmail (message = { name: '', email: '', subject: '', message: ''}) {
  return new Promise(async (resolve, reject) => {
    try{
      const transporter = nodemailer.createTransport({
        service: "Outlook365",
        auth: {
          user: process.env.USER,
          pass: process.env.PASS
        }
      });

      let emailToMe = {
        from: {
          name: `${message.email}`,
          address: 'jackson-crantford@outlook.com'
        },
        to: 'jackson-crantford@outlook.com',
        subject: `${message.subject}`,
        text: `${message.message}`,
        html: `<p>${message.message}</p>`
      } 

      await transporter.sendMail(emailToMe);
      console.log(`Email sent: From ${message.name} at ${message.email} subject ${message.subject}`);
      resolve();
    }
    catch(err) {
      console.log(err.message);
      reject('Server error. Message failed to send.');
    }
  })
}

module.exports = sendEmail;
