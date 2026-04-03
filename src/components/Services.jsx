import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaMobile, FaDatabase, FaServer, FaPalette, FaRocket } from 'react-icons/fa';
import { SEOHead } from '../utils/SEO';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaCode />,
      title: 'Web Development',
      description: 'Build responsive, scalable web applications using modern technologies like React, Node.js, and databases.',
      features: ['SPA Development', 'API Integration', 'Performance Optimization']
    },
    {
      id: 2,
      icon: <FaMobile />,
      title: 'Mobile Development',
      description: 'Create mobile-first designs and responsive applications that work seamlessly across all devices.',
      features: ['Responsive Design', 'Cross-browser Testing', 'Mobile Optimization']
    },
    {
      id: 3,
      icon: <FaDatabase />,
      title: 'Database Design',
      description: 'Design and optimize databases for performance, scalability, and data integrity.',
      features: ['Database Architecture', 'Query Optimization', 'Data Modeling']
    },
    {
      id: 4,
      icon: <FaServer />,
      title: 'Backend Development',
      description: 'Build robust server-side solutions with Node.js, Express, and cloud platforms.',
      features: ['RESTful APIs', 'Authentication', 'Server Management']
    },
    {
      id: 5,
      icon: <FaPalette />,
      title: 'UI/UX Design',
      description: 'Design beautiful, intuitive interfaces that provide excellent user experiences.',
      features: ['Wireframing', 'Prototyping', 'User Testing']
    },
    {
      id: 6,
      icon: <FaRocket />,
      title: 'Deployment & DevOps',
      description: 'Deploy applications on cloud platforms with CI/CD pipelines and continuous monitoring.',
      features: ['GitHub Actions', 'Docker', 'Cloud Deployment']
    }
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
        title="My Services - Amit Dixit | Web & App Development"
        description="Full-stack development services including web development, mobile development, database design, backend solutions, UI/UX design, and cloud deployment."
        keywords="web development, mobile development, backend services, database design, ui ux design, devops"
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
            <h2>My Services</h2>
            <p>Comprehensive solutions for your digital needs</p>
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
                    <li key={idx}>✓ {feature}</li>
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
