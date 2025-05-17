import React, { useState } from 'react'
import {MoodSelector} from './Components/MoodSelector'
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes ,Route} from 'react-router-dom';
import StatusBar from './Components/StatusBar';
import MoodTracker from './Components/MoodTracker';
import Home from './Components/Home';
const App = () => {
  const [mode,setMode] = useState(false);
  return (
    <>
      <Router>
        <Navbar mode={mode} setMode={setMode} />
        <StatusBar/>
          <Routes>
            <Route path='/' element={<Home mode={mode} setMode={setMode}/>} />
          </Routes>
      </Router>
    </>
  )
}

export default App
