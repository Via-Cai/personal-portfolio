import React from 'react'
import '../styles/contact.css'

function Contact() {
  return (
    <div className='box'>
   
      <div className='card'>
        <h1>Contact Me!</h1>

          <div class="form-group">
          <label for="FN">Full Name:</label>
          <input type = "text" name ="FN" placeholder='Full Name'/>
          </div>

          <div class="form-group">
          <label for="email">Email:</label>
          <input type = "email" name ="email" placeholder='Email'/>
          </div>

          <div class="form-group">
          <label for="message">Message:</label>
          <textarea name="comment" form="usrform" placeholder='Enter text here...'></textarea>
          </div>

          <div class="form-group">
          <input type="submit" value="Get in touch" class="Get-in-touch"/>
         
          </div>

          
        </div>
    </div>
  )
}

export default Contact
