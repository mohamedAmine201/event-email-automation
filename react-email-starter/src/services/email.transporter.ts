import "dotenv/config";
import nodemailer from "nodemailer";

const email = process.env.GOOGLE_EMAIL;
const password = process.env.GOOGLE_APP_PASSWORD;

if (!email || !password) {
  throw new Error("Missing Google email credentials in .env");
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: password,
  },
});

export default transporter;
