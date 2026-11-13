import { sendParticipantEmail } from "../services/email.service";
import { participants } from "../../data/participants";

async function main() {
  try {
    const result = await sendParticipantEmail({
      ...participants[0],
      email: process.env.GOOGLE_EMAIL!,
    });

    console.log("Email sent successfully!");
    console.log("Message ID:", result.messageId);
  } catch (error) {
    console.error("Failed to send email:", error);
  }
}

main();
