import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Filter } from 'lucide-react';
import { projects, roles } from '../data/resumeData';
import './Projects.css';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filtered =
    filter === 'all' ? projects : projects.filter((p) => p.role === filter);

  return (
    <div className="projects-page">
      <div className="page-hero">
        <div className="container">
          <p className="section-label" style={{ justifyContent: 'center' }}>Portfolio</p>
          <h1 className="section-title heading-gradient">Featured Projects</h1>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Real-world data projects spanning ML, analytics, ETL pipelines, and database engineering.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="project-filters">
            <Filter size={16} />
            <button
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All ({projects.length})
            </button>
            {roles.map((role) => (
              <button
                key={role.id}
                className={`filter-btn ${filter === role.id ? 'active' : ''}`}
                onClick={() => setFilter(role.id)}
              >
                {role.label}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filtered.map((project, i) => (
              <motion.article
                key={project.id}
                className="project-card card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.08 }}
              >
                <div className="project-top">
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                </div>
                <div className="project-bottom">
                  <div className="project-techs">
                    {project.tech.map((t) => (
                      <span key={t} className="project-tech">
                        {t}
                      </span>
                    ))}
                  </div>
                  {project.link !== '#' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      View <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
