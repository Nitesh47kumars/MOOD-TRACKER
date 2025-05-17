import React, { useState } from 'react'
import {MoodSelector} from './Components/MoodSelector'
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes ,Route} from 'react-router-dom';
const App = () => {
  const [selectMood,setSelectMood] = useState("");
  const [mode,setMode] = useState(false);
  return (
    <>
      <Router>
        <Navbar mode={mode} setMode={setMode} />
          <Routes>
            <Route path='/' element={<MoodSelector selectedMood={selectMood} onSelectMood={setSelectMood} />} />
          </Routes>
      </Router>
    </>
  )
}

export default App
