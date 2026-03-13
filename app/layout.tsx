import type { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import NetworkGuard from '@/components/NetworkGuard';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NetworkGuard /> {/* This watches the network globally */}
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
