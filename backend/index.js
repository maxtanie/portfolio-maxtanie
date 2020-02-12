process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();
const path = require("path");

// Serve static files from the React app

app.use(express.static(path.join(__dirname, "../client/build/")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"), err => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.post("/api/form", (req, res) => {
  const { object, name, email, message } = req.body;

  nodemailer.createTestAccount((err, account) => {
    if ((object.length, name.length, email.length, message.length === 0)) {
      return console.log("impossible");
    } else {
      const htmlEmail = `
      <h3>Contact Details</h3>
      <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
      </ul>
      <h3>Messages</h3>
      <p>${req.body.message}</p>
    `;

      let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
          user: "ocie.mante21@ethereal.email",
          pass: "JWYP8evgjY4DmKzww4"
        }
      });

      let mailOptions = {
        from: "test@testaccount.com",
        to: "ocie.mante21@ethereal.email",
        replyTo: "test@testaccount.com",
        subject: `${object}`,
        text: req.body.message,
        html: htmlEmail
      };

      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          return console.log(err);
        } else {
          console.log("Message sent: %s", info.message);
          console.log("Message URL: %s", nodemailer.getTestMessageUrl(info));
        }
      });
    }
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

//https://tylermcginnis.com/react-router-cannot-get-url-refresh/
