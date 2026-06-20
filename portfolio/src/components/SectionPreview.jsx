import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './SectionPreview.css';

export default function SectionPreview({
  id,
  label,
  title,
  subtitle,
  to,
  linkText = 'Explore More',
  children,
  accent = 'gold',
}) {
  return (
    <section id={id} className="home-section">
      <div className="container">
        <motion.div
          className="home-section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45 }}
        >
          <p className={`section-label label-${accent}`}>{label}</p>
          <div className="home-section-title-row">
            <h2 className="section-title heading-gradient">{title}</h2>
            <Link to={to} className="section-view-all">
              {linkText} <ArrowRight size={16} />
            </Link>
          </div>
          {subtitle && <p className="section-sub">{subtitle}</p>}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.45, delay: 0.08 }}
        >
          <Link to={to} className="section-preview-link">
            <div className="section-preview-body card">{children}</div>
            <span className="section-preview-cta">
              View full {label.toLowerCase()} <ArrowRight size={15} />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
