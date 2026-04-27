import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeader from './SectionHeader';
import Project from './Project';
import { projects } from '../data/projects';

const INITIAL_COUNT = 3;

const Projects = () => {
  const { ref, visible } = useScrollAnimation();
  const [showAll, setShowAll] = useState(false);

  const displayed = showAll ? projects : projects.slice(0, INITIAL_COUNT);
  const remaining = projects.length - INITIAL_COUNT;

  return (
    <section id="projects" className="bg-cream py-20 px-6">
      <div ref={ref} className="container mx-auto">
        <SectionHeader
          eyebrow="Portfolio"
          title="Projects"
          subtitle="Practical applications & learning"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayed.map((project, i) => (
            <Project
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
              tags={project.tags}
              index={i}
              visible={visible}
            />
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4">
          {!showAll && remaining > 0 && (
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 px-7 py-3 border border-navy/20 text-navy font-sans text-sm font-semibold hover:border-gold hover:text-brown transition-all duration-200"
            >
              Show {remaining} more project{remaining > 1 ? 's' : ''} ↓
            </button>
          )}
          <a
            href="https://github.com/danieliuga"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-brown hover:text-gold transition-colors duration-200"
          >
            <FaGithub size={16} />
            View all projects on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
