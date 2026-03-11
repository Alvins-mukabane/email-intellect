import { login, signup, signInWithGoogle } from './actions';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8 bg-[#161616] p-10 rounded-2xl border border-white/10 shadow-2xl">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            AI Email Agent
          </h1>
          <p className="mt-2 text-gray-400">Your AI-powered executive assistant</p>
        </div>

        <div className="space-y-4">
          {/* Wrap the Google button in its own form */}
          <form>
            <button
              formAction={signInWithGoogle}
              className="w-full flex items-center justify-center gap-3 bg-white text-black font-bold py-3 rounded-xl hover:bg-gray-200 transition-colors"
            >
              <img src="https://www.google.com/favicon.ico" className="w-5 h-5" alt="Google" />
              Continue with Google
            </button>
          </form>

          <div className="relative flex items-center py-2">
            <div className="flex-grow border-t border-white/10"></div>
            <span className="flex-shrink mx-4 text-gray-500 text-sm">or</span>
            <div className="flex-grow border-t border-white/10"></div>
          </div>

          {/* Email/Password form */}
          <form className="space-y-4">
            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              className="w-full px-4 py-3 rounded-xl bg-black border border-white/10"
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              required
              className="w-full px-4 py-3 rounded-xl bg-black border border-white/10"
            />
            <div className="flex gap-4">
              <button
                formAction={login}
                className="flex-1 border border-white/10 py-3 rounded-xl hover:bg-white/5"
              >
                Sign In
              </button>
              <button formAction={signup} className="flex-1 bg-blue-600 py-3 rounded-xl">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}