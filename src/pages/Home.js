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
        <h2>Allivia Caiña.</h2>
        <div className='prompt'>
          <p>A Computer Engineering graduate from Adamson University. I am currently
            focusing on Web Development (Front-end) and Data Analytics using Python.
          </p>
          <a href = "https://www.linkedin.com/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            <a href = "https://github.com/Llivi-Jaaz" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href = "mailto:llivicaina@gmail.com" target="_blank" rel="noreferrer"><EmailIcon /></a>
        </div>
      </div>
      {/* <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-end</h2>
            <span>Python, C++, JavaScript</span>
          </li>

          <li className='item'>
            <h2>Languages</h2>
            <span>Python, C++, JavaScript</span>
          </li>
        </ol>
      </div> */}
    </div>
  )
}

export default Home;