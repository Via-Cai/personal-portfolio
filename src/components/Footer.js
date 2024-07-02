import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import "../styles/Footer.css";
import React from 'react'


function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <a href = "https://www.linkedin.com/" target="_blank"><LinkedInIcon /></a>
            <a href = "https://github.com/Llivi-Jaaz" target="_blank"><GitHubIcon /></a>
            <a href = "mailto:llivicaina@gmail.com" target="_blank"><EmailIcon /></a>
        </div>
        <p> 09764774893 | llivicaina@gmail.com <br></br> &copy; 2024 vercel.com </p>
    </div>
  )
}

export default Footer