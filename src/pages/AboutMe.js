import React from 'react'
import '../styles/aboutme.css'

function AboutMe() {
  return (
    <div className='main'>
      <div className='aboutme'>

        <div className='title'>EDUCATION</div>
        <div className='schools'>
          <h1>Adamson University </h1>
          <h3>Bachelor's Degree, Computer Engineering • 2020 - 2024</h3>
          
          <h1>Mapua University - Intramuros </h1>
          <h3>Senior High School, S.T.E.M • 2018- 2020</h3>

          <h1>De La Salle Araneta University </h1>
          <h3>Grade School and Junior High School • 2009 - 2018</h3>
        </div>

        <div className='title'>SKILLS</div>
          <div className='schools'>
            <h1>• Javascript</h1>
            <h1>• C++</h1>
            <h1>• Python</h1>
            <h1>• SQL</h1>
            <h1>• PowerBI</h1>
          </div>
      </div>
    </div>
  )
}

export default AboutMe