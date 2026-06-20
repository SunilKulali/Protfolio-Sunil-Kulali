import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Code2,
  Globe,
  Mail,
  ChevronDown,
  User,
  Wrench,
  FolderKanban,
  Briefcase,
  GraduationCap,
  MessageSquare,
  Home as HomeIcon,
} from 'lucide-react';
import {
  profile,
  roles,
  projects,
  experience,
  education,
  certifications,
  skills,
} from '../data/resumeData';
import SectionPreview from '../components/SectionPreview';
import './Home.css';

const navItems = [
  { to: '/', label: 'Home', icon: HomeIcon },
  { to: '/about', label: 'About', icon: User },
  { to: '/skills', label: 'Skills', icon: Wrench },
  { to: '/projects', label: 'Projects', icon: FolderKanban },
  { to: '/experience', label: 'Experience', icon: Briefcase },
  { to: '/education', label: 'Education', icon: GraduationCap },
  { to: '/contact', label: 'Contact', icon: MessageSquare },
];

const featuredProjects = projects.slice(0, 3);
const featuredExperience = experience.slice(0, 2);
const topSkills = skills.da.slice(0, 4).flatMap((s) => s.tags.slice(0, 2));

export default function Home() {
  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="container hero-grid">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="hero-eyebrow">Data Professional Portfolio</p>
            <h1 className="hero-name">
              {profile.firstName}
              <span className="heading-gradient">{profile.lastName}</span>
            </h1>
            <p className="hero-role">{profile.title}</p>
            <p className="hero-desc">{profile.summary}</p>
            <div className="hero-actions">
              <Link to="/projects" className="btn-primary">
                View Projects <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn-outline">
                Get In Touch
              </Link>
            </div>
            <div className="hero-stats">
              {profile.stats.map((s) => (
                <div key={s.label} className="hero-stat">
                  <span className="hero-stat-num">{s.value}</span>
                  <span className="hero-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
            <div className="hero-social">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <Code2 size={20} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Globe size={20} />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="profile-card">
              <div className="profile-card-bar">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
                <span className="profile-card-title">profile.tsx</span>
              </div>
              <div className="profile-card-body">
                <img src={profile.photo} alt={profile.name} className="profile-photo" width={360} height={360} />
                <div className="profile-info-row">
                  <span>Status</span>
                  <span className="status-live">Open to Work</span>
                </div>
                <div className="profile-info-row">
                  <span>Location</span>
                  <span>{profile.location.split(',')[0]}</span>
                </div>
                <div className="profile-info-row">
                  <span>Focus</span>
                  <span>Data & Analytics</span>
                </div>
              </div>
            </div>
            <div className="float-badge badge-1">Python + SQL</div>
            <div className="float-badge badge-2">Power BI Expert</div>
          </motion.div>
        </div>
        <motion.div
          className="scroll-hint"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </section>

      {/* Quick Navigation */}
      <section className="quick-nav-section">
        <div className="container">
          <p className="section-label label-gold">Navigate</p>
          <h2 className="section-title heading-gradient">Explore My Portfolio</h2>
          <div className="quick-nav-grid">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.label} to={item.to} className="quick-nav-btn">
                  <Icon size={20} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* About Preview */}
      <SectionPreview
        id="about"
        label="About Me"
        title="Who I Am"
        subtitle="Passionate data professional turning complex datasets into business value."
        to="/about"
      >
        <div className="preview-about">
          <p>{profile.about}</p>
          <div className="preview-tags">
            {['Data Science', 'Machine Learning', 'Power BI', 'SQL'].map((tag) => (
              <span key={tag} className="preview-tag">{tag}</span>
            ))}
          </div>
        </div>
      </SectionPreview>

      <div className="divider" />

      {/* Skills Preview */}
      <SectionPreview
        id="skills"
        label="Skills"
        title="Technical Toolbox"
        subtitle="Python, SQL, Power BI, ML, and data engineering across four career paths."
        to="/skills"
      >
        <div className="preview-skills-grid">
          {skills.da.slice(0, 4).map((skill) => (
            <div key={skill.title} className="preview-skill-item">
              <h4>{skill.title}</h4>
              <div className="preview-tags">
                {skill.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="preview-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="preview-tags preview-tags-inline">
          {topSkills.map((tag) => (
            <span key={tag} className="preview-tag outline">{tag}</span>
          ))}
        </div>
      </SectionPreview>

      <div className="divider" />

      {/* Projects Preview */}
      <SectionPreview
        id="projects"
        label="Projects"
        title="Featured Work"
        subtitle="Real-world analytics, ML pipelines, and database systems."
        to="/projects"
      >
        <div className="preview-projects-grid">
          {featuredProjects.map((project) => (
            <article key={project.id} className="preview-project-card">
              <span className="preview-project-cat">{project.category}</span>
              <h4>{project.title}</h4>
              <p>{project.description.slice(0, 90)}...</p>
              <div className="preview-tags">
                {project.tech.slice(0, 3).map((t) => (
                  <span key={t} className="preview-tag small">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </SectionPreview>

      <div className="divider" />

      {/* Experience Preview */}
      <SectionPreview
        id="experience"
        label="Experience"
        title="Work History"
        subtitle="Hands-on internships in data analysis and SQL development."
        to="/experience"
      >
        <div className="preview-timeline">
          {featuredExperience.map((exp) => (
            <div key={`${exp.title}-${exp.company}`} className="preview-exp-item">
              <span className="preview-exp-year">{exp.year}</span>
              <div>
                <h4>{exp.title}</h4>
                <p className="preview-exp-co">{exp.company}</p>
                <p className="preview-exp-point">{exp.points[0]}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionPreview>

      <div className="divider" />

      {/* Education Preview */}
      <SectionPreview
        id="education"
        label="Education"
        title="Academic Background"
        subtitle="Strong foundation in computer science and data science."
        to="/education"
      >
        <div className="preview-edu-grid">
          {education.map((edu) => (
            <div key={edu.title} className="preview-edu-item">
              <span className="preview-exp-year">{edu.year}</span>
              <h4>{edu.title}</h4>
              <p>{edu.institution}</p>
              <span className="preview-tag">{edu.badge}</span>
            </div>
          ))}
        </div>
        <div className="preview-certs">
          <p className="preview-certs-label">Top Certifications</p>
          <div className="preview-tags">
            {certifications.slice(0, 3).map((c) => (
              <span key={c.name} className="preview-tag outline">{c.issuer}</span>
            ))}
          </div>
        </div>
      </SectionPreview>

      <div className="divider" />

      {/* Contact Preview */}
      <SectionPreview
        id="contact"
        label="Contact"
        title="Let's Connect"
        subtitle="Open to data analyst, BA, DE, and SQL developer opportunities."
        to="/contact"
        linkText="Get In Touch"
      >
        <div className="preview-contact-grid">
          <div className="preview-contact-item">
            <Mail size={18} />
            <div>
              <span>Email</span>
              <p>{profile.email}</p>
            </div>
          </div>
          <div className="preview-contact-item">
            <Globe size={18} />
            <div>
              <span>Location</span>
              <p>{profile.location}</p>
            </div>
          </div>
        </div>
      </SectionPreview>

      <div className="divider" />

      {/* Career Paths */}
      <section className="section roles-section">
        <div className="container">
          <p className="section-label label-gold">Career Paths</p>
          <h2 className="section-title heading-gradient">Four Roles, One Expert</h2>
          <p className="section-sub">
            Explore expertise across Data Analysis, Business Analysis, Data Engineering, and SQL Development.
          </p>
          <div className="roles-grid">
            {roles.map((role, i) => (
              <motion.div
                key={role.id}
                className="role-card card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
              >
                <div className="role-dot" style={{ background: role.color }} />
                <h3 className="role-label">{role.label}</h3>
                <p className="role-title">{role.title}</p>
                <p className="role-desc">{role.description.slice(0, 100)}...</p>
                <Link to={`/skills?role=${role.id}`} className="role-link">
                  Explore Skills <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
