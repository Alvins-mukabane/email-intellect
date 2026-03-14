import type { ReactNode } from 'react';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased selection:bg-blue-200 selection:text-blue-900 overflow-x-hidden flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
