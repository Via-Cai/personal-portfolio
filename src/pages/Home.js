import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import "../styles/Home.css";

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h3>Hi, my name is</h3>
        <h2>Allivia Jaazielle Caiña.</h2>
        <div className='prompt'>
          <p>
            A Computer Engineering graduate from Adamson University. I am currently
            focusing on Web Development and Data Analytics using Excel, Python, SQL, and Power BI.
          </p>
          {/* <a href="https://www.linkedin.com/in/allivia-caina/" target="_blank" rel="noreferrer">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/Llivi-Jaaz" target="_blank" rel="noreferrer">
            <GitHubIcon />
          </a>
          <a href="mailto:llivicaina@gmail.com" target="_blank" rel="noreferrer">
            <EmailIcon />
          </a> */}
        </div>
        <div className='logos'>
          <img src='/logos/excel.png' alt='Excel Logo' />
          <img src='/logos/python.png' alt='Python Logo' />
          <img src='/logos/sql.png' alt='SQL Logo' />
          <img src='/logos/powerbi.png' alt='Power BI Logo' />
          <img src='/logos/github.png' alt='GitHub Logo' />
        </div>
      </div>
    </div>
  );
}

export default Home;
