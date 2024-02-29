import express from "express";
import { generate } from "otp-generator";
import { generateToken, isFieldEmpty, verifyToken } from "./utils/helpers.js";
import { sendEmail } from "./mailer/index.js";

const appRouter = express.Router();
const UsersMap = new Map();

appRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  console.log(email, name);
  if (isFieldEmpty(name) || isFieldEmpty(email) || isFieldEmpty(password)) {
    return res.status(401).json({ message: "Invalid Data Received" });
  }
  try {
    const user = addNewUser(name, email, password);
    await sendEmail(email, user.otp);
    if (!user) {
      return res.status(422).json({ message: "Unable to create user" });
    }
    return res.status(200).json({ user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error occurred" });
  }
});

appRouter.post("/verify", (req, res) => {
  const { email, otp } = req.body;

  if (isFieldEmpty(email) || isFieldEmpty(otp)) {
    return res.status(401).json({ message: "Invalid Data Received" });
  }

  try {
    const user = UsersMap.get(email);
    if (!user) {
      return res.status(403).json({ message: "User not found" });
    }
    if (user.otp == otp) {
      user.isVerified = true;
      const token = generateToken(email);
      return res.status(200).json({ message: "OTP Verified", user, token });
    } else {
      return res.status(401).json({ message: "Invalid OTP" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error occurred" });
  }
});

appRouter.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (isFieldEmpty(email) || isFieldEmpty(password)) {
    return res.status(401).json({ message: "Invalid Data Received" });
  }
  try {
    const user = UsersMap.get(email);
    if (!user) {
      return res.status(403).json({ message: "User not found" });
    }

    if (user.isVerified && user.password == password) {
      // success
      const token = generateToken(email);
      return res.status(200).json({ message: "User Loggged In", user, token });
    } else {
      return res.status(401).json({ message: "Invalid Email/Password" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error occurred" });
  }
});

appRouter.post("/validate", async (req, res) => {
  const { token } = req.body;
  if (isFieldEmpty(token)) {
    return res.status(401).json({ message: "Invalid token" });
  }
  try {
    const tokenData = await verifyToken(token);
    console.log(tokenData);
    const user = UsersMap.get(tokenData.email);
    if (user && user.isVerified) {
      return res.status(200).json({ user });
    } else {
      return res.status(401).json({ message: "User Not Found In Database" });
    }
  } catch (error) {
    console.log(error);
  }
});
const addNewUser = (name, email, password) => {
  const id = crypto.randomUUID();
  const otp = generate(4, {
    digits: true,
    lowerCaseAlphabets: false,
    specialChars: false,
    upperCaseAlphabets: false,
  });
  const user = { id, name, email, password, otp, isVerified: false };
  const addedUser = UsersMap.set(email, user);
  return addedUser.get(email);
};
export default appRouter;
