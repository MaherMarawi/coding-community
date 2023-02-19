
const nodemailer = require('nodemailer');
const NewEmail = (req, res) => {
    const userEmail = process.env.User
    const passwordEmail = process.env.Password
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: `${userEmail}`,
          pass: `${passwordEmail}`
        }
      });
      
      let mailOptions = {
        from: req.body.email,
        to: 'mahermarawi92@gmail.com',
        to: 'mohammad.bushy@gmail.com',
        subject: 'Portfolio Message',
        html: `<h3>This is a message from Community Matrix Master</h3><p>${req.body.message}</p>
        <h3>${req.body.name}</h3>`
        
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          res.send(error);
        } else {
          res.send('Message has been sent: ' + info.response)
        }
      });

}
module.exports = { NewEmail }