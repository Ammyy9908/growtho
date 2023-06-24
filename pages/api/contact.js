export default function handler(req, res) {
  let nodemailer = require("nodemailer");
  const { name, email, message, company, subject } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: subject,
    text: `Hi GrowthO someone with ${name} is sented one message from ${company} and their message is ${message} You can connect on ${email}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(400).json({ message: `Error in sending Message 😓` });
    } else {
      res
        .status(200)
        .json({ message: `Your message sented successfully to GrowthO! 🥳 ` });
    }
  });
}
