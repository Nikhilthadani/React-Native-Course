import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  service: "gmail",
  secure: true,
  auth: {
    user:  process.env.GMAIL_MAIL,
    pass:  process.env.GMAIL_PASSWORD,
  },
});

export const sendEmail = (emailId, otp) => {
  return new Promise((resolve, reject) => {
    transporter.sendMail(
      {
        from:  process.env.GMAIL_MAIL,
        to: emailId,
        subject: "Your OTP To Login",
        text: `Your OTP is ${otp}.`,
      },
      (err, info) => {
        if (err) {
          reject(err);
        } else {
          resolve("OK");
        }
      }
    );
  });
};
