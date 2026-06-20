import { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Chatbot from './Chatbot';
import './Layout.css';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/education', label: 'Education' },
  { to: '/contact', label: 'Contact' },
];

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-grid" />
      <div className="bg-glow bg-glow-1" />
      <div className="bg-glow bg-glow-2" />

      <header className="header">
        <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
          SK<span>.</span>
        </Link>
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <a href="/profile.jpg" download className="nav-link nav-cta">
            Resume
          </a>
        </nav>
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      <main className="app-content">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container">
          &copy; 2025 <strong style={{ color: 'var(--yellow)' }}>Sunil Kulali</strong> — All rights
          reserved &nbsp;|&nbsp; Built with React from{' '}
          <a href="https://github.com/SunilKulali" target="_blank" rel="noreferrer">
            Bengaluru
          </a>
        </div>
      </footer>

      <Chatbot />
    </>
  );
}
