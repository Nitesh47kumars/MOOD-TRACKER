import React, { useState } from 'react'
import {MoodSelector} from './Components/MoodSelector'
const App = () => {
  const [selectMood,setSelectMood] = useState("");
  return (
    <>
      <div className='container-fluid'>
        <div className='container d-flex justify-content-center'>
          <MoodSelector selectedMood={selectMood} onSelectMood={setSelectMood} />
        </div>
      </div>
    </>
  )
}

export default App
