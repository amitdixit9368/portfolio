import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEOHead } from '../utils/SEO';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp, FaFileDownload } from 'react-icons/fa';
import './Contact.css';
import { FaThreads } from 'react-icons/fa6';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [selectedTemplateIndex, setSelectedTemplateIndex] = useState(null);

  const quickTemplates = [
    {
      label: 'Project consultation',
      value: 'Hi Amit, I have a product idea and need your help with architecture, timeline and estimate.'
    },
    {
      label: 'Website improvement',
      value: 'Hello, I am looking for a web developer to improve my website UI, speed, and responsive experience.'
    },
    {
      label: 'Role opportunity',
      value: 'Hi Amit, I would like to discuss a Web Developer or WordPress Developer opportunity with you.'
    }
  ];

  const contactDetails = [
    { icon: <FiMail />, title: 'Email', value: 'amitdixit9368@gmail.com', href: 'mailto:amitdixit9368@gmail.com' },
    { icon: <FiPhone />, title: 'Phone', value: '+91 95283 68232', href: 'tel:+919528368232' },
    { icon: <FaWhatsapp />, title: 'WhatsApp', value: '+91 95283 68232', href: 'https://wa.me/919528368232' },
    { icon: <FiMapPin />, title: 'Location', value: 'Noida Sector 28, Uttar Pradesh, India', href: 'https://goo.gl/maps/RzXW3Tz7Jxv' }
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, name: 'LinkedIn', href: 'https://www.linkedin.com/in/amit-kumar-dixit-2a648b2b0' },
    { icon: <FaGithub />, name: 'GitHub', href: 'https://github.com/amitdixit9368' },
    { icon: <FaThreads />, name: 'Threads', href: 'https://www.threads.net/@amit_dixit_22' },
    { icon: <FaInstagram />, name: 'Instagram', href: 'https://instagram.com/amit_dixit_22' },
    { icon: <FaWhatsapp />, name: 'WhatsApp', href: 'https://wa.me/919528368232' }
  ];


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const setQuickTemplate = (index) => {
    const selected = quickTemplates[index];
    setFormData((prev) => ({ ...prev, message: selected.value }));
    setSelectedTemplateIndex(index);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Using Formspree service
      const response = await fetch('https://formspree.io/f/xzdkyvwy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      if (response.ok) {
        setSubmitMessage('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitMessage(''), 5000);
      } else {
        setSubmitMessage('Error sending message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitMessage('Error sending message. Please try again.');
    }
    
    setIsSubmitting(false);
  };

  return (
    <>
      <SEOHead 
        title="Contact Me - Amit Dixit | Get In Touch"
        description="Get in touch with Amit Dixit for project inquiries, collaborations, or just to say hello! Fill out the contact form and I'll respond as soon as possible."
        keywords="contact, get in touch, hire developer, collaboration"
        ogImage="https://amitdixit9368.github.io/portfolio/og-contact.jpg"
        url="https://amitdixit9368.github.io/portfolio/contact"
      />
      <motion.section
        className="contact"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
      <div className="contact-content">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Get In Touch With Me
        </motion.h2>
        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <h3>Looking for a trusted developer?</h3>
            <p>Fast response within 24 hours. I am open to full-time, contract, and freelance work for web, frontend, and WordPress development.</p>

            <div className="contact-details">
              {contactDetails.map((item, idx) => (
                <a key={idx} className="contact-item" href={item.href} target="_blank" rel="noreferrer">
                  <div className="contact-icon">{item.icon}</div>
                  <div className="contact-text">
                    <h4>{item.title}</h4>
                    <p>{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <a
              className="resume-btn"
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download="Amit-Dixit-Web-development.pdf"
            >
              <FaFileDownload /> Download CV
            </a>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="quick-templates">
              <span>Quick templates:</span>
              <div className="template-buttons">
                {quickTemplates.map((template, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`template-btn ${selectedTemplateIndex === idx ? 'active' : ''}`}
                    onClick={() => setQuickTemplate(idx)}
                  >
                    {template.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {submitMessage && (
              <motion.div
                className={`submit-message ${submitMessage.includes('Error') ? 'error' : 'success'}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {submitMessage}
              </motion.div>
            )}

            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            <div className="form-socials" aria-label="Social media links">
              {socialLinks.map((item, idx) => (
                <a
                  key={idx}
                  className="form-social-link"
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.name}
                  title={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </motion.form>
        </div>
      </div>
    </motion.section>
    </>
  );
};

export default Contact;
