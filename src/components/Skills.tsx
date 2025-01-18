import { motion } from 'framer-motion';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import ScrollSection from './ScrollSection';
import React, { useState } from 'react';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const Skills = () => {
  const categories = {
    "Programming Languages": {
      labels: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python', 'PHP'],
      data: [95, 90, 90, 80, 95, 50],
    },
    "Frontend Frameworks": {
      labels: ['React', 'Vite', 'Tailwind CSS', 'Next.js', 'Node.js', 'Framer Motion'],
      data: [90, 80, 90, 75, 70, 80],
    },
    "Backend Frameworks": {
      labels: ['Django', 'Flask', 'FastAPI'],
      data: [65, 80, 80],
    },
    "AI & Specialized Skills": {
      labels: ['Prompt Engineering', 'AI Integration', 'API Development & Integration'],
      data: [85, 80, 90],
    },
    "Other Skills": {
      labels: ['Git/GitHub', 'Database (MySQL)', 'AWS'],
      data: [90, 65, 90],
    },
  };

  const [activeCategory, setActiveCategory] = useState("Programming Languages");

  const data = {
    labels: categories[activeCategory].labels,
    datasets: [
      {
        label: 'Skill Level (%)',
        data: categories[activeCategory].data,
        backgroundColor: 'rgba(175, 140, 104, 0.2)', // 背景色をアクセントカラーに
        borderColor: 'rgba(175, 140, 104, 1)', // 線の色をアクセントカラーに
        borderWidth: 2,
        tension: 0.4,
        pointBackgroundColor: 'rgba(175, 140, 104, 1)',
        pointBorderColor: '#fff',
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // アスペクト比を無効化
    plugins: {
      legend: {
        labels: {
          color: 'rgba(255, 255, 255, 0.9)', // 凡例の文字色
        },
        position: 'top',
      },
      title: {
        display: true,
        text: `Skill Proficiency: ${activeCategory}`,
        color: 'rgba(255, 255, 255, 0.9)',
        font: {
          size: 16,
          weight: 'bold',
        },
      },
      tooltip: {
        backgroundColor: 'rgba(34, 34, 34, 0.8)',
        titleColor: '#FFFFFF',
        bodyColor: '#FFFFFF',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Skills',
          color: '#EAEAEA',
          font: {
            size: 14,
            weight: 'bold',
          },
        },
        ticks: {
          color: '#C0C0C0',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
      y: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: 'Proficiency (%)',
          color: '#EAEAEA',
          font: {
            size: 14,
            weight: 'bold',
          },
        },
        ticks: {
          color: '#C0C0C0',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
    },
  };

  return (
    <ScrollSection>
      <section id="skills" className="py-20 bg-background/50">
        <motion.div
          className="max-w-5xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-medium text-accent mb-12 text-center">Skills</h2>

          {/* カテゴリ選択ボタン */}
          <div className="flex justify-center space-x-4 mb-8">
            {Object.keys(categories).map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-lg shadow-lg font-medium ${
                  activeCategory === category ? 'bg-accent text-white' : 'bg-gray-200 text-gray-800'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* チャート */}
          <div className="bg-[#1B332A] shadow-lg rounded-lg p-20">
            <div className="relative h-[500px]"> {/* チャートサイズを指定 */}
              <Line data={data} options={options} />
            </div>
          </div>
        </motion.div>
      </section>
    </ScrollSection>
  );
};

export default Skills;
