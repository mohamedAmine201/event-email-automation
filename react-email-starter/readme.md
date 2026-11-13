# Event Email Automation

A TypeScript-based email automation tool designed to send personalized event acceptance and rejection emails using React Email and Nodemailer.

The application generates customized HTML emails for individual participants based on their application status and delivers them through Gmail SMTP.

## ✨ Features

- **Personalized Emails:** Each participant receives an email containing their first and last name.
- **Dynamic Templates:** Automatically selects the acceptance or rejection template based on the participant's status.
- **Reusable Components:** Shared email layout and components built with React Email.
- **Gmail SMTP Integration:** Sends emails using Nodemailer and Google App Password authentication.
- **Controlled Sending Rate:** Introduces a 1,500 ms delay between successful email deliveries.
- **Campaign Summary:** Tracks successful and failed email deliveries.

## 🛠️ Tech Stack

- React Email
- React
- TypeScript
- Node.js
- Nodemailer
- Gmail SMTP
- dotenv
- tsx

## 📁 Project Structure

```text
.
├── data/
│   └── participants.ts
├── emails/
│   ├── components/
│   │   └── EmailLayout.tsx
│   ├── accepted.tsx
│   └── rejected.tsx
├── src/
│   ├── services/
│   │   ├── email.service.ts
│   │   └── email.transporter.ts
│   └── scripts/
│       ├── verify-email.ts
│       ├── test-email.ts
│       └── send-emails.ts
├── .env.example
├── .gitignore
├── package.json
└── tsconfig.json
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/event-email-automation.git
cd event-email-automation
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```env
GOOGLE_EMAIL=your-email@gmail.com
GOOGLE_APP_PASSWORD=your-google-app-password
```

You need a Google App Password to authenticate with Gmail SMTP.

Never commit your `.env` file or expose your credentials.

### 4. Configure participants

Edit `data/participants.ts`:

```ts
export interface Participant {
  firstName: string;
  lastName: string;
  email: string;
  accepted: boolean;
}

export const participants: Participant[] = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    accepted: true,
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    email: "jane@example.com",
    accepted: false,
  },
];
```

Each participant receives an individualized email based on their `accepted` property.

### 5. Verify Gmail SMTP connection

```bash
npx tsx src/scripts/verify-email.ts
```

### 6. Send emails

```bash
npx tsx src/scripts/send-emails.ts
```

The script processes participants sequentially and waits 1,500 ms after each successful delivery.

**Important:** The sending script delivers emails to the actual addresses specified in `participants.ts`. Review your participant list before executing it.

## 📧 Email Templates

The application currently supports two email templates:

- **Acceptance Email:** Notifies participants that their application has been accepted.
- **Rejection Email:** Notifies participants that their application has not been accepted.

Both templates share a reusable layout and support dynamic participant information.

## 🔐 Security

- Credentials are stored in environment variables.
- `.env` is excluded from version control.
- Google App Passwords should never be committed or shared.
- Participant email addresses should be handled responsibly.

## 📄 License

This project is available under the MIT License.
