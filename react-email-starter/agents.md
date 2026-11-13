# Project Instructions

## Project Overview

This project is an event email automation tool built with TypeScript, React Email, and Nodemailer.

Its purpose is to send personalized acceptance and rejection emails to event participants through Gmail SMTP.

## Technology Stack

- TypeScript
- React
- React Email
- Nodemailer
- Node.js
- Gmail SMTP
- dotenv
- tsx

## Project Structure

- `data/`: Participant data and TypeScript interfaces.
- `emails/`: React Email templates.
- `emails/components/`: Shared email components and layouts.
- `src/services/`: Email rendering, SMTP configuration, and sending logic.
- `src/scripts/`: Executable scripts for testing and sending emails.
- `out/`: Generated HTML email templates.

## Architecture and Conventions

### Participant Data

The `Participant` interface is defined in `data/participants.ts`.

Each participant must contain:

- `firstName`: Participant's first name.
- `lastName`: Participant's last name.
- `email`: Recipient's email address.
- `accepted`: Boolean indicating the application result.

Do not introduce unnecessary data structures or change this interface without a clear reason.

### Email Templates

- Use React Email components to create email templates.
- Keep acceptance and rejection templates separate.
- Reuse `EmailLayout` for shared layout and styling.
- Templates must accept dynamic `firstName` and `lastName` properties.
- Preserve compatibility with email clients.

### Email Service

- Keep email rendering and sending logic inside `src/services/email.service.ts`.
- Use Nodemailer for SMTP delivery.
- Use the transporter defined in `src/services/email.transporter.ts`.
- Select the appropriate template using the participant's `accepted` property.
- Never hardcode credentials.

### Sending Logic

- The campaign script is located at `src/scripts/send-emails.ts`.
- Send individual emails rather than using CC or BCC.
- Process participants sequentially.
- Preserve the 1,500 ms delay between successful sends.
- Track successful and failed deliveries.
- Avoid introducing uncontrolled concurrent sending.

## Environment Variables

The application requires:

- `GOOGLE_EMAIL`
- `GOOGLE_APP_PASSWORD`

Load environment variables using dotenv.

Never expose, log, hardcode, or commit credentials.

## Development Commands

Install dependencies:

```bash
npm install
```

Start the React Email development server:

```bash
npm run dev
```

Build email templates:

```bash
npm run build
```

Export email templates:

```bash
npm run export
```

Verify Gmail SMTP:

```bash
npx tsx src/scripts/verify-email.ts
```

Send participant emails:

```bash
npx tsx src/scripts/send-emails.ts
```

## Important Rules

1. Keep the project simple and avoid unnecessary abstractions.
2. Preserve TypeScript type safety.
3. Keep email templates reusable and maintainable.
4. Never commit `.env` or actual participant data.
5. Never send real emails automatically when modifying or testing code.
6. Do not change the SMTP configuration without a clear reason.
7. Always explain significant changes before implementing them.
8. Do not introduce additional dependencies unless necessary.
