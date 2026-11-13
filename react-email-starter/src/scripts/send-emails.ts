import { participants } from "../../data/participants";
import { sendParticipantEmail } from "../services/email.service";

async function main() {
  let successful = 0;
  let failed = 0;

  console.log(`Starting campaign for ${participants.length} participants...`);

  for (const participant of participants) {
    try {
      const result = await sendParticipantEmail(participant);

      successful++;

      console.log(
        `✅ ${participant.firstName} ${participant.lastName} — ${
          participant.accepted ? "Accepted" : "Rejected"
        }`,
      );

      console.log(`Message ID: ${result.messageId}`);

      await new Promise((resolve) => setTimeout(resolve, 1500));
    } catch (error) {
      failed++;

      console.error(`❌ Failed to send email to ${participant.email}:`, error);
    }
  }

  console.log("\n========== CAMPAIGN SUMMARY ==========");
  console.log(`Total participants: ${participants.length}`);
  console.log(`Successfully sent: ${successful}`);
  console.log(`Failed: ${failed}`);
}

main();
