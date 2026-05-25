import { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectCard from './ProjectCard';

function ProjectsSection() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/projects`);
        setProjects(response.data);
      } catch (error) {
        console.error("Erro ao buscar projetos:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-24 px-4 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
      {/* Background patterns and glowing effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 dark:opacity-75 pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 radial-glow-teal opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-1/3 left-10 w-96 h-96 radial-glow-indigo opacity-20 pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Meus <span className="bg-gradient-to-r from-teal-500 to-indigo-500 bg-clip-text text-transparent">Projetos</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto text-sm sm:text-base">
            Uma seleção de aplicações web e contratos inteligentes desenvolvidos recentemente.
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div key={n} className="glass-card p-6 sm:p-8 rounded-2xl animate-pulse space-y-4">
                <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded w-2/3"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded"></div>
                  <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-5/6"></div>
                </div>
                <div className="flex gap-2 pt-2">
                  <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded-full w-16"></div>
                  <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded-full w-16"></div>
                </div>
                <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-1/3 mx-auto pt-4"></div>
              </div>
            ))}
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center py-12 glass-card p-8 rounded-2xl max-w-md mx-auto">
            <p className="text-slate-500 dark:text-slate-400">Nenhum projeto encontrado. Inicialize a API do portfólio para carregar projetos.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                technologies={project.technologies ? project.technologies.split(', ') : []}
                repositoryUrl={project.repositoryUrl}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default ProjectsSection;