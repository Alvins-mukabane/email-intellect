import type { ReactNode } from 'react';
import NetworkGuard from '@/components/NetworkGuard';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NetworkGuard /> {/* This watches the network globally */}
        {children}
      </body>
    </html>
  );
}
