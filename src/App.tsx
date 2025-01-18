import React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isEnglishMode, setIsEnglishMode] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-background text-text">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-accent border-opacity-50 mb-4"></div>
          <p className="text-lg font-medium font-serif">
            {isEnglishMode ? 'Loading...' : '読み込み中...'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-background text-text">
        <header className="flex justify-between items-center p-4">
          
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
