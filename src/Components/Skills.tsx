import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeader from './SectionHeader';
import SkillItem from './SkillsItem';
import { skills } from '../data/skills';

const Skills = () => {
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="skills" className="bg-cream py-20 px-6">
      <div ref={ref} className="container mx-auto">
        <SectionHeader
          eyebrow="Technologies"
          title="Skills"
          subtitle="What I work with"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, i) => (
            <SkillItem
              key={skill.id}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
              index={i}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
