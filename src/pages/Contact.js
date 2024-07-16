import React from 'react';
import '../styles/contact.css';

function Contact() {
  return (
    <div className='box'>
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
    </div>
  );
}

export default Contact;
