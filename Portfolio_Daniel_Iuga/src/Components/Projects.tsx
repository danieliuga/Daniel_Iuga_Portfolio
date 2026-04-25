import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeader from './SectionHeader';
import Project from './Project';
import { projects } from '../data/projects';

const Projects = () => {
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="projects" className="bg-cream py-20 px-6">
      <div ref={ref} className="container mx-auto">
        <SectionHeader
          eyebrow="Portfolio"
          title="Projects"
          subtitle="Practical applications & learning"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
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
      </div>
    </section>
  );
};

export default Projects;
