import { Check, Clock, MoreHorizontal, AlertCircle, Plus } from 'lucide-react';

export function Tasks() {
  const pendingTasks = [
    { id: 1, title: "Send marketing report to the board", source: "Weekly Report Summary", due: "Today, 5:00 PM", priority: "High" },
    { id: 2, title: "Reply to investor regarding the proposal", source: "Investor Proposal Updates", due: "Tomorrow, 10:00 AM", priority: "Medium" },
    { id: 3, title: "Update billing method for domain renewal", source: "Action Required: Domain Renewal", due: "Oct 15", priority: "Urgent" },
  ];

  const completedTasks = [
    { id: 4, title: "Schedule follow-up call with Michael", source: "Client Partnership Agreement", due: "Done", priority: "Low" },
    { id: 5, title: "Review Q3 performance metrics", source: "Internal Metrics", due: "Done", priority: "Medium" },
  ];

  return (
    <div className="max-w-[1200px] mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Tasks Detected</h1>
          <p className="text-slate-500 text-sm mt-1">Action items automatically extracted from your emails.</p>
        </div>
        <button className="bg-[#2E5BFF] hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors flex items-center gap-2 shadow-sm">
          <Plus className="w-4 h-4" /> Add Manual Task
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pending Tasks */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span> To Do
            </h3>
            <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded-md">{pendingTasks.length}</span>
          </div>
          <div className="space-y-3">
            {pendingTasks.map((task) => (
              <div key={task.id} className="p-4 rounded-2xl border border-slate-100 hover:border-blue-100 hover:shadow-md transition-all group bg-white">
                <div className="flex items-start gap-4">
                  <button className="mt-1 relative flex items-center justify-center w-5 h-5 shrink-0 rounded border-2 border-slate-200 hover:border-blue-500 transition-colors">
                  </button>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-800 text-sm mb-1">{task.title}</h4>
                    <p className="text-xs text-slate-400 mb-3">From: {task.source}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-50 px-2.5 py-1 rounded-md">
                        <Clock className="w-3.5 h-3.5 text-slate-400" /> {task.due}
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md uppercase ${task.priority === 'Urgent' ? 'bg-red-50 text-red-600' : task.priority === 'High' ? 'bg-orange-50 text-orange-600' : 'bg-blue-50 text-blue-600'}`}>
                        {task.priority}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Completed Tasks */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col opacity-75 hover:opacity-100 transition-opacity">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span> Completed
            </h3>
            <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded-md">{completedTasks.length}</span>
          </div>
          <div className="space-y-3">
            {completedTasks.map((task) => (
              <div key={task.id} className="p-4 rounded-2xl border border-slate-100 bg-slate-50">
                <div className="flex items-start gap-4">
                  <div className="mt-1 relative flex items-center justify-center w-5 h-5 shrink-0 bg-green-500 rounded border border-green-500">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-500 text-sm mb-1 line-through">{task.title}</h4>
                    <p className="text-xs text-slate-400">From: {task.source}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
