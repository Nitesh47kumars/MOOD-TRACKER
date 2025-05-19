import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = ({mode,setMode}) => {

  const onToggleClicked = () =>{
    setMode(!mode);
  }

  const darktheme= {
    backgroundColor: "black" ,
    color:"white"
  };
  
  const lighttheme={
  backgroundColor: "white" ,
  color:"black"
  };

  return (
    <>
      <nav className="navbar navbar-expand-md position-sticky top-0" style={mode? darktheme:lighttheme} >
        
        <div className='container-fluid'>
          
            <Link className='nav-brand navbar-title text-uppercase' to="/" style={mode?darktheme:lighttheme} >
             mood tracker</Link>

            <div className='toggle speed' onClick={()=>onToggleClicked()} style={{backgroundColor: `${mode? "green": "red"}`}}>

              <div className={`circle ${mode ? "ON" : "OFF"}`} style={{ color: mode ? "black" : "white" }}>
                <span>{`${mode? "ON" : "OFF"}`}</span>
              </div>

            </div>
        </div>

      </nav>
    </>
  )
}

export default Navbar
