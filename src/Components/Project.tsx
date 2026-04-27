interface ProjectProps {
  image: string;
  title: string;
  description: string;
  link: string;
  tags: string[];
  index: number;
  visible: boolean;
}

const Project = ({ image, title, description, link, tags, index, visible }: ProjectProps) => (
  <div
    className="bg-white rounded-2xl border border-cream-border overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-lg hover:border-gold transition-all duration-300 flex flex-col"
    style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(24px)',
      transition: `opacity 0.5s ease-out ${index * 120}ms, transform 0.5s ease-out ${index * 120}ms, box-shadow 0.3s, border-color 0.3s`,
    }}
  >
    <div className="overflow-hidden">
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="flex flex-col gap-3 p-6 flex-1">
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-sans font-semibold px-2 py-1 rounded bg-gold/15 text-brown border border-gold/30"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="font-lora font-bold text-xl text-navy">{title}</h3>
      <p className="font-sans text-sm text-[#666] leading-relaxed flex-1">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${title} project`}
        className="mt-2 inline-flex items-center gap-2 text-sm font-sans font-semibold text-brown hover:text-gold transition-colors duration-200"
      >
        View project →
      </a>
    </div>
  </div>
);

export default Project;
