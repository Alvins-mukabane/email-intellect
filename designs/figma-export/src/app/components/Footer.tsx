import { Mail, MapPin, Phone, Twitter, Linkedin, Youtube, Facebook, Play } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#020617] text-slate-300 pt-40 pb-12 overflow-hidden">
      {/* Wave top */}
      <div className="absolute top-[-2px] left-0 w-full overflow-hidden leading-none z-10 rotate-180">
        <svg className="relative block w-[calc(100%+1.3px)] h-[80px] sm:h-[120px] md:h-[160px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C73.81,25.9,149.91,62.88,228.64,74.52C260.65,79.25,291.68,76.53,321.39,56.44Z" className="fill-slate-50"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-24 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-20">
          
          {/* Logo and Contact (Spans 2 columns) */}
          <div className="lg:col-span-2 pr-8">
            <div className="flex items-center gap-3 font-bold text-white text-xl tracking-wide mb-8">
              <div className="bg-white p-2 rounded-lg text-blue-700">
                <Mail className="w-6 h-6" />
              </div>
              <span>AI EMAIL INTELLIGENT AGENT</span>
            </div>
            <p className="text-sm mb-10 opacity-70 font-medium leading-relaxed max-w-sm">
              © 2024 AI Email Intelligent Agent, All rights reserved.
            </p>
            <div className="space-y-5 text-sm font-medium opacity-90">
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-slate-400" /> support@example.com
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-slate-400" /> 122 45X-7890
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-slate-400" /> 133 Sats St, Tech City, TX
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-8 text-lg">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium opacity-80">
              <li><a href="#" className="hover:text-white transition-colors">Dashboard</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Get Started</a></li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-white font-bold mb-8 text-lg">Features</h4>
            <ul className="space-y-4 text-sm font-medium opacity-80">
              <li><a href="#" className="hover:text-white transition-colors">AI Summarization</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Task Detection</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Opportunity Alerts</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold mb-8 text-lg">Resources</h4>
            <ul className="space-y-4 text-sm font-medium opacity-80">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Documentation</a></li>
            </ul>
          </div>

           {/* Legal */}
           <div>
            <h4 className="text-white font-bold mb-8 text-lg">Legal</h4>
            <ul className="space-y-4 text-sm font-medium opacity-80">
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-3">
                 <Play className="w-2.5 h-2.5 fill-current opacity-50" /> Privacy Policy
              </a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-3">
                 <Play className="w-2.5 h-2.5 fill-current opacity-50" /> Terms of Service
              </a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-3">
                 <Play className="w-2.5 h-2.5 fill-current opacity-50" /> Cookie Policy
              </a></li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/50 pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm font-medium opacity-80">
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-8">
            <a href="#" className="hover:text-white transition-colors">About Us</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
            <a href="#" className="hover:text-white transition-colors">Careers</a>
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 md:border-l border-slate-700/50 md:pl-8 w-full md:w-auto">
             <a href="#" className="hover:text-white transition-colors bg-white/5 p-2 rounded-full"><Facebook className="w-5 h-5" /></a>
             <a href="#" className="hover:text-white transition-colors bg-white/5 p-2 rounded-full"><Twitter className="w-5 h-5" /></a>
             <a href="#" className="hover:text-white transition-colors bg-white/5 p-2 rounded-full"><Linkedin className="w-5 h-5" /></a>
             <a href="#" className="hover:text-white transition-colors bg-white/5 p-2 rounded-full"><Youtube className="w-5 h-5" /></a>
             <span className="hidden lg:inline-block ml-4 pl-4 border-l border-slate-700/50">Support@example.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
