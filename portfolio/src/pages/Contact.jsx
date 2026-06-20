import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Globe, Code2, Send, CheckCircle } from 'lucide-react';
import { profile } from '../data/resumeData';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const contactItems = [
    { icon: MapPin, label: 'Location', value: profile.location },
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { icon: Globe, label: 'LinkedIn', value: 'linkedin.com/in/sunilkulali', href: profile.linkedin },
    { icon: Code2, label: 'GitHub', value: 'github.com/SunilKulali', href: profile.github },
  ];

  return (
    <div className="contact-page">
      <div className="page-hero">
        <div className="container">
          <p className="section-label" style={{ justifyContent: 'center' }}>Contact</p>
          <h1 className="section-title heading-gradient">Let's Work Together</h1>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {contactItems.map((item) => (
              <div key={item.label} className="contact-item card">
                <div className="contact-icon">
                  <item.icon size={20} />
                </div>
                <div>
                  <span className="contact-label">{item.label}</span>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="contact-value">
                      {item.value}
                    </a>
                  ) : (
                    <span className="contact-value">{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.form
            className="contact-form card"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="form-title">Send a Message</h3>
            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                placeholder="What would you like to discuss?"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>
            <button type="submit" className="btn-primary form-submit">
              {sent ? (
                <>
                  <CheckCircle size={18} /> Opening Email...
                </>
              ) : (
                <>
                  Send Message <Send size={18} />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
