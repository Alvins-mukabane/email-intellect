// This makes the page static, served instantly from Vercel's Edge CDN
export const dynamic = 'force-static';

import Link from 'next/link';
import { SparklesCore } from '@/components/ui/sparkles'; // We'll create this helper next

export default function HomePage() {

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-600 via-indigo-700 to-purple-800 text-white overflow-x-hidden">
      {/* Hero Section with sparkles */}
      <div className="absolute inset-0 z-0">
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

      <header className="relative z-10 flex flex-col items-center justify-center text-center py-24 px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
          Supercharge Your Inbox with AI
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-3xl">
          Let AI manage your emails. Get summaries, task lists, and key opportunities instantly.
        </p>
        <Link
          href="/login"
          prefetch={true}
          className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-transform hover:scale-105"
        >
          Connect Your Gmail
        </Link>
      </header>

      {/* Features Section */}
      <section className="relative z-10 py-20 px-4 bg-white text-blue-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg shadow">
            <h3 className="font-semibold text-xl mb-2">AI-Powered Summaries</h3>
            <p>Get concise summaries of your important emails.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow">
            <h3 className="font-semibold text-xl mb-2">Task &amp; Deadline Detection</h3>
            <p>Extract tasks and deadlines automatically.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow">
            <h3 className="font-semibold text-xl mb-2">Opportunity Alerts</h3>
            <p>Identify key opportunities in your inbox.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative z-10 py-20 px-4 bg-gray-100 text-blue-900">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">How It Works</h2>
          <p className="mt-4 text-lg">
            See how our AI simplifies your email management.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow">
            <h4 className="font-semibold text-xl mb-2">1. Connect Your Email</h4>
            <p>Securely sync your inbox.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h4 className="font-semibold text-xl mb-2">2. AI Analyzes Your Inbox</h4>
            <p>AI reads and processes your emails.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h4 className="font-semibold text-xl mb-2">3. Get Insights &amp; Tasks</h4>
            <p>View summaries, tasks, and alerts.</p>
          </div>
        </div>
      </section>

      {/* Fallback small hero end spacing */}
      <div className="h-32"></div>
    </div>
  );
}
