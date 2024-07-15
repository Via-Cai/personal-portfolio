import React from 'react';
import '../styles/Projects.css';

function Projects() {
  return (
    <div className='projects'>
      <h1>My Projects</h1>
      <div className='cards-container'>
        <div className='cards'>
          {/* Content for the first card */}
        </div>
        <div className='cards'>
          {/* Content for the second card */}
        </div>
        <div className='cards'>
          {/* Content for the third card */}
        </div>
      </div>
     <div className='title-container'>
      <h2>Monthly Visualization of Television Brand Sales Data</h2>
      <h2>Two-Week Temperature Analysis and Data Visualization in Pasay City</h2>
      <h2>Strategic Recommendations for Food and Beverage Offerings in New Store Locations</h2>
     </div>

     <div className='description-container'>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      
     </div>

    </div>
  );
}

export default Projects;
