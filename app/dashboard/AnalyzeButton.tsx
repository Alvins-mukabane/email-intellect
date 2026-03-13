'use client';

import { useTransition } from 'react';
import { analyzeEmailsAction } from './actions';

export function AnalyzeButton() {
  const [isPending, startTransition] = useTransition();

  const handleAnalyze = () => {
    startTransition(async () => {
      await analyzeEmailsAction();
    });
  };

  return (
    <button
      type="button"
      onClick={handleAnalyze}
      disabled={isPending}
      className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-blue-500/20 disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {isPending ? 'Analyzing…' : 'Analyze My Inbox'}
    </button>
  );
}

