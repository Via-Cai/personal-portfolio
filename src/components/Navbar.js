import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import ReorderIcon from '@material-ui/icons/Reorder';

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

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
        <button onClick={() => setExpandNavbar(prev => !prev)}>
          <ReorderIcon />
        </button>
      </div>
      <div className='links'>
        <a href="#home" className="nav-link">
          <span style={{ color: 'white' }}>01.</span> Home
        </a>
        <a href="#projects" className="nav-link">
          <span style={{ color: 'white' }}>02.</span> Projects
        </a>
        <a href="#certifications" className="nav-link">
          <span style={{ color: 'white' }}>03.</span> Certifications
        </a>
        <a href="#contact" className="nav-link">
          <span style={{ color: 'white' }}>04.</span> Contact
        </a>
        <button onClick={downloadResume} className="resume-button">DOWNLOAD RESUME</button>
      </div>
    </div>
  );
}

export default Navbar;
