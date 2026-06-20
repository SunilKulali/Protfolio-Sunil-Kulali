import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Code2, Database, BarChart3, Brain, Wrench, Search, FileText, Users,
  Table, GitBranch, Cloud, Layers, Zap, Server, PenTool,
} from 'lucide-react';
import { skills, roles } from '../data/resumeData';
import './Skills.css';

const iconMap = {
  python: Code2,
  database: Database,
  chart: BarChart3,
  brain: Brain,
  tools: Wrench,
  analysis: Search,
  search: Search,
  file: FileText,
  users: Users,
  excel: Table,
  pipeline: GitBranch,
  warehouse: Layers,
  bigdata: Server,
  cloud: Cloud,
  design: PenTool,
  code: Code2,
  speed: Zap,
  platform: Server,
};

export default function Skills() {
  const [searchParams] = useSearchParams();
  const initialRole = searchParams.get('role') || 'da';
  const [activeRole, setActiveRole] = useState(
    roles.find((r) => r.id === initialRole) ? initialRole : 'da'
  );

  const activeSkills = skills[activeRole] || skills.da;
  const activeRoleData = roles.find((r) => r.id === activeRole);

  return (
    <div className="skills-page">
      <div className="page-hero">
        <div className="container">
          <p className="section-label" style={{ justifyContent: 'center' }}>Technical Skills</p>
          <h1 className="section-title heading-gradient">My Toolbox</h1>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Select a career path to explore role-specific skills and technologies.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="role-tabs">
            {roles.map((role) => (
              <button
                key={role.id}
                className={`role-tab ${activeRole === role.id ? 'active' : ''}`}
                onClick={() => setActiveRole(role.id)}
                style={{
                  '--role-color': role.color,
                  borderColor: activeRole === role.id ? role.color : undefined,
                  color: activeRole === role.id ? role.color : undefined,
                }}
              >
                <span className="role-tab-dot" style={{ background: role.color }} />
                {role.label}
              </button>
            ))}
          </div>

          <motion.p
            key={activeRole}
            className="active-role-desc"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {activeRoleData?.title} — {activeRoleData?.description}
          </motion.p>

          <div className="skills-grid">
            {activeSkills.map((skill, i) => {
              const Icon = iconMap[skill.icon] || Code2;
              return (
                <motion.div
                  key={skill.title}
                  className="skill-card card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <div className="skill-icon">
                    <Icon size={22} />
                  </div>
                  <h3 className="skill-title">{skill.title}</h3>
                  <div className="skill-tags">
                    {skill.tags.map((tag) => (
                      <span key={tag} className="skill-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
