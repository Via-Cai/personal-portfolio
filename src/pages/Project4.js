import React from 'react';
import "../styles/project1.css";

function Project4() {
  return (
    <div className='project1'>
      <div className='space'></div>
      <div className='pictures'>
        <h1>SQL QUERIES</h1>
        {/* Ensure the path to the PDF is correct and relative to the public folder */}
        <embed src="sql.pdf" width="800" height="600" type="application/pdf" />
      </div>
    </div>
  );
}

export default Project4;
