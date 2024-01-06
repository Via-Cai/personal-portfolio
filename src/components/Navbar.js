import React, { useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import '../styles/Navbar.css'
import ReorderIcon from '@material-ui/icons/Reorder'
import { useState } from 'react'

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button onClick={() => {
          setExpandNavbar(prev => !prev);
        }}>
          <ReorderIcon />
        </button>
      </div>
    
      <div className='links'>
        <NavLink to="/">  <span style={{ color: 'white' }}>01.</span>Home </NavLink>
        <NavLink to="/aboutme">  <span style={{ color: 'white' }}>02.</span>About </NavLink>
        {/* <NavLink to="/resume"> <span>01.</span> Resume </NavLink> */}
        <NavLink to="/projects">  <span style={{ color: 'white' }}>03.</span>Projects </NavLink>
        <NavLink to="/experience"> <span style={{ color: 'white' }}>04.</span>Experience </NavLink>
        <NavLink to="/contact"><span style={{ color: 'white' }}>05.</span>Contacts </NavLink>
      </div>
    </div>
  );
}

export default Navbar;