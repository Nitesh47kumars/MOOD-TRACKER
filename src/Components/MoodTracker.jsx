import React, { useEffect, useState } from 'react'
import Calender from './Calender'
import './MoodTracker.css'
import { useAnimation } from './useAnimation'

const MoodTracker = ({theme,selectedMood,setSelectedMood}) => {

  const animate = useAnimation("landingMoodTracker");

  const [msg,setMsg] = useState("");
  const [message,setMessage] = useState([]);

  const [clicked, setClicked] = useState(false); 



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
      setSelectedMood("")

      setClicked(true);
      setTimeout(() => {
      setClicked(false);
      }, 1000);
  };

  const getButtonText = () => {
    if (clicked) return "Your Mood is Added...";
    if (!selectedMood && !msg.trim()) return "Select mood and describe your day";
    if (selectedMood && !msg.trim()) return "Describe your day";
    if(!selectedMood && msg.trim()) return "Please select Your Mood"
    if (selectedMood && msg.trim()) return "Save Entry";
    return "Save Entry";
  }



  return (
    <>
      <div className={`moodtracker ${animate ? "animate" : ""} ${theme ? "dark" :""}`}>
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
          <button onClick={()=>onSaveHandle()} disabled={!msg.trim() || !selectedMood} className={clicked? "clicked" :""}>{getButtonText()}</button>
        </div>

      </div>
    </>
  )
}

export default MoodTracker
