import { User, Mail, Bell, Shield, Smartphone, Trash2 } from 'lucide-react';

export function Settings() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
      <div>
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Settings</h1>
        <p className="text-slate-500 text-sm mt-1">Manage your account, connections, and AI preferences.</p>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
        {/* Profile Section */}
        <div className="p-8 border-b border-slate-100">
          <div className="flex items-center gap-3 mb-6">
            <User className="w-5 h-5 text-[#2E5BFF]" />
            <h2 className="text-lg font-bold text-slate-800">Profile Information</h2>
          </div>
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-blue-100 overflow-hidden shadow-inner border-4 border-white">
              <img src="https://ui-avatars.com/api/?name=User&background=2E5BFF&color=fff&size=150" alt="Avatar" />
            </div>
            <div className="flex-1 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">Full Name</label>
                  <input type="text" defaultValue="John Doe" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">Email Address</label>
                  <input type="email" defaultValue="john@example.com" disabled className="w-full bg-slate-100 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-500 cursor-not-allowed" />
                </div>
              </div>
              <button className="bg-slate-800 hover:bg-slate-900 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors">
                Save Changes
              </button>
            </div>
          </div>
        </div>

        {/* Connected Accounts */}
        <div className="p-8 border-b border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-3 mb-6">
            <Mail className="w-5 h-5 text-[#2E5BFF]" />
            <h2 className="text-lg font-bold text-slate-800">Connected Accounts</h2>
          </div>
          <div className="flex items-center justify-between bg-white border border-slate-200 p-4 rounded-2xl shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center text-red-500 font-bold text-xl">
                G
              </div>
              <div>
                <p className="font-bold text-slate-800 text-sm">Gmail (john@example.com)</p>
                <p className="text-xs text-slate-500 mt-0.5">Connected 2 months ago</p>
              </div>
            </div>
            <button className="text-sm font-semibold text-slate-600 border border-slate-200 hover:bg-slate-50 px-4 py-2 rounded-lg transition-colors">
              Reconnect
            </button>
          </div>
        </div>

        {/* AI & Notifications */}
        <div className="p-8 border-b border-slate-100">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-5 h-5 text-[#2E5BFF]" />
            <h2 className="text-lg font-bold text-slate-800">AI & Notifications</h2>
          </div>
          <div className="space-y-4">
            <label className="flex items-center justify-between p-4 border border-slate-100 rounded-2xl cursor-pointer hover:bg-slate-50 transition-colors">
              <div>
                <p className="font-bold text-slate-800 text-sm">Email Summaries</p>
                <p className="text-xs text-slate-500 mt-1">Automatically generate summaries for long threads.</p>
              </div>
              <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-[#2E5BFF]">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6" />
              </div>
            </label>
            <label className="flex items-center justify-between p-4 border border-slate-100 rounded-2xl cursor-pointer hover:bg-slate-50 transition-colors">
              <div>
                <p className="font-bold text-slate-800 text-sm">Opportunity Detection</p>
                <p className="text-xs text-slate-500 mt-1">Highlight business deals and investment requests.</p>
              </div>
              <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-[#2E5BFF]">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6" />
              </div>
            </label>
            <label className="flex items-center justify-between p-4 border border-slate-100 rounded-2xl cursor-pointer hover:bg-slate-50 transition-colors">
              <div>
                <p className="font-bold text-slate-800 text-sm">Push Notifications</p>
                <p className="text-xs text-slate-500 mt-1">Receive alerts for urgent tasks.</p>
              </div>
              <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-300">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-1" />
              </div>
            </label>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="p-8 bg-red-50/30">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-red-600 mb-1">Delete Account</h2>
              <p className="text-sm text-slate-500">Permanently delete your account and all associated data.</p>
            </div>
            <button className="flex items-center gap-2 bg-red-100 text-red-600 hover:bg-red-200 px-4 py-2 rounded-xl text-sm font-semibold transition-colors">
              <Trash2 className="w-4 h-4" /> Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
