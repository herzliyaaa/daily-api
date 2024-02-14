import { nodemailer } from "nodemailer";

export class SendEmail {
  constructor() {}

  async sendEmail(userData) {
    const { name, email, link } = userData;

    const body = `Hello ${name}. Follow the instructions to create a new password.
        Click <a href=${link} target="_blank">here</a> Thank you!`;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "RESET PASSWORD",
      text: body,
      html: body,
    };

    let transporter = nodemailer.createTransport({
      host: "",
      port: "",
      secure: false,
      auth: {
        user: "",
        pass: "",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    let info = await transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return console.log(error);
      }
      console.log("Message sent: " + info.response);
      return info.response;
    });
  }
}
