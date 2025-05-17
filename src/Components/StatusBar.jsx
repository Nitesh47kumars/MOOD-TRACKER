import React from 'react'
import './StatusBar.css'
import {NavLink } from 'react-router-dom'

const StatusBar = () => {
  return (
    <>
      <div className='container-fluid'>
        <div className='container'>
            <section className='statusbar'>

            <NavLink to="/" className={({ isActive }) => isActive ? "active" : "tab"}>
                Track Mood
            </NavLink>

            <NavLink to="/history" className={({ isActive }) => isActive ? "active" : "tab"}>
                History
            </NavLink>

            <NavLink to="/stats" className={({ isActive }) => isActive ? "active" : "tab"}>
                Statistics
            </NavLink>

            </section>
        </div>
      </div>
    </>
  )
}

export default StatusBar
