import React, { useState } from 'react'
import { MoodSelector } from './MoodSelector'
import Calender from './Calender'
import MoodTracker from './MoodTracker'

const Home = ({mode,setMode}) => {
  const [selectMood, setSelectMood] = useState("");
  const [selectedDate,setSelectedDate] = useState(new Date());

  return (
    <>
      <div className='container'>
        <div className='row'>
            <div className='col-6'>
                <Calender selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
            </div>
            <div className='col-6'>
                <div className=''>
                    <MoodSelector selectMood={selectMood} setSelectMood={setSelectMood}/>
                    <MoodTracker selectedMood={selectMood}/>
                </div>
            </div>
        </div>


      </div>
    </>
  )
}

export default Home
