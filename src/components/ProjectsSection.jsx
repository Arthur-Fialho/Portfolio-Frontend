import ProjectCard from './ProjectCard';
import projectsData from '../data/projects.json';

function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
      {/* Background patterns and glowing effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 dark:opacity-75 pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 radial-glow-teal opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-1/3 left-10 w-96 h-96 radial-glow-indigo opacity-20 pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Meus <span className="bg-gradient-to-r from-brand-med to-brand-light bg-clip-text text-transparent">Projetos</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto text-sm sm:text-base">
            Uma seleção de aplicações web e contratos inteligentes desenvolvidos recentemente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              imageUrl={project.imageUrl}
              repositoryUrl={project.repositoryUrl}
              productionUrl={project.productionUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;