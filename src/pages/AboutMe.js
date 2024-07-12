import React from 'react';
import '../styles/aboutme.css';

function AboutMe() {
  return (
    <div className='main'>
      <div className='aboutme'>
        <h2>I'm Via.</h2>
        <div className='title'>SKILLS</div>
        <div className='schools'>
          <img src='/logos/excel.png' alt='Excel Logo' />
          <img src='/logos/sql.png' alt='SQL Logo' />
          <img src='/logos/powerbi.png' alt='Power BI Logo' />
          <img src='/logos/github.png' alt='GitHub Logo' />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
