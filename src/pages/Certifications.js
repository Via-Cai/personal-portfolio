import React, { useState } from 'react';
import '../styles/certs.css';

function Certifications() {
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
    <div className='certs'>
      <h1>Certifications</h1>
      <div className="image-container">
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
          id="cert1"
          src="cert1.jpg"
          alt="Descriptive Alt Text"
          onClick={() => openLightbox('cert1.jpg')}
        />
      </div>
      {isLightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <span className="close" onClick={closeLightbox}>&times;</span>
          <img className="lightbox-content" src={lightboxImage} alt="Zoomed Image" />
        </div>
      )}
    </div>
  );
}

export default Certifications;
