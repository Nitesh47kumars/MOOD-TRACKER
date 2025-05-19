import React, { useState } from 'react';
import './Calender.css'
import { useAnimation } from './useAnimation';

function SimpleCalendar({theme, selectedDate, setSelectedDate,  markedDates = [] }) {

  const animate = useAnimation("calendar");
  const [date, setDate] = useState(new Date());

  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const monthName = date.toLocaleString('default', { month: 'long' });

  const dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];


  function prevMonth() {
    setDate(new Date(year, month - 1, 1));
  }

  function nextMonth() {
    setDate(new Date(year, month + 1, 1));
  }


  const days = [];

  for (let i = 0; i < firstDay; i++) {
    days.push(<div key={'blank-' + i} className="day blank" />);
  }

  for (let i = 1; i <= daysInMonth; i++) {

    const currentDate = new Date(year, month, i).toDateString();
    const isMarked = markedDates.includes(currentDate);
 
    const isSelected =

      selectedDate?.getFullYear() === year &&
      selectedDate?.getMonth() === month &&
      selectedDate?.getDate() === i;


    const handleClick = () =>{
      setSelectedDate(new Date(year,month ,i));
    }

    days.push(
        <div key={i} className={`day ${isSelected ? 'selected' : ''} ${isMarked ? "marked" :""}`} onClick={()=>handleClick()} >{i}</div>
    )

  }

  return (
      <div className={`calendar ${animate? "animate" : ""} ${theme ? "dark" :""} textarea-like-border`}>

        <div className='calender-head'>
          
          <h2>Select The Date</h2>
          <p>Choose the date for your Mood Entry</p>

        </div>
        
        <div className="calendar-header">

          <button onClick={prevMonth}>{'<'}</button>
          <span>{monthName} {year}</span>
          <button onClick={nextMonth}>{'>'}</button>

        </div>

        <div className="calendar-weekdays">
          
          {dayName.map((day) => (
            <div key={day} className="weekday">{day}</div>
          ))}

        </div>

        <div className="calendar-days">{days}</div>
        
      </div>
  );
}

export default SimpleCalendar;
