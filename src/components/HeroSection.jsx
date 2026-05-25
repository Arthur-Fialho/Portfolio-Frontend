import profileImage from '../assets/profile.png';
import Clock from './Clock';
import { FaArrowDown, FaGithub, FaLinkedin } from 'react-icons/fa';

function HeroSection() {
  return (
    <section 
      id="hero" 
      className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-between items-center text-center px-4 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden py-12"
    >
      {/* Background patterns and glowing effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 dark:opacity-75 pointer-events-none"></div>
      <div className="absolute top-10 left-10 w-72 h-72 sm:w-96 sm:h-96 radial-glow-teal animate-pulse-glow pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 sm:w-96 sm:h-96 radial-glow-indigo animate-pulse-glow pointer-events-none" style={{ animationDelay: '-2s' }}></div>

      {/* Top row widget */}
      <div className="relative z-10 w-full flex justify-center mt-4">
        <Clock />
      </div>

      {/* Main hero content */}
      <div className="relative z-10 flex flex-col items-center gap-8 my-auto max-w-3xl">
        {/* Avatar with floating & glowing border */}
        <div className="relative animate-float">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-med via-brand-light to-emerald-400 blur-md opacity-75"></div>
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full p-1 bg-white dark:bg-slate-900 shadow-2xl flex items-center justify-center">
            <img 
              src={profileImage} 
              alt="Arthur Fialho profile picture"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Text descriptions */}
        <div className="space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100/80 dark:bg-emerald-950/40 text-emerald-850 dark:text-emerald-300 border border-emerald-200/50 dark:border-emerald-900/30">
            ✨ Disponível para novos projetos
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight">
            Olá, eu sou <br />
            <span className="bg-gradient-to-r from-brand-med via-brand-light to-emerald-500 bg-clip-text text-transparent">
              Arthur Fialho
            </span>
          </h1>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100">
            Desenvolvedor Full Stack & Web3
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
            Estudante de Ciência da Computação apaixonado por criar experiências digitais modernas, eficientes e escaláveis.
          </p>
        </div>

        {/* Action buttons / Social */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
          <a 
            href="#projects"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-brand-med to-brand-light hover:from-brand-light hover:to-emerald-500 text-white font-semibold shadow-lg hover:shadow-emerald-950/25 dark:hover:shadow-emerald-950/25 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
          >
            Ver Meus Projetos
          </a>
          <a 
            href="#contact"
            className="px-6 py-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-850 text-slate-700 dark:text-slate-200 font-semibold border border-slate-200 dark:border-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
          >
            Entre em Contato
          </a>
          <div className="flex gap-2 ml-2">
            <a 
              href="https://github.com/Arthur-Fialho" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white dark:bg-slate-900 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all active:scale-95"
              aria-label="GitHub profile"
            >
              <FaGithub size={18} />
            </a>
            <a 
              href="https://linkedin.com/in/arthurfialho" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white dark:bg-slate-900 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all active:scale-95"
              aria-label="LinkedIn profile"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Down indicator */}
      <button 
        onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}
        className="relative z-10 mt-8 group flex flex-col items-center gap-1 text-xs font-semibold text-slate-400 hover:text-brand-light dark:hover:text-emerald-400 transition-colors"
      >
        <span>Rolagem</span>
        <FaArrowDown className="text-base animate-bounce mt-1 group-hover:translate-y-0.5 transition-transform" />
      </button>
    </section>
  );
}

export default HeroSection;