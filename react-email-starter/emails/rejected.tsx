import { Text } from "@react-email/components";
import EmailLayout, { emailStyles } from "./components/EmailLayout";

interface RejectedEmailProps {
  firstName: string;
  lastName: string;
}

export const RejectedEmail = ({ firstName, lastName }: RejectedEmailProps) => (
  <EmailLayout
    firstName={firstName}
    lastName={lastName}
    previewText="An update on your application"
    accentColor="#dc2626"
    statusLabel="Application rejected"
  >
    <Text style={emailStyles.paragraph}>
      Thank you for your interest in our event and for taking the time to apply.
    </Text>
    <Text style={emailStyles.paragraph}>
      After careful consideration, we're sorry to let you know that we're unable
      to accept your application this time. We received many strong
      applications, and this wasn't an easy decision.
    </Text>
    <Text style={emailStyles.paragraph}>
      We truly appreciate the time and effort you put into your application, and
      we'd be glad to see you apply to our future events.
    </Text>
    <Text style={emailStyles.paragraph}>
      We wish you all the best and hope to meet you at a future edition.
    </Text>
  </EmailLayout>
);

RejectedEmail.PreviewProps = {
  firstName: "Yacine",
  lastName: "Haddad",
} satisfies RejectedEmailProps;

export default RejectedEmail;
