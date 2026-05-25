import { useState, useEffect } from 'react';
import { FaRegClock } from 'react-icons/fa';

function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
  const dateOptions = { weekday: 'short', day: 'numeric', month: 'short' };

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 shadow-sm font-mono text-xs text-slate-600 dark:text-slate-400">
      <FaRegClock className="text-teal-500 dark:text-teal-400 animate-pulse" />
      <span className="font-semibold text-slate-700 dark:text-slate-300">
        {date.toLocaleTimeString(undefined, timeOptions)}
      </span>
      <span className="text-slate-400 dark:text-slate-500">|</span>
      <span>
        {date.toLocaleDateString('pt-BR', dateOptions)}
      </span>
    </div>
  );
}

export default Clock;