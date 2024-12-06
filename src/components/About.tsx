import { motion } from 'framer-motion';
import ScrollSection from './ScrollSection';
import React from 'react';

const About = () => {
  return (
    <>
      <ScrollSection>
        <section id="about" className="py-20">
          <motion.div
            className="max-w-4xl px-4 pl-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-medium text-accent mb-12">About Me</h2>
            <div className="bg-background/30 p-6 rounded-lg">
              <h3 className="text-2xl md:text-3xl text-accent mb-6 font-jp font-medium">自己紹介</h3>
              <div className="space-y-8">
                <p className="font-jp text-lg md:text-xl leading-relaxed text-text font-light">
                  初めまして菊田佑輔です。2005年生まれのさいたま在住のフロントエンドエンジニアです。
                  <br />
                  <br />現在は、2024年春に入学した日本大学芸術学部音楽学科を休学して
                  <br />2024年秋ごろからインターンとしてシステムエンジニアとして働いており、
                  <br />弊社の事業家インターン生の技術的補佐やシステムの受託開発運用を主に行っております。
                  <br />幼い頃から芸術に触れてきたことによる感性と共感性の能力を発揮して
                  <br />webアプリケーションのフロントエンド開発を行うのが好きです。
                  <br />まだまだ若い僕ですが何卒よろしくお願いいたします。
                </p>
                <p className="text-base md:text-lg text-text/80">
                  Hello, my name is Yusuke Kikuta. I'm a front-end engineer born in 2005, currently based in Saitama, Japan.
                  I enrolled in the Department of Music at Nihon University College of Art in the spring of 2024 but am currently on a leave of absence. Since the fall of 2024, I have been working as a system engineering intern. My main responsibilities include providing technical support for our entrepreneurial interns and managing system development and operations for contracted projects.
                  <br /><br />
                  Having been exposed to art from a young age, I've developed a strong sense of creativity and empathy, which I enjoy applying to front-end development for web applications. While I'm still young and growing, I look forward to working with you.
                  <br /><br />
                  Thank you for your kind consideration!
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </ScrollSection>

      <ScrollSection>
        <section id="background" className="py-20 bg-background/10">
          <motion.div
            className="max-w-4xl px-4 pl-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-medium text-accent mb-12">Background</h2>
            <div className="bg-background/30 p-6 rounded-lg">
              <h3 className="text-2xl md:text-3xl text-accent mb-6 font-jp font-medium">今までの自分</h3>
              <div className="space-y-8">
                <p className="font-jp text-lg md:text-xl leading-relaxed text-text font-light">
                  8歳からトランペットに触れて大学生になるまでは音楽を専門的に学んできました。
                  <br />中学受験を経て、音楽科のある高校へ入学して芸術学部に進学しました。
                  <br />
                  <br />大学に進学すると同時に一人暮らしを開始し、音楽で食べていく厳しい現実に
                  <br />直面したときにITキャリア転身を決意しました。
                  <br />その際にプログラミングと出会い、独学で学習を始めました。
                  <br />最初はP簡単なwebアプリケーションを作成し、HTML, CSS, JavaScriptを学習。
                  <br />そして、インターン合格までにPHP,その他フレームワークを学習しました。
                  <br />インターンに合格してから実務経験の中でpythonを使った法人向けシステムの開発と
                  <br />チーム開発を行いました。
                  <br />
                  <br />現在は音楽とプログラミング、両方の経験を活かしながら、
                  <br />ユーザーに寄り添った直感的なUIの開発を目指しています。
                </p>
                <p className="text-base md:text-lg text-text/80">
                  I started playing the trumpet at the age of eight and pursued a specialized education in music up until I entered university. After passing the junior high school entrance exam, I enrolled in a high school with a music department, which eventually led me to study in the College of Art.
                  <br /><br />
                  When I started university and began living on my own, I faced the harsh reality of making a living in music. This prompted me to make the decision to transition into an IT career. That's when I discovered programming and began teaching myself.
                  <br /><br />
                  I started by creating simple web applications and learning HTML, CSS, and JavaScript. Before securing my internship, I studied PHP and various frameworks. After getting the internship, I gained practical experience developing corporate systems using Python and participating in team development projects.
                  <br /><br />
                  Currently, I'm leveraging both my musical and programming experiences to develop intuitive UIs that truly resonate with users.
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
