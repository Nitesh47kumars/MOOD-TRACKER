import React, { useState } from 'react'
import {MoodSelector} from './Components/MoodSelector'
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes ,Route} from 'react-router-dom';
import StatusBar from './Components/StatusBar';
const App = () => {
  const [selectMood,setSelectMood] = useState("");
  const [mode,setMode] = useState(false);
  return (
    <>
      <Router>
        <Navbar mode={mode} setMode={setMode} />
        <StatusBar/>
          <Routes>
            <Route path='/' element={<MoodSelector selectedMood={selectMood} onSelectMood={setSelectMood} />} />
          </Routes>
      </Router>
    </>
  )
}

export default App
