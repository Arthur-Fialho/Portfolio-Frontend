import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';

function ContactSection() {
  const contactMethods = [
    {
      name: 'Email',
      value: 'arthursouza.fp@gmail.com',
      href: 'mailto:arthursouza.fp@gmail.com',
      icon: <FaEnvelope className="text-2xl text-teal-500 dark:text-teal-400" />,
      actionText: 'Enviar email',
      bgColor: 'group-hover:bg-teal-500/10'
    },
    {
      name: 'GitHub',
      value: 'Arthur-Fialho',
      href: 'https://github.com/Arthur-Fialho',
      icon: <FaGithub className="text-2xl text-indigo-500 dark:text-indigo-400" />,
      actionText: 'Ver perfil',
      bgColor: 'group-hover:bg-indigo-500/10'
    },
    {
      name: 'LinkedIn',
      value: 'arthurfialho',
      href: 'https://linkedin.com/in/arthurfialho',
      icon: <FaLinkedin className="text-2xl text-purple-500 dark:text-purple-400" />,
      actionText: 'Conectar',
      bgColor: 'group-hover:bg-purple-500/10'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition-colors duration-300 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 dark:opacity-75 pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 radial-glow-indigo opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Entre em <span className="bg-gradient-to-r from-teal-500 to-indigo-500 bg-clip-text text-transparent">Contato</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto text-sm sm:text-base">
            Gostou do meu trabalho? Vamos conversar! Sinta-se à vontade para me contatar em qualquer uma das plataformas.
          </p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
          {contactMethods.map((method, index) => (
            <a 
              key={index}
              href={method.href}
              target={method.name !== 'Email' ? "_blank" : undefined}
              rel={method.name !== 'Email' ? "noopener noreferrer" : undefined}
              className="glass-card p-6 sm:p-8 rounded-2xl flex flex-col items-center text-center gap-4 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group w-full max-w-[280px]"
            >
              <div className={`p-4 rounded-full bg-slate-100 dark:bg-slate-800/80 group-hover:scale-110 transition-all duration-300 ${method.bgColor}`}>
                {method.icon}
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-800 dark:text-slate-100 text-lg">{method.name}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 break-all">{method.value}</p>
              </div>
              <span className="mt-2 text-xs font-semibold text-teal-600 dark:text-teal-400 group-hover:underline">
                {method.actionText} →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactSection;

