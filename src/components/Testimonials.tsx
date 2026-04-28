import React from 'react';
import { motion } from 'framer-motion';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Virendra Singh',
    role: 'Founder & CEO',
    initials: 'VS',
    color: '#667eea',
    text: 'A remarkable developer. Delivered all features with excellent communication and quality.',
  },
  {
    name: 'Dileep Kumar Tekwani',
    role: 'CTO',
    initials: 'DT',
    color: '#764ba2',
    text: 'The architecture is scalable and maintainable. Clean component organization and great performance.',
  },
  {
    name: 'Vishal Sharma',
    role: 'UI/UX Specialist',
    initials: 'VS',
    color: '#f093fb',
    text: 'UI interactions are smooth, responsive and modern. The portfolio stands out with subtle micro-animations.',
  },
];

const Testimonials = () => {
  return (
    <motion.section
      className="testimonials"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      id="testimonials"
    >
      <div className="testimonials-content">
        <h2>Feedback</h2>
        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              className="testimonial-item"
              whileHover={{ y: -6 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <div className="testimonial-quote">"</div>
              <p>"{item.text}"</p>
              <div className="testimonial-author">
                <div
                  className="testimonial-avatar"
                  style={{ background: `linear-gradient(135deg, ${item.color}, ${item.color}99)` }}
                >
                  {item.initials}
                </div>
                <div>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
