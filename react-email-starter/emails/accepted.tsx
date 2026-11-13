import { Text } from "@react-email/components";
import EmailLayout, { emailStyles } from "./components/EmailLayout";

interface AcceptedEmailProps {
  firstName: string;
  lastName: string;
}

export const AcceptedEmail = ({ firstName, lastName }: AcceptedEmailProps) => (
  <EmailLayout
    firstName={firstName}
    lastName={lastName}
    previewText="Congratulations, your application has been accepted!"
    accentColor="#16a34a"
    statusLabel="Application accepted"
  >
    <Text style={emailStyles.paragraph}>
      Congratulations! We're delighted to let you know that your application has
      been <strong>accepted</strong>.
    </Text>
    <Text style={emailStyles.paragraph}>
      We're really excited to have you take part in the event and can't wait to
      see what you'll bring to it.
    </Text>
    <Text style={emailStyles.paragraph}>
      You'll soon be added to the event's Discord group. That's where we'll
      share important updates and all event-related information, so keep an eye
      on it.
    </Text>
    <Text style={emailStyles.paragraph}>Welcome aboard, and see you soon!</Text>
  </EmailLayout>
);

AcceptedEmail.PreviewProps = {
  firstName: "Amina",
  lastName: "Benali",
} satisfies AcceptedEmailProps;

export default AcceptedEmail;
