import { motion } from 'framer-motion';
import { Award, GraduationCap } from 'lucide-react';
import { education, certifications } from '../data/resumeData';
import './Education.css';

export default function Education() {
  return (
    <div className="education-page">
      <div className="page-hero">
        <div className="container">
          <p className="section-label" style={{ justifyContent: 'center' }}>Education</p>
          <h1 className="section-title heading-gradient">Academic Background</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="edu-grid">
            {education.map((edu, i) => (
              <motion.div
                key={edu.title}
                className="edu-card card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <GraduationCap size={28} className="edu-icon" />
                <span className="edu-year">{edu.year}</span>
                <h3 className="edu-title">{edu.title}</h3>
                <p className="edu-institution">{edu.institution}</p>
                <span className="edu-badge">{edu.badge}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="section">
        <div className="container">
          <p className="section-label">Certifications</p>
          <h2 className="section-title heading-gradient">Credentials</h2>
          <div className="cert-grid">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                className="cert-card card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <Award size={22} className="cert-icon" />
                <div>
                  <h4 className="cert-name">{cert.name}</h4>
                  <p className="cert-issuer">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
