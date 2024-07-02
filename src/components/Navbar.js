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

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resumepdf.pdf'; 
    link.download = 'CAINA, ALLIVIA_RESUME.pdf'; // The filename you want to save the file as
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


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
        {/* <NavLink to="/resume"> <span>01.</span> Resume </NavLink>  */}
        <NavLink to="/projects">  <span style={{ color: 'white' }}>03.</span>Projects </NavLink>
        {/*<NavLink to="/experience"> <span style={{ color: 'white' }}>04.</span>Experience </NavLink> */}
        <NavLink to="/contact"><span style={{ color: 'white' }}>04.</span>Contacts </NavLink>
        <button onClick={downloadResume} className="resume-button">DOWNLOAD RESUME</button>
      </div>
    </div>
  );
}

export default Navbar;