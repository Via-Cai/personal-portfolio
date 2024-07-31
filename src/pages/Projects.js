import React from 'react';
import '../styles/Projects.css';

function Projects() {
  return (
    <div className='portfolio'>
      <h1>My Projects</h1>
      <p>These projects
        showcase my expertise in handling data through meticulous processes of cleaning, wrangling, analysis, and visualization.
      </p>
      <div className='cards-container'>
        <div className='card'>
          <a href='#' className='card-link'>
            <div className='card-content'>
              <h2>Plant Corporation Quantity Performance 2023</h2>
              <p>Description of project 1.</p>
            </div>
          </a>
        </div>
        <div className='card'>
          <a href='#' className='card-link'>
            <div className='card-content'>
              <h2>Two-Week Temperature Analysis and Data Visualization in Pasay City </h2>
              <p>Description of project 2.</p>
            </div>
          </a>
        </div>
        <div className='card'>
          <a href='#' className='card-link'>
            <div className='card-content'>
              <h2>Project 3</h2>
              <p>Description of project 3.</p>
            </div>
          </a>
        </div>
        {/* <div className='card'>
          <a href='#' className='card-link'>
            <div className='card-content'>
              <h2>Project 4</h2>
              <p>Description of project 4.</p>
            </div>
          </a>
        </div>
        <div className='card'>
          <a href='#' className='card-link'>
            <div className='card-content'>
              <h2>Project 5</h2>
              <p>Description of project 5.</p>
            </div>
          </a>
        </div>
        <div className='card'>
          <a href='#' className='card-link'>
            <div className='card-content'>
              <h2>Project 6</h2>
              <p>Description of project 6.</p>
            </div>
          </a>
        </div> */}
      </div>
    </div>
  );
}

export default Projects;
