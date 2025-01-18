import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Portfolio() {
  const sections = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          return scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <div className="flex flex-row min-h-screen bg-background relative">
      {/* Sidebar */}
      <motion.aside
        className="w-1/6 text-white fixed h-full flex flex-col justify-center items-center space-y-8"
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {sections.map((section) => (
          <motion.a
            key={section.id}
            href={`#${section.id}`}
            className={`text-lg font-medium transition-all duration-200 ${
              activeSection === section.id ? 'text-accent underline' : ''
            }`}
            whileHover={{ scale: 1.2 }}
          >
            {section.label}
          </motion.a>
        ))}
      </motion.aside>

      {/* Main Content */}
      <div className="flex-grow ml-[16.6667%] flex flex-col">
        <div className="flex-grow overflow-y-auto snap-y snap-mandatory">
          {/* Sections */}
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="min-h-screen flex items-center justify-center snap-start text-center"
            >
              <motion.div
                className="flex flex-col justify-center items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Render corresponding component */}
                {section.id === 'about' && <About />}
                {section.id === 'skills' && <Skills />}
                {section.id === 'projects' && <Projects />}
                {section.id === 'contact' && <Contact />}
              </motion.div>
            </section>
          ))}
        </div>

        {/* Footer Section */}
        <footer className="w-full text-white p-4 text-center">
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default Portfolio;
