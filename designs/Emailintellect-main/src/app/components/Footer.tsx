import { Mail, MapPin, Phone, Twitter, Linkedin, Youtube, Facebook, Play } from 'lucide-react';
import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#020617] text-slate-300 pt-20 sm:pt-40 pb-6 sm:pb-12 overflow-hidden">
      {/* Wave top */}
      <div className="absolute top-[-2px] left-0 w-full overflow-hidden leading-none z-10 rotate-180">
        <svg className="relative block w-[calc(100%+1.3px)] h-[40px] sm:h-[120px] md:h-[160px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C73.81,25.9,149.91,62.88,228.64,74.52C260.65,79.25,291.68,76.53,321.39,56.44Z" className="fill-slate-50"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-24 relative z-20">
        <div className="grid grid-cols-6 gap-2 sm:gap-12 lg:gap-8 mb-10 sm:mb-20">
          
          {/* Logo and Contact */}
          <div className="col-span-2 pr-2 sm:pr-8">
            <Link to="/" className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 font-bold text-white text-[2vw] sm:text-xl tracking-wide mb-4 sm:mb-8">
              <div className="bg-white p-1 sm:p-2 rounded-lg text-blue-700 w-fit">
                <Mail className="w-4 h-4 sm:w-6 h-6" />
              </div>
              <span className="leading-tight text-[2vw] sm:text-base">AI EMAIL AGENT</span>
            </Link>
            <p className="text-[2vw] sm:text-sm mb-4 sm:mb-10 opacity-70 font-medium leading-relaxed max-w-sm">
              © 2024 AI Email Agent.
            </p>
            <div className="space-y-2 sm:space-y-5 text-[2vw] sm:text-sm font-medium opacity-90">
              <div className="flex items-center gap-1 sm:gap-4 truncate">
                <Mail className="w-3 h-3 sm:w-5 sm:h-5 text-slate-400 shrink-0" /> <span className="truncate">support@example.com</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-4 truncate">
                <Phone className="w-3 h-3 sm:w-5 sm:h-5 text-slate-400 shrink-0" /> <span className="truncate">122 45X-7890</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-4 truncate">
                <MapPin className="w-3 h-3 sm:w-5 sm:h-5 text-slate-400 shrink-0" /> <span className="truncate">133 Sats St, TX</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-white font-bold mb-3 sm:mb-8 text-[2.5vw] sm:text-lg">Links</h4>
            <ul className="space-y-2 sm:space-y-4 text-[2vw] sm:text-sm font-medium opacity-80">
              <li><Link to="/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/signin" className="hover:text-white transition-colors">Get Started</Link></li>
            </ul>
          </div>

          {/* Features */}
          <div className="col-span-1">
            <h4 className="text-white font-bold mb-3 sm:mb-8 text-[2.5vw] sm:text-lg">Features</h4>
            <ul className="space-y-2 sm:space-y-4 text-[2vw] sm:text-sm font-medium opacity-80">
              <li><Link to="/" className="hover:text-white transition-colors">Summaries</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Tasks</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Alerts</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h4 className="text-white font-bold mb-3 sm:mb-8 text-[2.5vw] sm:text-lg">Resources</h4>
            <ul className="space-y-2 sm:space-y-4 text-[2vw] sm:text-sm font-medium opacity-80">
              <li><Link to="/" className="hover:text-white transition-colors">Help</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">API</Link></li>
            </ul>
          </div>

           {/* Legal */}
           <div className="col-span-1">
            <h4 className="text-white font-bold mb-3 sm:mb-8 text-[2.5vw] sm:text-lg">Legal</h4>
            <ul className="space-y-2 sm:space-y-4 text-[2vw] sm:text-sm font-medium opacity-80">
              <li><Link to="/" className="hover:text-white transition-colors flex items-center gap-1 sm:gap-3">
                 <Play className="w-2 h-2 sm:w-2.5 sm:h-2.5 fill-current opacity-50" /> Privacy
              </Link></li>
              <li><Link to="/" className="hover:text-white transition-colors flex items-center gap-1 sm:gap-3">
                 <Play className="w-2 h-2 sm:w-2.5 sm:h-2.5 fill-current opacity-50" /> Terms
              </Link></li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/50 pt-4 sm:pt-10 flex flex-row items-center justify-between gap-2 sm:gap-6 text-[2vw] sm:text-sm font-medium opacity-80">
          <div className="flex items-center gap-2 sm:gap-8">
            <Link to="/" className="hover:text-white transition-colors">About</Link>
            <Link to="/" className="hover:text-white transition-colors">Contact</Link>
          </div>
          <div className="flex items-center gap-2 sm:gap-6 w-auto">
             <a href="#" className="hover:text-white transition-colors bg-white/5 p-1 sm:p-2 rounded-full"><Facebook className="w-3 h-3 sm:w-5 sm:h-5" /></a>
             <a href="#" className="hover:text-white transition-colors bg-white/5 p-1 sm:p-2 rounded-full"><Twitter className="w-3 h-3 sm:w-5 sm:h-5" /></a>
             <a href="#" className="hover:text-white transition-colors bg-white/5 p-1 sm:p-2 rounded-full"><Linkedin className="w-3 h-3 sm:w-5 sm:h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
