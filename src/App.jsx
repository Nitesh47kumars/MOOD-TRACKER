import React, { useState, useEffect } from 'react';
import { MoodSelector } from './Components/MoodSelector';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StatusBar from './Components/StatusBar';
import MoodTracker from './Components/MoodTracker';
import Home from './Components/Home';
import MoodHistory from './Components/MoodHistory';

const App = () => {
  const [mode, setMode] = useState(false);

  // Clear sessionStorage on full page reload
  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.clear(); // Or remove specific keys if needed
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <>
      <Router>
        <Navbar mode={mode} setMode={setMode} />
        <StatusBar />
        <Routes>
          <Route path='/' element={<Home mode={mode} setMode={setMode} />} />
          <Route path='/history' element={<MoodHistory />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
