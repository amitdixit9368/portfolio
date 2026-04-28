import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaPlug, FaRocket, FaServer, FaTools, FaWordpress } from 'react-icons/fa';
import { SEOHead } from '../utils/SEO';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaCode />,
      title: 'Frontend Development',
      description: 'Responsive, accessible web interfaces built with HTML, CSS, JavaScript, React, and clean component structure.',
      features: ['Responsive layouts', 'React components', 'Performance-minded UI'],
    },
    {
      id: 2,
      icon: <FaWordpress />,
      title: 'WordPress Development',
      description: 'Custom WordPress work for business websites, including theme customization, plugin work, and content-focused pages.',
      features: ['Theme customization', 'Plugin development', 'Page speed fixes'],
    },
    {
      id: 3,
      icon: <FaPlug />,
      title: 'PHP & API Integration',
      description: 'Practical backend support for forms, dynamic content, REST APIs, third-party tools, and WordPress data flows.',
      features: ['REST API integration', 'Custom forms', 'Dynamic content'],
    },
    {
      id: 4,
      icon: <FaRocket />,
      title: 'Website Optimization',
      description: 'Improve loading speed, mobile experience, and Core Web Vitals with focused frontend and WordPress fixes.',
      features: ['Speed improvements', 'Mobile refinement', 'Code cleanup'],
    },
    {
      id: 5,
      icon: <FaTools />,
      title: 'Maintenance & Fixes',
      description: 'Reliable support for bug fixes, layout issues, plugin conflicts, content updates, and small feature requests.',
      features: ['Bug fixing', 'Site updates', 'Plugin support'],
    },
    {
      id: 6,
      icon: <FaServer />,
      title: 'Deployment Support',
      description: 'Project setup, deployment, hosting handoff, GitHub workflow basics, and simple documentation for future updates.',
      features: ['Build deployment', 'Hosting handoff', 'GitHub workflow'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <>
      <SEOHead
        title="Services - Amit Dixit | Web, WordPress & Frontend Development"
        description="Web development services including responsive frontend development, WordPress customization, PHP, REST API integrations, optimization, and deployment support."
        keywords="web development services, wordpress developer, react developer, php developer, api integration"
        ogImage="https://amitdixit9368.github.io/portfolio/og-services.jpg"
        url="https://amitdixit9368.github.io/portfolio/services"
      />
      <motion.section
        className="services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="services-content">
          <motion.div
            className="section-header"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h2>Services</h2>
            <p>Focused development support for websites, WordPress projects, and frontend roles</p>
          </motion.div>

          <motion.div
            className="services-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                className="service-card"
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(102, 126, 234, 0.2)' }}
                data-aos="fade-up"
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Services;
