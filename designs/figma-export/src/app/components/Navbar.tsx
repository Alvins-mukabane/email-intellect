import { Mail, Menu } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="absolute top-0 w-full z-50 text-white flex items-center justify-between px-6 lg:px-24 py-6">
      <div className="flex items-center gap-3 font-bold text-xl tracking-wide">
        <div className="bg-white p-2 rounded-lg text-blue-700">
          <Mail className="w-6 h-6" />
        </div>
        <span>AI EMAIL INTELLIGENT AGENT</span>
      </div>
      <div className="hidden lg:flex items-center gap-10 text-sm font-semibold">
        <a href="#" className="hover:text-blue-200 transition-colors">Dashboard</a>
        <a href="#" className="hover:text-blue-200 transition-colors">Features</a>
        <a href="#" className="hover:text-blue-200 transition-colors">Pricing</a>
      </div>
      <div className="hidden lg:flex items-center gap-6 text-sm font-semibold">
        <a href="#" className="hover:text-blue-200 transition-colors">Sign In</a>
        <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl transition-all shadow-md hover:shadow-lg">
          Get Started
        </button>
      </div>
      <button className="lg:hidden text-white">
        <Menu className="w-8 h-8" />
      </button>
    </nav>
  );
}
