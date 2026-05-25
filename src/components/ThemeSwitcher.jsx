import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../hooks/useTheme';

function ThemeSwitcher() {
  const [theme, toggleTheme] = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-teal-500 dark:hover:text-teal-400 transition-all duration-200 active:scale-95 border border-transparent hover:border-slate-200/50 dark:hover:border-slate-800/50"
      aria-label="Alternar tema"
    >
      {theme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
    </button>
  );
}

export default ThemeSwitcher;