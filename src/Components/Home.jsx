import React, { useState } from 'react'
import { MoodSelector } from './MOODSELECTORFILES/MoodSelector'
import Calender from './CALENDERFILES/Calender'
import MoodTracker from './MOODTRACKERFILES/MoodTracker'

const Home = ({mode,setMode}) => {

  const [selectMood, setSelectMood] = useState("");
  const [markedDates,setMarkedDates] = useState([]);

  const [selectedDate,setSelectedDate] = useState(new Date());

  return (
    <>
      <div className='container mt-4'>

        <div className='row'>
          
            <div className='col-6'>
                <Calender theme={mode} selectedDate={selectedDate} setSelectedDate={setSelectedDate} markedDates={markedDates}/>
            </div>

            <div className='col-6'>

                <div className=''>
                    <MoodSelector theme={mode} selectMood={selectMood} setSelectMood={setSelectMood}/>
                    <MoodTracker theme={mode} selectedMood={selectMood} setSelectedMood={setSelectMood} selectedDate={selectedDate} setMarkedDates={setMarkedDates}/>
                </div>

            </div>

        </div>

      </div>
    </>
  )
}

export default Home
