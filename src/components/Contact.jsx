import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEOHead } from '../utils/SEO';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Using Formspree service
      const response = await fetch('https://formspree.io/f/xyzadmin', {
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
          Get In Touch
        </motion.h2>
        <motion.form
          onSubmit={handleSubmit}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
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
        </motion.form>
      </div>
    </motion.section>
    </>
  );
};

export default Contact;