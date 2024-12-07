import { motion } from 'framer-motion';
import ScrollSection from './ScrollSection';
import React from 'react';
import appImage from '/App.png';

const Projects = () => {
  const projects = [
    {
      title: "Building an automation tool",
      description: "法人向けの営業メール自動送信ツールの開発に携わりました。Pythonを使用して営業文の送信、更新などを完全自動化させた、システム開発を行いました。",
      detailedDescription: "I was involved in developing a business automation tool for corporate clients. Using Python, I automated data collection, processing, and output, significantly improving operational efficiency.",
    },
    {
      title: "Weather App", 
      description: "APIを用いて、都市名を入力するとその都市名の現在の気温と天気を表示するWebアプリケーションの開発を行いました。",
      detailedDescription: "I worked on a weather app using APIs to provide accurate weather forecasts.",
      fontWeight: "font-light",
      imageUrl: appImage,
      link: "https://yusukekikuta0509.github.io/yusukewether/project/index.html",
    },
    // 他のプロジェクトを追加できます
  ];

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
            {projects.map((project, index) => (
              <div key={index} className="bg-background/30 p-6 rounded-lg">
                <h3 className={`text-2xl md:text-3xl text-accent mb-6 font-light`}>{project.title}</h3>
                <div className="flex items-start space-x-4 justify-between">
                  <div className="space-y-4 flex-1">
                    <p className="text-lg md:text-xl text-text font-noto-sans-jp font-light">{project.description}</p>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-2 mt-4 text-white bg-accent rounded-full hover:bg-accent-dark hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
                      >
                        View Project
                      </a>
                    )}
                    <p className="text-base md:text-lg text-text/80 font-noto-sans-jp font-light">{project.detailedDescription}</p>
                  </div>
                  {project.imageUrl && (
                    <img src={project.imageUrl} alt={project.title} className="w-1/2 h-auto rounded-lg shadow-lg mt-8 transform transition-transform duration-300 hover:scale-105" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </ScrollSection>
  );
};

export default Projects;
