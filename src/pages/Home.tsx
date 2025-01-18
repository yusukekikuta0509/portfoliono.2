import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <div className="h-screen overflow-hidden">
      <div className="h-screen bg-background relative">
        <div className="h-full flex items-center justify-center px-4 relative">
          <motion.div 
            className="text-center relative z-10 -mt-20"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { 
                  duration: 0.5,
                  when: "beforeChildren",
                  staggerChildren: 0.3
                }
              }
            }}
          >
            <motion.h1 
              className="text-6xl md:text-7xl font-display font-medium tracking-wider mb-8"
              variants={itemVariants}
            >
              <span className="text-accent">YUSUKE</span>
              <span className="text-text"> KIKUTA</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-text/80 mb-16 font-sans font-light"
              variants={itemVariants}
            >
              Web Developer & Designer
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="mt-12"
            >
              <button 
                onClick={() => navigate('/portfolio')}
                className="inline-block border-2 border-accent text-accent px-8 py-3 rounded-full hover:bg-accent hover:text-background transition-colors duration-300 font-sans"
              >
                Explore My Work
              </button>
            </motion.div>
          </motion.div>
          
          {/* Background Animation */}
          <motion.div
            className="absolute inset-0 opacity-10"
            initial={{ scale: 1.2, rotate: 0 }}
            animate={{ 
              scale: 1,
              rotate: 360,
              transition: { 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-background transform rotate-45"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Home;
