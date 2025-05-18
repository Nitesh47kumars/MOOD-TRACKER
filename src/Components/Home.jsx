import React, { useState } from 'react'
import { MoodSelector } from './MoodSelector'
import Calender from './Calender'
import MoodTracker from './MoodTracker'

const Home = ({mode,setMode}) => {
  const [selectMood, setSelectMood] = useState("");
  const [selectedDate,setSelectedDate] = useState(new Date());

  return (
    <>
      <div className='container mt-4'>
        <div className='row'>
            <div className='col-6'>
                <Calender theme={mode} selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
            </div>
            <div className='col-6'>
                <div className=''>
                    <MoodSelector theme={mode} selectMood={selectMood} setSelectMood={setSelectMood}/>
                    <MoodTracker theme={mode} selectedMood={selectMood} setSelectedMood={setSelectMood} />
                </div>
            </div>
        </div>


      </div>
    </>
  )
}

export default Home
