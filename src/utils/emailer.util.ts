import { nodemailer, Transporter, SendMailOptions } from "nodemailer";

export class SendEmail {
  private transporter: Transporter;
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: "gmail",
      secure: false,
      auth: {
        user: "herzliabarangan@gmail.com",
        pass: process.env.GMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  }

  async sendEmail(
    name: string,
    email: string,
    link: string,
    subject: string
  ): Promise<void> {
    try {
      const body = `Hello ${name}. Follow the instructions to create a new password.
        Click <a href=${link} target="_blank">here</a> Thank you!`;

      const mailOptions: SendMailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: subject,
        text: body,
        html: body,
      };

      await this.transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          return console.log(error);
        }
        console.log("Message sent: " + info.response);
        return info.response;
      });
    } catch (error) {
      console.log(error);
    }
  }
}
