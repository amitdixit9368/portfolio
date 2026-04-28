import React from 'react';
import { motion } from 'framer-motion';
import {
  FaCode,
  FaCss3Alt,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJsSquare,
  FaMobileAlt,
  FaNodeJs,
  FaPhp,
  FaReact,
  FaServer,
  FaWordpress,
} from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'HTML5', level: 85, levelText: 'Advanced', icon: <FaHtml5 />, color: '#e34f26' },
    { name: 'CSS3', level: 92, levelText: 'Advanced', icon: <FaCss3Alt />, color: '#1572b6' },
    { name: 'JavaScript', level: 65, levelText: 'Good', icon: <FaJsSquare />, color: '#f7df1e' },
    { name: 'React', level: 60, levelText: 'Medium', icon: <FaReact />, color: '#61dafb' },
    { name: 'Responsive UI', level: 70, levelText: 'Good', icon: <FaMobileAlt />, color: '#22c55e' },
    { name: 'WordPress', level: 88, levelText: 'Strong', icon: <FaWordpress />, color: '#21759b' },
    { name: 'PHP', level: 82, levelText: 'Strong', icon: <FaPhp />, color: '#777bb4' },
    { name: 'MySQL', level: 76, levelText: 'Working Knowledge', icon: <FaDatabase />, color: '#00758f' },
    { name: 'REST APIs', level: 55, levelText: 'Theoretical Knowledge', icon: <FaCode />, color: '#8b5cf6' },
    { name: 'Deployment', level: 74, levelText: 'Working Knowledge', icon: <FaServer />, color: '#0ea5e9' },
    { name: 'Git', level: 64, levelText: 'Strong', icon: <FaGitAlt />, color: '#f05032' },
    { name: 'GitHub', level: 72, levelText: 'Strong', icon: <FaGithub />, color: '#333333' },
  ];

  const categories = [
    {
      title: 'Frontend',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Responsive UI'],
    },
    {
      title: 'WordPress + PHP',
      skills: ['WordPress', 'PHP', 'MySQL'],
    },
    {
      title: 'Backend + APIs',
      skills: ['REST APIs', 'Node.js', 'Deployment'],
    },
    {
      title: 'Tools',
      skills: ['Git', 'GitHub'],
    },
  ];

  return (
    <motion.section
      className="skills"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      data-aos="fade-up"
    >
      <div className="skills-content">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          data-aos="fade-up"
        >
          Technical Skills
        </motion.h2>

        <div className="skills-categories">
          {categories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              className="category-section"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 + catIndex * 0.2, duration: 0.8 }}
              data-aos="fade-up"
              data-aos-delay={catIndex * 200}
            >
              <h3>{category.title}</h3>
              <div className="category-skills">
                {skills
                  .filter((skill) => category.skills.includes(skill.name))
                  .map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="skill-header">
                        <div className="skill-icon" style={{ color: skill.color }}>
                          {skill.icon}
                        </div>
                        <div className="skill-info">
                          <div className="skill-name">{skill.name}</div>
                          <div className="skill-percentage">{skill.levelText}</div>
                        </div>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-fill"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ delay: 0.8 + index * 0.1, duration: 1 }}
                          style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)` }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
