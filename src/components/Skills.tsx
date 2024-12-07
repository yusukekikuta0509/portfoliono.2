import { motion } from 'framer-motion';
import ScrollSection from './ScrollSection';
import React from 'react';

const Skills = () => {
  return (
    <ScrollSection>
      <section id="skills" className="py-20 bg-background/50">
        <motion.div
          className="max-w-4xl px-4 pl-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-light text-accent mb-12">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Programming Languages */}
            <div className="bg-background/30 p-6 rounded-lg">
              <h3 className="text-2xl md:text-3xl text-accent mb-6">Programming Languages</h3>
              <ul className="space-y-3 text-lg md:text-xl text-text">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Python</li>
                <li>PHP</li>
              </ul>
            </div>

            {/* Frontend Frameworks */}
            <div className="bg-background/30 p-6 rounded-lg">
              <h3 className="text-2xl md:text-3xl text-accent mb-6">Frontend Frameworks</h3>
              <ul className="space-y-3 text-lg md:text-xl text-text">
                <li>React</li>
                <li>Vite</li>
                <li>Framer Motion</li>
              </ul>
            </div>

            {/* Backend Frameworks */}
            <div className="bg-background/30 p-6 rounded-lg">
              <h3 className="text-2xl md:text-3xl text-accent mb-6">Backend Frameworks</h3>
              <ul className="space-y-3 text-lg md:text-xl text-text">
                <li>Django</li>
                <li>Flask</li>
              </ul>
            </div>

            {/* AI & Specialized Skills */}
            <div className="bg-background/30 p-6 rounded-lg">
              <h3 className="text-2xl md:text-3xl text-accent mb-6">AI & Specialized Skills</h3>
              <ul className="space-y-3 text-lg md:text-xl text-text">
                <li>Prompt Engineering</li>
                <li>AI Integration</li>
                <li>API Development & Integration</li>
              </ul>
            </div>

            {/* Other Skills */}
            <div className="bg-background/30 p-6 rounded-lg">
              <h3 className="text-2xl md:text-3xl text-accent mb-6">Other Skills</h3>
              <ul className="space-y-3 text-lg md:text-xl text-text">
                <li>Git/GitHub</li>
                <li>Database (MySQL)</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>
    </ScrollSection>
  );
};

export default Skills;
