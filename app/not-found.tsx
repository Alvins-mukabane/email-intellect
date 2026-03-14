import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-24 min-h-[70vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-8xl font-extrabold text-blue-600 mb-4 tracking-tighter">404</h1>
      <h2 className="text-3xl font-bold text-slate-800 mb-6">Page not found</h2>
      <p className="text-slate-500 mb-8 max-w-md font-medium text-lg">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-colors shadow-lg shadow-blue-600/20"
      >
        Return Home
      </Link>
    </div>
  );
}
