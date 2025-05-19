import React, { useEffect, useState } from 'react'
import '../CSSFiles/MoodHistory.css'
import { useAnimation } from './useAnimation';

const MoodHistory = ({theme}) => {

  const animate = useAnimation();
  const [entry,setEntry] = useState([]);

  useEffect(() =>{

    const saved = JSON.parse(localStorage.getItem('moodEntry'))|| [];
    setEntry(saved);

  },[]);

  const handleClearHistory = () => {

    if(confirm("Are you sure You want to clear All History")){
      localStorage.removeItem("moodEntry");
      setEntry([]);

    }
  }

  return (

    <>
      <div className='container'>
          <div className={`moodhistory ${animate? "animate" :""} ${theme ? "dark": ""}`}>

            <div className='moodhistory-header'>
              <h2>Mood History</h2>
              <button onClick={()=>handleClearHistory()}>ClearAllHistory</button>
            </div>

            <ul className='moodhistory-content'>
                {entry.length === 0 ? (
                    <p>No Past Data</p>
                )
                :
                (
                  entry.map((data,idx)=>(

                      <li key={idx} className='moodhistory-data'>
                          <span>{data.mood} - </span>
                          <span>{data.date}</span>
                          <p>{data.text}</p>
                      </li>
                  ))
                )}

            </ul>
          </div>
      </div>
    </>
  )
}

export default MoodHistory
