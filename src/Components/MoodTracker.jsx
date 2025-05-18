import React, { useEffect, useState } from 'react'
import Calender from './Calender'
import './MoodTracker.css'
import { useAnimation } from './useAnimation'

const MoodTracker = ({selectedMood}) => {

  const animate = useAnimation("landingMoodTracker");

  const [msg,setMsg] = useState("");
  const [message,setMessage] = useState([]);

  useEffect(()=>{
    const savedata = JSON.parse(localStorage.getItem("moodEntry"))|| []
    setMessage(savedata);
  },[]);

  const onSaveHandle = () =>{
      if(!msg.trim()) return;

      const newEntry = {
          mood : selectedMood,
          text: msg,
          date: new Date().toLocaleString()
      }
        


      const update = [newEntry,...message]
      localStorage.setItem("moodEntry",JSON.stringify(update))

      setMessage(update);
      setMsg("");
  };
  return (
    <>
      <div className={`moodtracker ${animate ? "animate" : ""}`}>
        <div className='moodtracker-header'>
          <h1>Journal Entry</h1>
          <p>Your Selected Mood:<strong>{ selectedMood||" None"}</strong></p>
        </div>

        <div className='moodtracker-textarea'>
          <textarea 
          rows={4} 
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
