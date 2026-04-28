import React from 'react';
import { motion } from 'framer-motion';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Virendra Singh',
    role: 'Founder & CEO',
    text: 'A remarkable developer. Delivered all features with excellent communication and quality.',
  },
  {
    name: 'Dileep Kumar Tekwani',
    role: 'CTO',
    text: 'The architecture is scalable and maintainable. Clean component organization and great performance.',
  },
  {
    name: 'Vishal Sharma',
    role: 'UI/UX Specialist',
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
            >
              <p>"{item.text}"</p>
              <h4>{item.name}</h4>
              <span>{item.role}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
