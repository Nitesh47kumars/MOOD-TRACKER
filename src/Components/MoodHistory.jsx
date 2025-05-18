import React, { useEffect, useState } from 'react'
import './MoodHistory.css'
import { useAnimation } from './useAnimation';

const MoodHistory = ({theme}) => {

  const animate = useAnimation()
  const dummyData = [
    { id: 1, mood: '😁 Amazing', date: 'May 16, 2025 10:30 AM', note: 'Great day at work!' },
    { id: 2, mood: '😔 bad', date: 'May 15, 2025 7:45 PM', note: 'Felt a bit low in the evening.' },
    { id: 3, mood: '😐 good', date: 'May 14, 2025 9:00 AM', note: 'Just an average morning.' },
  ];
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
