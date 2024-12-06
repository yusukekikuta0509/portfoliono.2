import React from 'react'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Loading from './components/Loading'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio';

function App({ isDarkMode, toggleDarkMode }: { isDarkMode: boolean; toggleDarkMode: () => void; }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <>
      {isLoading ? (
        <Loading key="loading" />
      ) : (
        <div className="bg-background text-text min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App
