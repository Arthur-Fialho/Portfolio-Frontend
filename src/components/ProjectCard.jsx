import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function ProjectCard({ title, description, technologies, imageUrl, repositoryUrl, productionUrl }) {
  return (
    <div className="glass-card rounded-2xl flex flex-col h-full hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group overflow-hidden">     
      {/* Project Image */}
      {imageUrl && (
        <div className="relative w-full h-44 sm:h-48 overflow-hidden border-b border-slate-200/40 dark:border-slate-800/40">
          <img 
            src={imageUrl} 
            alt={`Mockup of ${title}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}

      {/* Card Content */}
      <div className="p-6 sm:p-7 flex flex-col flex-grow">
        <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 group-hover:text-brand-light dark:group-hover:text-emerald-450 transition-colors">
          {title}
        </h3>      
        <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-6 flex-grow">
          {description}
        </p>      
        
        {/* Technology list */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <span 
              key={tech} 
              className="bg-slate-100/80 dark:bg-slate-800/60 text-xs font-bold text-brand-light dark:text-emerald-400 px-2.5 py-1 rounded-lg border border-slate-200/50 dark:border-slate-800/50"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Footer CTA Buttons */}
        <div className="flex items-center gap-3 mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/80">
          {repositoryUrl && (
            <a 
              href={repositoryUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700/80 text-slate-700 dark:text-slate-200 transition-colors"
            >
              <FaGithub className="text-sm" />
              <span>Código</span>
            </a>
          )}
          {productionUrl && (
            <a 
              href={productionUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold px-3.5 py-2 rounded-xl bg-brand-light hover:bg-emerald-600 text-white shadow-sm hover:shadow-emerald-950/20 transition-colors"
            >
              <FaExternalLinkAlt className="text-[10px]" />
              <span>Acessar</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;