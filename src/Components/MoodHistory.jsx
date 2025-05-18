import React from 'react'
import './MoodHistory.css'

const MoodHistory = () => {
  const dummyData = [
    { id: 1, mood: '😁 Amazing', date: 'May 16, 2025 10:30 AM', note: 'Great day at work!' },
    { id: 2, mood: '😔 bad', date: 'May 15, 2025 7:45 PM', note: 'Felt a bit low in the evening.' },
    { id: 3, mood: '😐 good', date: 'May 14, 2025 9:00 AM', note: 'Just an average morning.' },
  ];
  return (
    <>
        <div className='container'>
            <div className='moodhistory'>
                <h2>Mood History</h2>

                <ul className='moodhistory-content'>

                    {dummyData.map((data) =>(
                        <li key={data.id} className='moodhistory-data'>

                            <span>{data.mood} - </span>
                            <span>{data.date}</span>
                            <p>{data.note}</p>

                        </li>
                    ))}

                </ul>
            </div>
        </div>
    </>
  )
}

export default MoodHistory
