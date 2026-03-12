export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] p-8 animate-pulse">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="h-10 w-48 bg-white/5 rounded-lg" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-64 bg-white/5 rounded-2xl border border-white/10" />
          ))}
        </div>
      </div>
    </div>
  );
}
