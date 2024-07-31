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
    link.href = '/resume.pdf';
    link.download = 'Caina, Allivia - RESUME.pdf'; // The filename you want to save the file as
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <h2>Via Cai</h2>
      <div className="toggleButton">
        <button onClick={() => {
          setExpandNavbar(prev => !prev);
        }}>
          <ReorderIcon />
        </button>
      </div>
    
      <div className='links'>
        <NavLink to="/"  activeClassName="active-link">  <span style={{ color: 'white' }}>01.</span>Home </NavLink>
        <NavLink to="/projects" activeClassName="active-link">  <span style={{ color: 'white' }}>02.</span>Projects </NavLink>
        <NavLink to="/certifications" activeClassName="active-link">  <span style={{ color: 'white' }}>03.</span>Certifications </NavLink>
        <NavLink to="/contact"  activeClassName="active-link"><span style={{ color: 'white' }}>04.</span>Contacts </NavLink>
        <button onClick={downloadResume} className="resume-button">DOWNLOAD RESUME</button>
      </div>
    </div>
  );
}

export default Navbar;