import React, { useState } from 'react';
import ReorderIcon from '@material-ui/icons/Reorder';
import { useNavigate, useLocation } from 'react-router-dom';
import { animateScroll as scroll, scroller } from 'react-scroll';
import '../styles/Navbar.css';

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Ensure this path is correct
    link.download = 'Caina_Allivia_Resume.pdf'; // Filename for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleNavigation = (sectionId) => {
    if (location.pathname !== '/') {
      // Navigate to home page
      navigate('/');
      // Scroll to the section after navigation
      setTimeout(() => {
        scroller.scrollTo(sectionId, {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart'
        });
      }, 500); // Delay to ensure the page is fully loaded before scrolling
    } else {
      // Directly scroll if already on the home page
      scroller.scrollTo(sectionId, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });
    }
  };

  return (
    <div className={`navbar ${expandNavbar ? "open" : "close"}`}>
      <div className="toggleButton">
        <button onClick={() => setExpandNavbar(prev => !prev)}>
          <ReorderIcon />
        </button>
      </div>
      <div className='links'>
        <a onClick={() => handleNavigation('home')} className="nav-link">
          <span style={{ color: 'white' }}>01.</span> Home
        </a>
        <a onClick={() => handleNavigation('projects')} className="nav-link">
          <span style={{ color: 'white' }}>02.</span> Projects
        </a>
        <a onClick={() => handleNavigation('certifications')} className="nav-link">
          <span style={{ color: 'white' }}>03.</span> Certifications
        </a>
        <a onClick={() => handleNavigation('contact')} className="nav-link">
          <span style={{ color: 'white' }}>04.</span> Contact
        </a>
        <button onClick={downloadResume} className="resume-button">DOWNLOAD RESUME</button>
      </div>
    </div>
  );
}

export default Navbar;
