import { motion } from 'framer-motion';
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 bg-background/30">
      <motion.div
        className="container mx-auto px-4 max-w-6xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <a
            href="https://github.com/yusukekikuta0509"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <p className="text-sm text-text/80">
            {currentYear} Yusuke Kikuta. All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
