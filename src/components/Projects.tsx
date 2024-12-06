import { motion } from 'framer-motion';
import ScrollSection from './ScrollSection';
import React from 'react';

const Projects = () => {
  return (
    <ScrollSection>
      <section id="projects" className="py-20">
        <motion.div
          className="max-w-4xl px-4 pl-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-light text-accent mb-12">Projects</h2>
          <div className="space-y-8">
            {/* Project Card */}
            <div className="bg-background/30 p-6 rounded-lg">
              <h3 className="text-2xl md:text-3xl text-accent mb-6">Building an automation tool</h3>
              <div className="space-y-4">
                <p className="text-lg md:text-xl text-text font-noto-sans-jp">
                  法人向けの営業メール自動送信ツールの開発に携わりました。
                  <br />
                  Pythonを使用して営業文の送信、更新などを完全自動化させた、
                  <br />
                  システム開発を行いました。
                </p>
                <p className="text-base md:text-lg text-text/80">
                  I was involved in developing a business automation tool for corporate clients.
                  Using Python, I automated data collection, processing, and output,
                  significantly improving operational efficiency.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </ScrollSection>
  );
};

export default Projects;
