import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  service: "gmail",
  secure: true,
  auth: {
    user: "nikhilthadani112256@gmail.com",
    pass: "rpkt warw huxm hymd",
  },
});

export const sendEmail = (emailId, otp) => {
  return new Promise((resolve, reject) => {
    transporter.sendMail(
      {
        from: "nikhilthadani112256@gmail.com",
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
