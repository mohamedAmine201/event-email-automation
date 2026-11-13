import {
  Body,
  Column,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import type { ReactNode } from "react";

// Central event information: edit here once, applies to every template.
const EVENT_NAME = "Business Game";
const EVENT_LOGO_URL = "https://placehold.co/96x96/png?text=Logo"; // TODO: replace with the real, publicly hosted PNG/JPG logo

interface EmailLayoutProps {
  firstName: string;
  lastName: string;
  previewText: string;
  accentColor: string;
  statusLabel: string;
  children: ReactNode;
}

export const EmailLayout = ({
  firstName,
  lastName,
  previewText,
  accentColor,
  statusLabel,
  children,
}: EmailLayoutProps) => (
  <Html lang="en">
    <Head />
    <Preview>{previewText}</Preview>
    <Body style={main}>
      <Container
        style={{ ...container, borderTop: `4px solid ${accentColor}` }}
      >
        {/* Branding (unchanged) */}
        <Section>
          <Row>
            <Column style={logoColumn}>
              <Img
                src={EVENT_LOGO_URL}
                width="48"
                height="48"
                alt={`${EVENT_NAME} logo`}
                style={logo}
              />
            </Column>
            <Column style={nameColumn}>
              <Text style={eventName}>{EVENT_NAME}</Text>
            </Column>
          </Row>
        </Section>

        <Hr style={hr} />

        {/* Status badge */}
        <Text
          style={{ ...badge, color: accentColor, borderColor: accentColor }}
        >
          {statusLabel}
        </Text>

        {/* Greeting, children, footer (unchanged) */}
        <Text style={greeting}>
          {`Hello ${firstName} ${lastName}, I hope you're doing well.`}
        </Text>
        {children}
        <Hr style={hr} />
        <Text style={footer}>The {EVENT_NAME} Team</Text>
      </Container>
    </Body>
  </Html>
);

// Add alongside the other style objects
const badge = {
  display: "inline-block",
  fontSize: "12px",
  fontWeight: 700,
  letterSpacing: "0.5px",
  textTransform: "uppercase" as const,
  border: "1px solid",
  borderRadius: "999px",
  padding: "4px 12px",
  margin: "0 0 16px",
};

export default EmailLayout;

export const emailStyles = {
  paragraph: {
    fontSize: "16px",
    lineHeight: "26px",
    color: "#374151",
    margin: "0 0 16px",
  },
};

const main = {
  backgroundColor: "#f4f4f5",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  margin: 0,
  padding: "24px 0",
};

const container = {
  backgroundColor: "#ffffff",
  maxWidth: "560px",
  width: "100%",
  margin: "0 auto",
  padding: "32px 24px",
  borderRadius: "8px",
};

const logoColumn = { width: "56px", verticalAlign: "middle" as const };
const nameColumn = { verticalAlign: "middle" as const };
const logo = { display: "block", borderRadius: "8px" };

const eventName = {
  fontSize: "20px",
  fontWeight: 700,
  color: "#111827",
  margin: 0,
};

const hr = { borderColor: "#e5e7eb", margin: "24px 0" };

const greeting = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#111827",
  margin: "0 0 16px",
};

const footer = {
  fontSize: "14px",
  color: "#6b7280",
  margin: 0,
};
