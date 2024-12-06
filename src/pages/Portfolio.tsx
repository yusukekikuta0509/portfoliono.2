import { motion } from 'framer-motion';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Portfolio() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="flex-grow overflow-y-auto snap-y snap-mandatory">
        {/* About Section */}
        <section id="about" className="min-h-screen w-full snap-start text-left">
          <motion.div
            className="flex flex-col justify-start pl-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <About />
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen w-full snap-start text-left">
          <motion.div
            className="flex flex-col justify-start pl-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Skills />
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen w-full snap-start text-left">
          <motion.div
            className="flex flex-col justify-start pl-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Projects />
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen w-full snap-start text-left">
          <motion.div
            className="flex flex-col justify-start pl-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Contact />
          </motion.div>
        </section>
      </div>

      {/* Footer Section */}
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
}

export default Portfolio;
