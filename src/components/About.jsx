import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaUsers } from 'react-icons/fa';
import { SEOHead } from '../utils/SEO';
import './About.css';

const About = () => {
  const stats = [
    { icon: <FaCode />, number: '50+', label: 'Projects Completed' },
    { icon: <FaRocket />, number: '3+', label: 'Years Experience' },
    { icon: <FaUsers />, number: '100+', label: 'Happy Clients' }
  ];

  return (
    <>
      <SEOHead 
        title="About Me - Amit Dixit | Full Stack Developer"
        description="Learn about Amit Dixit, a passionate Full Stack Developer with 3+ years of experience. I specialize in React, Node.js, and building scalable web applications."
        keywords="about, developer, experience, skills, full stack"
        ogImage="https://amitdixit9368.github.io/portfolio/og-about.jpg"
        url="https://amitdixit9368.github.io/portfolio/about"
      />
      <motion.section
        className="about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        data-aos="fade-up"
      >
      <div className="about-content">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          data-aos="fade-up"
        >
          About Me
        </motion.h2>
        
        <div className="about-grid">
          <motion.div
            className="about-text"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            data-aos="fade-right"
          >
            <p>
              I'm a passionate full-stack developer with over 3 years of experience creating
              digital solutions that make a difference. My journey in tech started with curiosity
              and has evolved into a career dedicated to crafting exceptional user experiences.
            </p>
            <p>
              I specialize in modern web technologies, with expertise in React, Node.js, and cloud
              platforms. I love turning complex problems into simple, beautiful designs.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to
              open-source projects, or sharing knowledge with the developer community.
            </p>
          </motion.div>
          
          <motion.div
            className="stats-grid"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            data-aos="fade-left"
          >
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="about-advanced"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h3>Career Snapshot</h3>
          <div className="snapshot-grid">
            {[
              {
                title: `${new Date().getFullYear() - 2021}+ Years`,
                subtitle: 'Professional experience',
              },
              {
                title: '90+ Projects',
                subtitle: 'Delivered across industries',
              },
              {
                title: '150+ Commits',
                subtitle: 'Open-source progress',
              },
              {
                title: '5+ Certifications',
                subtitle: 'Modern dev credentials',
              },
            ].map((item, index) => (
              <div key={index} className="snapshot-card">
                <h4>{item.title}</h4>
                <p>{item.subtitle}</p>
              </div>
            ))}
          </div>

          <div className="skill-progress">
            <h4>Modern Skill Impact</h4>
            {[
              { technology: 'React + TypeScript', level: 95 },
              { technology: 'Node.js + Express', level: 90 },
              { technology: 'GraphQL + REST API', level: 85 },
              { technology: 'AWS / GCP / Azure', level: 80 },
              { technology: 'CI/CD & DevOps', level: 82 },
            ].map((skill, index) => (
              <div key={index} className="progress-item">
                <div className="progress-header">
                  <span>{skill.technology}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="progress-bar">
                  <motion.div
                    className="progress-filled"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2, delay: index * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="timeline-context">
            <h4>What I’m focusing on now</h4>
            <ul>
              <li>Building scalable micro-frontends for enterprise SaaS</li>
              <li>Adopting cloud-native patterns with IaC (Terraform)</li>
              <li>Improving app performance using Web Vitals and Lighthouse</li>
              <li>Sharing knowledge: tech blogs and community workshops</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.section>
    </>
  );
};

export default About;