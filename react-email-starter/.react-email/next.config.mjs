
import path from 'path';
const emailsDirRelativePath = path.normalize('./emails');
const userProjectLocation = '/home/mohamed-amine/Desktop/event-mailer/react-email-starter';
const previewServerLocation = '/home/mohamed-amine/Desktop/event-mailer/react-email-starter/.react-email';
const rootDir = '/home/mohamed-amine/Desktop/event-mailer/react-email-starter';
/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_IS_BUILDING: 'true',
    REACT_EMAIL_INTERNAL_EMAILS_DIR_RELATIVE_PATH: emailsDirRelativePath,
    REACT_EMAIL_INTERNAL_EMAILS_DIR_ABSOLUTE_PATH: path.resolve(userProjectLocation, emailsDirRelativePath),
    REACT_EMAIL_INTERNAL_PREVIEW_SERVER_LOCATION: previewServerLocation,
    REACT_EMAIL_INTERNAL_USER_PROJECT_LOCATION: userProjectLocation,
    
  },
  turbopack: {
    root: rootDir,
  },
  outputFileTracingRoot: rootDir,
  serverExternalPackages: ['esbuild', 'jiti'],
  typescript: {
    ignoreBuildErrors: true
  },
  staticPageGenerationTimeout: 600,
}

export default nextConfig