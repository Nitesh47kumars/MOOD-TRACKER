import React from 'react'
import '../CSSFiles/StatusBar.css'
import {NavLink } from 'react-router-dom'
import { useAnimation } from './useAnimation'

const StatusBar = ({theme}) => {

  const animate = useAnimation("");

  return (
    <>
      <div className='container-fluid'>
        <div className='container'>

            <section className={`statusbar ${animate ? "animate" : ""} ${theme ? "dark" : ""}`}>

              <NavLink to="/" className={({ isActive }) => isActive ? "active " : "tab"}>
                  Track Mood
              </NavLink>

              <NavLink to="/history" className={({ isActive }) => isActive ? "active" : "tab"}>
                  History
              </NavLink>

            </section>
            
        </div>
      </div>
    </>
  )
}

export default StatusBar
