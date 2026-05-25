import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function ProjectCard({ title, description, technologies, repositoryUrl }) {
  const isGithub = repositoryUrl && repositoryUrl.includes("github.com");

  return (
    <div className="glass-card p-6 sm:p-8 rounded-2xl flex flex-col h-full hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">     
      <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3">{title}</h3>      
      <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-6 flex-grow">{description}</p>      
      
      {/* Technology list */}
      <div className="flex flex-wrap gap-2 mb-6">
        {technologies.map((tech) => (
          <span 
            key={tech} 
            className="bg-slate-100/80 dark:bg-slate-800/60 text-xs font-bold text-teal-600 dark:text-teal-400 px-2.5 py-1 rounded-lg border border-slate-200/50 dark:border-slate-800/50"
          >
            {tech}
          </span>
        ))}
      </div>
      
      {/* Footer CTA */}
      <div className="flex justify-start mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/80">
        {repositoryUrl && (
          <a 
            href={repositoryUrl} 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
          >
            {isGithub ? (
              <>
                <FaGithub className="text-lg" />
                <span>Ver no GitHub</span>
              </>
            ) : (
              <>
                <FaExternalLinkAlt className="text-xs" />
                <span>Acessar projeto</span>
              </>
            )}
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;