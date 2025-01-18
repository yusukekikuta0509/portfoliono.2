import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa'; // GitHub アイコン
import { SiZenn } from 'react-icons/si'; // Zenn アイコン
import ScrollSection from './ScrollSection';
import React from 'react';
import profileImage from '/IMG_1012.jpg';

const About = () => {
  return (
    <>
      <ScrollSection>
        <section id="about" className="py-20">
          <motion.div
            className="max-w-4xl px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="about-container mb-12">
              {/* About Me タイトルとプロフィール画像 */}
              <h2 className="text-4xl md:text-5xl font-display font-medium text-accent">About Me</h2>
              <img
                 src={profileImage} // 変更: public フォルダ内のパス
                alt="Yusuke Kikuta"
                className="profile-image"
              />
            </div>

            {/* GitHub と Zenn のアイコン */}
            <div className="flex justify-center space-x-6 mb-12">
              <a
                href="https://github.com/yusukekikuta0509"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaGithub />
              </a>
              <a
                href="https://zenn.dev/yusukekikuta"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <SiZenn />
              </a>
            </div>

            {/* 自己紹介 */}
            <div className="bg-background/30 p-6 rounded-lg">
              <h3 className="text-2xl md:text-3xl text-accent mb-6 font-jp font-medium">自己紹介</h3>
              <div className="space-y-8">
                <p className="font-jp text-lg md:text-xl leading-relaxed text-text font-light">
                  初めまして菊田佑輔です。
                  <br />株式会社A.I Consultingのシステムエンジニアとして働いており、
                  <br />弊社の事業家インターン生の技術的補佐や
                  <br />B2Bのシステム受託開発運用を主に行っております。
                  <br />幼い頃から芸術に触れてきたことによる感性と共感性の能力を発揮して
                  <br />webアプリケーションのフロントエンド開発を行うのが好きです。
                </p>
                <p className="text-base md:text-lg text-text/80">
                  Hello, my name is Yusuke Kikuta. I'm a front-end engineer born in 2005, currently based in Saitama, Japan.
                  I enrolled in the Department of Music at Nihon University College of Art in the spring of 2024 but am currently on a leave of absence. Since the fall of 2024, I have been working as a system engineering intern. My main responsibilities include providing technical support for our entrepreneurial interns and managing system development and operations for contracted projects.
                  
                  Having been exposed to art from a young age, I've developed a strong sense of creativity and empathy, which I enjoy applying to front-end development for web applications. While I'm still young and growing, I look forward to working with you.
                  
                  Thank you for your kind consideration!
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </ScrollSection>
    </>
  );
};

export default About;
