export default function Privacy() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20 prose prose-slate">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">Privacy Policy</h1>
      <p className="text-slate-500 mb-6 font-medium">Last updated: October 2024</p>

      <div className="space-y-6 text-slate-600 text-sm leading-relaxed">
         <p>This Privacy Policy describes how your personal information is collected, used, and shared when you use our Application.</p>
         <h3 className="text-lg font-bold text-slate-800 mt-8 mb-2">1. Information We Collect</h3>
         <p>When you connect your Gmail account, we request read-only access to process emails for summary and task detection. We do not sell your data or read emails manually.</p>

         <h3 className="text-lg font-bold text-slate-800 mt-8 mb-2">2. How We Use Your Information</h3>
         <p>The text from your emails is temporarily processed by our AI models to generate insights. Persistent storage only contains the metadata and generated summaries, strictly isolated to your account.</p>

         <h3 className="text-lg font-bold text-slate-800 mt-8 mb-2">3. Data Security</h3>
         <p>We use industry-standard encryption (AES-256) at rest and TLS in transit. Your authentication tokens are securely encrypted.</p>
      </div>
    </div>
  );
}