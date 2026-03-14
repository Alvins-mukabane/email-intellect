import type { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import NetworkGuard from '@/components/NetworkGuard';
import Layout from './components/Layout';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NetworkGuard /> {/* This watches the network globally */}
        <Layout>{children}</Layout>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
