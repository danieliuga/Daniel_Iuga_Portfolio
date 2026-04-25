import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => (
  <footer id="contact" className="bg-navy text-cream-text py-12 px-6">
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center sm:text-left">

      {/* Contact */}
      <div>
        <h3 className="font-lora font-bold text-lg mb-4 text-gold">Contact</h3>
        <ul className="space-y-2 font-sans text-sm text-amber-text">
          <li>
            <a href="mailto:daniel04.iuga@gmail.com" className="hover:text-gold transition-colors">
              daniel04.iuga@gmail.com
            </a>
          </li>
          <li>
            <a href="tel:+34610590901" className="hover:text-gold transition-colors">
              +34 610 590 901
            </a>
          </li>
          <li>Barcelona, Spain</li>
        </ul>
      </div>

      {/* Quick links */}
      <div>
        <h3 className="font-lora font-bold text-lg mb-4 text-gold">Quick Links</h3>
        <ul className="space-y-2 font-sans text-sm">
          {['skills', 'services', 'projects', 'about'].map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="text-amber-text hover:text-gold transition-colors capitalize"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Social */}
      <div>
        <h3 className="font-lora font-bold text-lg mb-4 text-gold">Social Media</h3>
        <ul className="space-y-3 font-sans text-sm">
          <li>
            <a
              href="https://www.linkedin.com/in/danieliuga/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-amber-text hover:text-gold transition-colors"
            >
              <FaLinkedin size={18} /> LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/danieliuga"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-amber-text hover:text-gold transition-colors"
            >
              <FaGithub size={18} /> GitHub
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/danieliuga"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-amber-text hover:text-gold transition-colors"
            >
              <FaTwitter size={18} /> Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div className="mt-10 border-t border-white/10 pt-6 text-center font-sans text-xs text-amber-muted">
      © {new Date().getFullYear()} Daniel Iuga. All rights reserved.
    </div>
  </footer>
);

export default Footer;
