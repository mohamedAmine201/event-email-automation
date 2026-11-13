import transporter from "../services/email.transporter";

async function verifyEmailConnection() {
  try {
    await transporter.verify();
    console.log("✅ Successfully connected to Gmail SMTP!");
  } catch (error) {
    console.error("❌ Gmail SMTP connection failed:", error);
  }
}

verifyEmailConnection();
