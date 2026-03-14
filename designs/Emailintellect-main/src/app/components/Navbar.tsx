import { useState } from 'react';
import { Mail, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className={`absolute top-0 w-full z-50 flex items-center justify-between px-6 lg:px-24 py-6 ${isHome ? 'text-white' : 'text-slate-800 bg-white border-b border-slate-100 shadow-sm'}`}>
      <Link to="/" className="flex items-center gap-3 font-bold text-xl tracking-wide">
        <div className="bg-blue-600 p-2 rounded-lg text-white">
          <Mail className="w-6 h-6" />
        </div>
        <span className="hidden sm:inline-block text-sm sm:text-xl">AI EMAIL INTELLIGENT AGENT</span>
        <span className="sm:hidden text-sm">AI EMAIL</span>
      </Link>
      <div className="hidden lg:flex items-center gap-10 text-sm font-semibold">
        <Link to="/dashboard" className={`transition-colors ${isHome ? 'hover:text-blue-200' : 'hover:text-blue-600'}`}>Dashboard</Link>
        <Link to="/" className={`transition-colors ${isHome ? 'hover:text-blue-200' : 'hover:text-blue-600'}`}>Features</Link>
        <Link to="/pricing" className={`transition-colors ${isHome ? 'hover:text-blue-200' : 'hover:text-blue-600'}`}>Pricing</Link>
      </div>
      <div className="hidden lg:flex items-center gap-6 text-sm font-semibold">
        <Link to="/signin" className={`transition-colors ${isHome ? 'hover:text-blue-200' : 'hover:text-blue-600'}`}>Sign In</Link>
        <Link to="/signin" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition-all shadow-md hover:shadow-lg">
          Get Started
        </Link>
      </div>
      
      <div className="lg:hidden relative">
        <button onClick={() => setIsOpen(!isOpen)} className={`${isHome ? 'text-white' : 'text-slate-800'} focus:outline-none flex items-center justify-center p-2`}>
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
        {isOpen && (
          <div className="absolute right-0 mt-4 w-48 bg-white text-slate-800 rounded-xl shadow-2xl py-2 flex flex-col font-medium border border-slate-100">
            <Link to="/dashboard" onClick={() => setIsOpen(false)} className="px-4 py-3 hover:bg-slate-50 transition-colors">Dashboard</Link>
            <Link to="/signin" onClick={() => setIsOpen(false)} className="px-4 py-3 hover:bg-slate-50 transition-colors">Sign In</Link>
            <Link to="/pricing" onClick={() => setIsOpen(false)} className="px-4 py-3 hover:bg-slate-50 transition-colors">Pricing</Link>
            <div className="border-t border-slate-100 my-1"></div>
            <Link to="/signin" onClick={() => setIsOpen(false)} className="px-4 py-3 hover:bg-slate-50 transition-colors text-blue-600">Get Started</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
