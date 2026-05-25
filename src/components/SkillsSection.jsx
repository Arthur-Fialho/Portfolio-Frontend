import { FaCode, FaLaptopCode, FaCube, FaServer } from 'react-icons/fa';

const skillCategories = [
  {
    title: "Linguagens",
    icon: <FaCode className="text-xl text-teal-500 dark:text-teal-400" />,
    skills: ["Java", "JavaScript", "TypeScript", "Python", "Rust", "C#", "Motoko", "HTML", "CSS"]
  },
  {
    title: "Frameworks & Libs",
    icon: <FaLaptopCode className="text-xl text-indigo-500 dark:text-indigo-400" />,
    skills: ["React", "Spring Boot", ".NET", "WordPress"]
  },
  {
    title: "Web3 & Blockchain",
    icon: <FaCube className="text-xl text-purple-500 dark:text-purple-400" />,
    skills: ["Solidity", "Foundry", "Blockchain", "Web3"]
  },
  {
    title: "Bancos & Infraestrutura",
    icon: <FaServer className="text-xl text-emerald-500 dark:text-emerald-400" />,
    skills: ["PostgreSQL", "Docker", "Git", "AWS", "Linux", "Windows"]
  }
];

function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition-colors duration-300 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] radial-glow-indigo opacity-30 dark:opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Minhas <span className="bg-gradient-to-r from-teal-500 to-indigo-500 bg-clip-text text-transparent">Habilidades</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto text-sm sm:text-base">
            Tecnologias, frameworks e ferramentas que utilizo no meu fluxo de desenvolvimento no dia a dia.
          </p>
        </div>
        
        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="glass-card p-6 sm:p-8 rounded-2xl hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-100">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, sIndex) => (
                  <span
                    key={sIndex}
                    className="bg-slate-100/80 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 text-sm font-semibold px-3.5 py-1.5 rounded-lg border border-slate-200/50 dark:border-slate-800/50 hover:bg-teal-500 hover:text-white dark:hover:bg-teal-500/80 dark:hover:text-white hover:border-teal-400 dark:hover:border-teal-500 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;