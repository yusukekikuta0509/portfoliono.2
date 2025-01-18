import { motion, AnimatePresence } from 'framer-motion';
import ScrollSection from './ScrollSection';
import React, { useState } from 'react';
import appImage from '/App.png';
import appleImage from '/apple.png';
import defiImage from '/DeFi.png';
import emoImage from '/emo.png';
import majanImage from '/majan.png';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Apps', 'Tools'];

  const projects = [
    {
      category: 'Tools',
      title: "Building an automation tool",
      description: "",
      detailedDescription: "Pythonを使用して1日に2000通の営業メールをスクレイピングを用いて取得したURLリストから送信し、送信する段階でそれぞれのURLから販売戦略と顧客情報を分析させOpenAIのAPIを使用して動的にAIに文章をそれぞれの企業向けの文面に変更してもらう機能を開発しました。",
    },
    {
      category: 'Apps',
      title: "Weather App",
      description: "",
      detailedDescription: "APIを用いて、都市名を入力するとその都市名の現在の気温と天気を表示するWebアプリケーションの開発を行いました。",
      fontWeight: "font-light",
      imageUrl: appImage,
      appLink: "https://yusukekikuta0509.github.io/yusukewether/project/index.html",
    },
    {
      category: 'Tools',
      title: "Scraping Tool",
      description: "",
      detailedDescription: "Pythonとseleniumを使用してDeFi領域における各種指標データをEC2で運用し、cronで定期実行するスクレイピングツールを作成しました。",
      fontWeight: "font-light",
      zennLink: "https://zenn.dev/your_article_link",
    },
    {
      category: 'Apps',
      title: "Blockchain",
      description: "",
      detailedDescription: "Solflare, Phantom, MetaMaskに対応したブロックチェーンウォレット接続機能の実装を行いました。",
      fontWeight: "font-light",
      imageUrl: defiImage,
      zennLink: "https://zenn.dev/yusukekikuta/articles/ff1a61dfc23013",
    },
    {
      category: 'Apps',
      title: "Web App『EmoBooks』",
      description: "",
      detailedDescription: "Google Books APIを使用して、今の気分の本を推薦する『EmoBooks』をデプロイしました。",
      imageUrl: emoImage,
      zennLink: "https://zenn.dev/yusukekikuta/articles/aa0330899a6860",
      appLink: "https://mood-recomendation-onla.vercel.app/",
    },
    {
      category: 'Apps',
      title: "Web App『SwiftDeploy』",
      description: "",
      detailedDescription: "Vercelを使用して自動デプロイを実現する『SwiftDeploy』をリリースしました",
      zennLink: "https://zenn.dev/yusukekikuta/articles/64bdc85273eaf1",
      appLink: "https://webapp-khaki-ten.vercel.app/",
    },
    {
      category: 'Apps',
      title: "Web App 麻雀自動点数計算アプリ",
      description: "",
      detailedDescription: "ReactとTailWindを使用して、麻雀の点数計算を自動で行うアプリを作成しました。",
      imageUrl: majanImage,
      zennLink: "https://zenn.dev/yusukekikuta/articles/64bdc85273eaf1",
      appLink: "https://webapp-khaki-ten.vercel.app/",
    },
    {
      category: 'Apps',
      title: "Web App Financial Modeling Prep",
      description: "",
      detailedDescription: "株式会社ValueGlance様のインターンの試験として財務データフィルタリングアプリケーションを開発しました",
      imageUrl: appleImage,
      zennLink: "https://zenn.dev/yusukekikuta/articles/8759ded9c0d3ee",
      appLink: "https://apple-ctb8.vercel.app/",
    },
  ];

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const closePopup = () => setSelectedProject(null);

  return (
    <ScrollSection>
      <section id="projects" className="py-20">
        <motion.div
          className="max-w-5xl px-4 mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-roboto text-accent mb-12 text-center">Projects</h2>

          {/* Category Tabs */}
          <div className="flex justify-center mb-8 space-x-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium ${
                  activeCategory === category
                    ? 'bg-accent text-white'
                    : 'bg-gray-200 text-gray-800'
                } transition duration-300`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                className=" bg-background/30 p-6 rounded-lg shadow-lg transform transition duration-500 hover:shadow-xl"
                initial={{ opacity: 0, rotate: -15, x: -50 }}
                whileInView={{ opacity: 1, rotate: 0, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ rotateY: 360 }}
              >
                <div className="flex items-center justify-center mb-6">
                  <h3 className="text-xl md:text-2xl text-[#AF8C68] font-roboto font-light text-center">{project.title}</h3>
                </div>
                <div className="flex flex-col items-center space-y-4 justify-center">
                  <p className="text-base md:text-lg text-text font-noto-sans-jp font-light text-center">{project.description}</p>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-block px-6 py-2 mt-4 text-white bg-background/30 rounded-full hover:bg-background hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
                  >
                    Read More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Popup Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <motion.div
                className="bg-background p-8 rounded-lg shadow-lg max-w-3xl w-full"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <h3 className="text-3xl text-white mb-6 text-center font-roboto">{selectedProject.title}</h3>
                <p className="text-lg text-text mb-6 text-center">{selectedProject.detailedDescription}</p>
                {selectedProject.imageUrl && (
                  <img src={selectedProject.imageUrl} alt={selectedProject.title} className="w-full h-auto rounded-lg shadow-lg mb-6" />
                )}
                {selectedProject.appLink ? (
                  <a
                    href={selectedProject.appLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 text-white bg-accent rounded-full hover:bg-accent-dark hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
                  >
                    Open App
                  </a>
                ) : selectedProject.zennLink && (
                  <a
                    href={selectedProject.zennLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 text-white bg-accent rounded-full hover:bg-accent-dark hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
                  >
                    Read on Zenn
                  </a>
                )}
                <button
                  onClick={closePopup}
                  className="mt-6 px-6 py-2 text-white bg-gray-600 rounded-full hover:bg-gray-800 transition duration-300 ease-in-out"
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </ScrollSection>
  );
};

export default Projects;
