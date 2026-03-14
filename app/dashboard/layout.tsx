'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Mail,
  CheckSquare,
  Briefcase,
  User,
  Shield,
} from 'lucide-react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/dashboard/emails', label: 'Emails', icon: Mail },
    { path: '/dashboard/tasks', label: 'Tasks', icon: CheckSquare },
    { path: '/dashboard/opportunities', label: 'Opportunities', icon: Briefcase },
    { path: '/dashboard/profile', label: 'Profile', icon: User },
    { path: '/dashboard/security', label: 'Security', icon: Shield },
  ];

  return (
    <div className="flex h-screen bg-[#F4F7FE] overflow-hidden font-sans text-slate-800">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-[#2E5BFF] to-[#1A365D] text-white flex flex-col relative overflow-hidden shrink-0 shadow-2xl">
        {/* Abstract background waves */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none mix-blend-overlay">
          <svg viewBox="0 0 400 800" className="w-full h-full preserve-3d" preserveAspectRatio="none">
            <path d="M0,100 C150,200 250,0 400,100 L400,800 L0,800 Z" fill="#ffffff" opacity="0.1" />
            <path d="M0,300 C150,400 250,200 400,300 L400,800 L0,800 Z" fill="#ffffff" opacity="0.1" />
            <path d="M0,500 C150,600 250,400 400,500 L400,800 L0,800 Z" fill="#ffffff" opacity="0.1" />
          </svg>
        </div>

        <div className="p-6 flex items-center gap-3 font-bold text-lg mb-4 relative z-10">
          <div className="bg-white p-1.5 rounded-lg text-blue-700 shadow-sm">
            <Mail className="w-5 h-5" />
          </div>
          <span className="tracking-wide text-sm">Dashboard</span>
        </div>

        <nav className="flex-1 px-4 space-y-1.5 relative z-10">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all font-medium text-sm ${
                  isActive
                    ? 'bg-white/20 shadow-inner border border-white/10'
                    : 'hover:bg-white/10 opacity-70 hover:opacity-100'
                }`}
              >
                <Icon className="w-5 h-5" /> {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 space-y-1.5 relative z-10">
          <Link
            href="/settings"
            className={`flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all font-medium text-sm ${
              pathname === '/settings' ? 'bg-white/20' : 'hover:bg-white/10 opacity-70 hover:opacity-100'
            }`}
          >
            <Settings className="w-5 h-5" /> Settings
          </Link>
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3.5 rounded-xl hover:bg-white/10 opacity-70 hover:opacity-100 transition-all font-medium text-sm"
          >
            <Power className="w-5 h-5" /> Logout
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Top Header */}
        <header className="h-[88px] bg-[#F4F7FE] flex items-center justify-between px-8 shrink-0 relative z-20">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search emails..."
              className="w-full bg-white border border-slate-100 rounded-xl py-3 pl-12 pr-4 shadow-sm focus:ring-2 focus:ring-blue-500 outline-none text-sm font-medium text-slate-600 placeholder:text-slate-400 transition-shadow"
            />
          </div>
          <div className="flex items-center gap-6">
            <button className="relative p-2.5 text-blue-600 hover:text-blue-800 hover:bg-blue-50 transition-colors bg-white rounded-full shadow-sm border border-slate-100">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="w-11 h-11 rounded-full bg-blue-100 overflow-hidden shadow-sm border-2 border-white cursor-pointer hover:scale-105 transition-transform">
              <img
                src="https://ui-avatars.com/api/?name=User&background=2E5BFF&color=fff&bold=true"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </header>

        {/* Scrollable Page Content */}
        <div className="flex-1 overflow-y-auto p-8 pt-0 custom-scrollbar">{children}</div>
      </main>
    </div>
  );
}
