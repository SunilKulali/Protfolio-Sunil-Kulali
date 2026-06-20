import { motion } from 'framer-motion';
import { experience } from '../data/resumeData';
import './Experience.css';

export default function Experience() {
  const uniqueExp = experience.filter(
    (exp, i, arr) => arr.findIndex((e) => e.title === exp.title && e.company === exp.company) === i
  );

  return (
    <div className="experience-page">
      <div className="page-hero">
        <div className="container">
          <p className="section-label" style={{ justifyContent: 'center' }}>Experience</p>
          <h1 className="section-title heading-gradient">Work History</h1>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Hands-on internship experience across data analysis, SQL development, and business reporting.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="timeline">
            {uniqueExp.map((exp, i) => (
              <motion.div
                key={`${exp.title}-${exp.company}`}
                className="timeline-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
              >
                <div className="timeline-dot" />
                <div className="timeline-card card">
                  <span className="timeline-year">{exp.year}</span>
                  <h3 className="timeline-title">{exp.title}</h3>
                  <p className="timeline-company">{exp.company}</p>
                  <ul className="timeline-points">
                    {exp.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
