import { render } from "@react-email/render";

import AcceptedEmail from "../../emails/accepted";
import RejectedEmail from "../../emails/rejected";

import transporter from "./email.transporter";
import type { Participant } from "../../types/participants";

export async function sendParticipantEmail(participant: Participant) {
  const { firstName, lastName, email, accepted } = participant;

  const EmailTemplate = accepted ? AcceptedEmail : RejectedEmail;

  const html = await render(EmailTemplate({ firstName, lastName }));

  const result = await transporter.sendMail({
    from: {
      name: "Event Team",
      address: process.env.GOOGLE_EMAIL!,
    },
    to: email,
    subject: accepted
      ? "Your application has been accepted!"
      : "Your application has been rejected!",
    html,
  });

  return result;
}
