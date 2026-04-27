import { useEffect } from 'react';
import { HiX } from 'react-icons/hi';
import Project from './Project';
import { projects } from '../data/projects';

interface ProjectsModalProps {
  onClose: () => void;
}

const ProjectsModal = ({ onClose }: ProjectsModalProps) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="All projects"
      className="fixed inset-0 z-50 flex items-start justify-center bg-navy/80 backdrop-blur-sm overflow-y-auto py-10 px-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl bg-cream rounded-2xl shadow-2xl p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <p className="font-sans text-xs tracking-[3px] uppercase text-gold mb-2">Portfolio</p>
            <h2 className="font-lora font-bold text-3xl text-navy">All Projects</h2>
            <p className="font-lora italic text-brown mt-1">{projects.length} projects</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="mt-1 p-2 rounded-full hover:bg-navy/10 transition-colors text-navy/50 hover:text-navy"
          >
            <HiX size={22} />
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <Project
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
              tags={project.tags}
              index={i}
              visible={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsModal;
