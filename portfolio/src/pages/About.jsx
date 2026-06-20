import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Code2, Globe } from 'lucide-react';
import { profile } from '../data/resumeData';
import './About.css';

export default function About() {
  return (
    <div className="about-page">
      <div className="page-hero">
        <div className="container">
          <motion.p
            className="section-label"
            style={{ justifyContent: 'center' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            About Me
          </motion.p>
          <motion.h1
            className="section-title heading-gradient"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Turning Data Into Decisions
          </motion.h1>
        </div>
      </div>

      <section className="section">
        <div className="container about-grid">
          <motion.div
            className="about-image-wrap"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img src={profile.photo} alt={profile.name} className="about-photo" />
            <div className="about-image-frame" />
          </motion.div>

          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="about-heading">Hello, I'm {profile.firstName}</h2>
            <p className="about-text">{profile.summary}</p>
            <p className="about-text">{profile.about}</p>

            <div className="about-highlights">
              {['Data Analysis', 'Machine Learning', 'Power BI Dashboards', 'SQL Engineering'].map(
                (item) => (
                  <span key={item} className="highlight-tag">
                    {item}
                  </span>
                )
              )}
            </div>

            <div className="about-contact-list">
              <div className="about-contact-item">
                <MapPin size={18} />
                <span>{profile.location}</span>
              </div>
              <div className="about-contact-item">
                <Mail size={18} />
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </div>
              <div className="about-contact-item">
                <Phone size={18} />
                <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
              </div>
              <div className="about-contact-item">
                <Globe size={18} />
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn Profile
                </a>
              </div>
              <div className="about-contact-item">
                <Code2 size={18} />
                <a href={profile.github} target="_blank" rel="noreferrer">
                  GitHub Profile
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
