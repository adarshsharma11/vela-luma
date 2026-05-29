import type { Metadata } from 'next';

import { APP_NAME, APP_TAGLINE, COPY } from '@/constants/app';
import { AuthProvider } from '@/context/AuthContext';

import './globals.css';

export const metadata: Metadata = {
  title: `${APP_NAME} | ${APP_TAGLINE}`,
  description: COPY.appDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
