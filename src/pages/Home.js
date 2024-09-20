import React, { useState } from 'react';
import "../styles/Home.css";
import "../styles/Projects.css";
import "../styles/certs.css";
import "../styles/divider.css";

function CombinedPage() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState('');

  const openLightbox = (imgSrc) => {
    setLightboxImage(imgSrc);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  return (
    <div className='combined-page'>
      <div id="home" className='home'>
        <div className='about'>
          <img src='/prof4.jpg' alt='Profile' className='profile-picture' />
          <h3>Hi, my name is</h3>
          <h2>~VIA CAIÑA~</h2>
          <h4>Business Intelligence Analyst & Developer</h4>
          <div className='prompt'>
            <p>
              A <b>Computer Engineering</b> fresh graduate of Adamson University. I am currently
              focusing on Data Analytics, Data Engineering and Data Visualization using Excel, Python, PostgreSQL, NoSQL and Power BI.
            </p>
          </div>
          <div className='logos'>
            <img src='/logos/excel.png' alt='Excel Logo' />
            <img src='/logos/python.png' alt='Python Logo' />
            <img src='/logos/sql.png' alt='SQL Logo' />
            <img src='/logos/mongo.png' alt='Mongo Logo' />
            <img src='/logos/powerbi.png' alt='Power BI Logo' />
            <img src='/logos/github.png' alt='GitHub Logo' />
          </div>
        </div>
      </div>
      <div class="divider-wrapper">
          <img src="/divider1.png" alt="Divider" class="divider" />
      </div>

      <div id="projects" className='portfolio'>
        <h1>My Projects</h1>
        <p><b>DATA</b> tells a story, and <b>DESIGN</b> gives a voice.<br></br>My goal is to transform raw and unclean information into meaningful insights,<br></br> crafting stunning visuals that not only inform but inspire action.</p>
        <div className='cards-container'>
          <div className='card'>
            <a href='project1' className='card-link'>
              <div className='card-content'>
              <img src="sales.png" alt="sales" class="sales" />
                <h2>COMPANY SALES REPORT DASHBOARD FOR 2014-2017</h2>
                <p>Excel and PowerBI</p>
                <button type='button'>Click to open</button>
              </div>
            </a>
          </div>
          <div className='card'>
            <a href='project2' className='card-link'>
              <div className='card-content'>
                <h2>TWO-WEEK TEMPERATURE ANALYSIS AND DATA VISUALIZATION IN PASAY CITY</h2>
                <p>Python Libraries - Pandas, Seaborn & Matplotlib</p>
                <button type='button'>Click to open</button>
              </div>
            </a>
          </div>
          <div className='card'>
            <a href='project3' className='card-link'>
              <div className='card-content'>
                <img src="proj3_1.png" alt="real_estate" class="sales" />
                <h2>REAL ESTATE AND PROPERTY MANAGEMENT DASHBOARD</h2>
                <p>Excel and Power BI</p>
                <button type='button'>Click to open</button>
              </div>
            </a>
          </div>
          <div className='card'>
            <a href='project4' className='card-link'>
              <div className='card-content'>
                <h2>HUMAN RESOURCE MANAGEMENT DASHBOARD FOR COMPANY TRACKING</h2>
                <p>Excel and Power BI</p>
                <button type='button'>Click to open</button>
              </div>
            </a>
          </div>
          <div className='card'>
            <a href='project4' className='card-link'>
              <div className='card-content'>
                <h2>SQL QUERIES</h2>
                <p>PostgresSQL</p>
                <button type='button'>Click to open</button>
              </div>
            </a>
          </div>
          <div className='card'>
            <a href='project4' className='card-link'>
              <div className='card-content'>
                <h2>Diabetes</h2>
                <p>Python</p>
                <button type='button'>Click to open</button>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="divider-wrapper">
  <img src="/divider1.png" alt="Divider" class="divider" />
</div>

<div id="certifications" className="certs">
  <h1>My Certificates</h1>
  <div className="image-container-horizontal">
    <img
      id="cert1"
      src="cert1.jpg"
      alt="Descriptive Alt Text"
      onClick={() => openLightbox('cert1.jpg')}
    />
    <img
      id="cert2"
      src="cert2.jpg"
      alt="Descriptive Alt Text"
      onClick={() => openLightbox('cert2.jpg')}
    />
    <img
      id="cert4"
      src="cert4.png"
      alt="Introduction to SQL"
      onClick={() => openLightbox('cert4.png')}
    />
    <img
      id="cert3"
      src="cert3.png"
      alt="Intermediate SQL"
      onClick={() => openLightbox('cert3.png')}
    />
  </div>

  {isLightboxOpen && (
    <div className="lightbox" onClick={closeLightbox}>
      <span className="close" onClick={closeLightbox}>&times;</span>
      <img className="lightbox-content" src={lightboxImage} alt="Zoomed Image" />
    </div>
  )}
</div>

      {/* <div class="divider-wrapper">
          <img src="/divider1.png" alt="Divider" class="divider" />
      </div>
      <div id="contact" className='box'>
        <div className='card'>
          <h1>Contact Me!</h1>
          <div className="form-group">
            <label htmlFor="FN">Full Name:</label>
            <input type="text" name="FN" placeholder="Full Name"/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" placeholder="Email"/>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea name="comment" form="usrform" placeholder="Enter text here..."></textarea>
          </div>
          <div className="form-group">
            <input type="submit" value="Get in touch" className="get-in-touch"/>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default CombinedPage;
