import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', level: 90, icon: <FaJsSquare />, color: '#f7df1e' },
    { name: 'React', level: 85, icon: <FaReact />, color: '#61dafb' },
    { name: 'Node.js', level: 80, icon: <FaNodeJs />, color: '#68a063' },
    { name: 'Python', level: 75, icon: <FaPython />, color: '#3776ab' },
    { name: 'HTML5', level: 95, icon: <FaHtml5 />, color: '#e34f26' },
    { name: 'CSS3', level: 90, icon: <FaCss3Alt />, color: '#1572b6' },
    { name: 'MongoDB', level: 70, icon: <FaDatabase />, color: '#47a248' },
    { name: 'Git', level: 85, icon: <FaGitAlt />, color: '#f05032' }
  ];

  const categories = [
    {
      title: 'Frontend',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Python', 'MongoDB']
    },
    {
      title: 'Tools',
      skills: ['Git']
    }
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
          My Skills
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
                  .filter(skill => category.skills.includes(skill.name))
                  .map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="skill-header">
                        <div className="skill-icon" style={{ color: skill.color }}>
                          {skill.icon}
                        </div>
                        <div className="skill-info">
                          <div className="skill-name">{skill.name}</div>
                          <div className="skill-percentage">{skill.level}%</div>
                        </div>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-fill"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ delay: 0.8 + index * 0.1, duration: 1 }}
                          style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)` }}
                        ></motion.div>
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