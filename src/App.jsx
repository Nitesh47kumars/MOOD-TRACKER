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
  const [selectedMood, setSelectedMood] = useState("");

  useEffect(()=>{
    const body = document.body;

    body.classList.remove('lightTheme','darkTheme');

    body.classList.add(mode? "darkTheme" :"lightTheme");
  },[mode]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.clear();

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
        <StatusBar theme={mode} />
        <Routes>
          <Route path='/' element={<Home mode={mode} setMode={setMode} selectedMood={selectedMood} setSelectedMood={setSelectedMood} />} />
          <Route path='/history' element={<MoodHistory theme={mode} />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
