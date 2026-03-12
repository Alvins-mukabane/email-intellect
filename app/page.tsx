// This makes the page static, served instantly from Vercel's Edge CDN
export const dynamic = 'force-static';

import Link from 'next/link';
import { SparklesCore } from '@/components/ui/sparkles'; // We'll create this helper next
import { FlipWords } from '@/components/ui/flip-words'; // And this one too

export default function HomePage() {
  const words = ["summarize", "prioritize", "extract"];

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-zinc-100 flex flex-col items-center justify-center p-4 overflow-hidden">
      {/* Background Sparkles Effect */}
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-white">
          Your AI Executive Assistant to <br />
          <FlipWords words={words} className="text-blue-500" /> Emails.
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
          Stop drowning in your inbox. Get instant summaries, critical action items, 
          and identify key opportunities, all powered by AI.
        </p>
        <Link 
          href="/login" 
          prefetch={true} // Crucial for millisecond loading to login page
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl text-lg shadow-lg shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
        >
          Get Started for Free
        </Link>
        <p className="mt-4 text-xs text-gray-500">No credit card required.</p>
      </div>
    </div>
  );
}
