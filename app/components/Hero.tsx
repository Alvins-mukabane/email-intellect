import { Check, Plus, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { ImageWithFallback } from '@/app/dashboard/components/ImageWithFallback';

export function Hero() {
  return (
    <div className="relative pt-32 sm:pt-40 pb-40 lg:pb-72 lg:pt-56 overflow-hidden bg-gradient-to-br from-[#1E3A8A] via-[#2563EB] to-[#60A5FA]">
      {/* Abstract light beam effects */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-400/20 blur-3xl rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      {/* Wave bottom divider */}
      <div className="absolute bottom-[-2px] left-0 w-full overflow-hidden leading-none z-10">
        <svg className="relative block w-[calc(100%+1.3px)] h-[60px] sm:h-[120px] md:h-[240px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C73.81,25.9,149.91,62.88,228.64,74.52C260.65,79.25,291.68,76.53,321.39,56.44Z" className="fill-[#F8FAFC]"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24 relative z-20">
        <div className="grid grid-cols-2 gap-4 lg:gap-8 items-center">
          
          {/* Left Text Content */}
          <div className="text-white relative z-20">
            <h1 className="text-[6vw] sm:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-4 sm:mb-6">
              Supercharge<br/>Your Inbox<br/>with AI
            </h1>
            <p className="text-[2.5vw] sm:text-lg lg:text-xl text-blue-100 mb-6 sm:mb-10 max-w-[480px] font-medium leading-relaxed pr-4">
              Let AI manage your emails. Get summaries, task lists, and key opportunities instantly.
            </p>
            <Link href="/welcome">
              <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold text-[3vw] sm:text-lg px-4 sm:px-8 py-2 sm:py-4 rounded-xl shadow-[0_8px_30px_rgb(29,78,216,0.3)] transition-all hover:-translate-y-1">
                Connect Gmail
              </button>
            </Link>
            
            <div className="mt-8 sm:mt-16">
              <p className="text-[2vw] sm:text-sm font-semibold text-blue-200/80 mb-2 sm:mb-4 tracking-wider uppercase">Trusted by professionals worldwide</p>
              <div className="flex flex-wrap items-center gap-2 sm:gap-8 opacity-90">
                <div className="flex items-center gap-1 font-bold text-sm sm:text-2xl tracking-tighter">
                  <span className="text-blue-500">G</span><span className="text-red-500">o</span><span className="text-yellow-500">o</span><span className="text-blue-500">g</span><span className="text-green-500">l</span><span className="text-red-500">e</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-1.5 font-bold text-xs sm:text-2xl text-black bg-white px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-md">
                   <svg viewBox="0 0 24 24" className="w-3 h-3 sm:w-5 sm:h-5 fill-current"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522v-2.521zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.521-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.523-2.522v-2.522h2.523zM15.165 17.688a2.527 2.527 0 0 1-2.523-2.523 2.526 2.526 0 0 1 2.523-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/></svg>
                   slack
                </div>
                <div className="flex items-center font-extrabold text-sm sm:text-2xl text-green-400 tracking-tighter">
                  TechCrunch
                </div>
              </div>
            </div>
          </div>

          {/* Right Illustration - Always Visible Now */}
          <div className="relative h-[250px] sm:h-[400px] lg:h-[500px] w-full block perspective-1000 z-10">
            {/* Background elements */}
            <div className="absolute top-[20%] right-[10%] w-24 sm:w-64 h-8 sm:h-16 bg-white/20 backdrop-blur-sm rounded-xl -rotate-6"></div>
            <div className="absolute top-[30%] left-[20%] w-16 sm:w-48 h-6 sm:h-12 bg-white/20 backdrop-blur-sm rounded-xl rotate-3"></div>

            {/* Today's Summary Card */}
            <div className="absolute top-[15%] sm:top-[25%] left-0 sm:left-[5%] bg-white p-2 sm:p-5 rounded-lg sm:rounded-2xl shadow-2xl w-[120px] sm:w-[260px] transform hover:scale-105 transition-transform duration-300 z-30">
              <h3 className="text-blue-600 font-bold mb-1 sm:mb-3 border-b pb-1 sm:pb-2 text-[2.5vw] sm:text-sm">Today&apos;s Summary</h3>
              <div className="space-y-1 sm:space-y-3">
                <div className="flex items-center gap-1 sm:gap-3 text-gray-700 text-[2.5vw] sm:text-sm font-medium">
                  <div className="bg-blue-100 p-0.5 sm:p-1.5 rounded-full"><Plus className="w-2 h-2 sm:w-3.5 sm:h-3.5 text-blue-600"/></div>
                  <span>3 Tasks</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-3 text-gray-700 text-[2.5vw] sm:text-sm font-medium">
                  <div className="bg-green-100 p-0.5 sm:p-1.5 rounded-full"><Check className="w-2 h-2 sm:w-3.5 sm:h-3.5 text-green-600"/></div>
                  <span>1 Alert</span>
                </div>
              </div>
            </div>

            {/* Task list card */}
            <div className="absolute top-[50%] sm:top-[45%] right-0 sm:right-[5%] bg-white/95 backdrop-blur-md p-2 sm:p-5 rounded-lg sm:rounded-2xl shadow-xl w-[140px] sm:w-[280px] z-20 transform hover:-translate-y-2 transition-transform duration-300">
              <div className="space-y-2 sm:space-y-4">
                <div className="flex items-center gap-2 sm:gap-3 bg-blue-50/50 p-1 sm:p-2 rounded-lg">
                  <div className="w-3 h-3 sm:w-5 sm:h-5 rounded bg-blue-500 flex items-center justify-center shadow-sm">
                    <Check className="w-2 h-2 sm:w-3 sm:h-3 text-white"/>
                  </div>
                  <span className="text-[2.5vw] sm:text-sm font-medium text-gray-700">Submit report</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 bg-blue-50/50 p-1 sm:p-2 rounded-lg">
                  <div className="w-3 h-3 sm:w-5 sm:h-5 rounded bg-blue-500 flex items-center justify-center shadow-sm">
                    <Check className="w-2 h-2 sm:w-3 sm:h-3 text-white"/>
                  </div>
                  <span className="text-[2.5vw] sm:text-sm font-medium text-gray-700">Client meeting</span>
                </div>
              </div>
            </div>

            {/* High Priority Badge */}
            <div className="absolute top-[40%] right-[-5%] sm:right-[-5%] bg-red-400 text-white px-2 sm:px-5 py-1 sm:py-3 rounded-full shadow-[0_8px_30px_rgb(248,113,113,0.4)] flex items-center gap-1 sm:gap-2 font-bold z-40 transform hover:scale-110 transition-transform text-[2vw] sm:text-base">
               <CheckCircle2 className="w-3 h-3 sm:w-5 sm:h-5" /> High Priority
            </div>

            {/* Center "Robot" image element */}
            <div className="absolute top-[35%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-48 sm:h-48 rounded-full border-[3px] sm:border-[6px] border-white/20 flex items-center justify-center shadow-2xl overflow-hidden bg-white z-20">
              <ImageWithFallback 
                 src="https://images.unsplash.com/photo-1768400730810-5c4398d58ae7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRseSUyMGFpJTIwcm9ib3QlMjAzZHxlbnwxfHx8fDE3NzMzNDMxNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                 alt="Friendly AI Robot" 
                 className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
