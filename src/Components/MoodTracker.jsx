import React, { useState } from 'react'
import Calender from './Calender'
import './MoodTracker.css'

const MoodTracker = ({selectedMood}) => {
    const [msg,setMsg] = useState("");
    const [message,setMessage] = useState([]);

    const onSaveHandle = () =>{
        if(!msg.trim()) return;

        const newEntry = {
            mood : selectedMood,
            text: msg,
            date: new Date().toLocaleDateString()
        }

        setMessage([newEntry,...message]);
        setMsg("");
    };
  return (
    <>
      <div className='moodtracker'>
        <div className='moodtracker-header'>
          <h1>Jounral Entry</h1>
          <p>Your Selected Mood:<strong>{ selectedMood||" None"}</strong></p>
        </div>

        <div className='moodtracker-textarea'>
          <textarea 
          rows={5} 
          value={msg} onChange={(e)=>setMsg(e.target.value)} 
          placeholder='Write About Your Day...'
          />
          <button onClick={()=>onSaveHandle()} disabled={!msg.trim()}>Save Entry</button>
        </div>

      </div>
    </>
  )
}

export default MoodTracker
