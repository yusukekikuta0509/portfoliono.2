import { motion } from 'framer-motion';
import ScrollSection from './ScrollSection';
import React from 'react';

const Contact = () => {
  return (
    <ScrollSection>
      <section id="contact" className="py-20">
        <motion.div
          className="max-w-6xl px-4 pl-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-light text-accent mb-12">Contact Me</h2>
          <div className="space-y-8">
            <div className="bg-background/30 p-6 rounded-lg">
              <div className="flex flex-col items-start space-y-6">
                <p className="text-lg md:text-xl text-text">
                  Feel free to reach out to me for any inquiries or collaboration opportunities.
                </p>
                <div className="flex flex-col space-y-2">
                  <span className="text-lg md:text-xl text-text">Email:</span>
                  <a
                    href="mailto:yusukekikuta.05@gmail.com"
                    className="text-lg md:text-xl text-accent hover:text-accent/80 transition-colors"
                  >
                    yusukekikuta.05@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </ScrollSection>
  );
};

export default Contact;
