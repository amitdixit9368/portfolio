import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaRocket } from 'react-icons/fa';
import './CTA.css';

const CTA = () => {
  return (
    <motion.section
      className="cta-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="cta-background">
        <div className="cta-blob top"></div>
        <div className="cta-blob bottom"></div>
      </div>

      <div className="cta-content">
        <motion.div
          className="cta-text"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Need a Web Developer?</h2>
          <p>
            I am open to web developer, frontend developer, and WordPress developer opportunities.
            I can help with responsive UI, WordPress customization, PHP work, and API integrations.
          </p>
        </motion.div>

        <motion.div
          className="cta-buttons"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link to="/contact" className="cta-btn primary">
            Hire Me
            <FaRocket />
          </Link>
          <Link to="/projects" className="cta-btn secondary">
            View My Work
            <FaArrowRight />
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="cta-stats"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="stat">
          <h4>10+</h4>
          <p>Web Builds</p>
        </div>
        <div className="stat">
          <h4>1.5+</h4>
          <p>Years Experience</p>
        </div>
        <div className="stat">
          <h4>24h</h4>
          <p>Typical Response</p>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default CTA;
