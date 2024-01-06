import React from 'react'
import '../styles/contact.css'

function Contact() {
  return (
    <div className='box'>
        <h1>Contact Me</h1>
        <div className='name'>
            <label for="FN">Name</label>
            <input type = "text" name ="FN"/>
            <label for="LN">Surname</label>
            <input type = "text" name ="LN"/>
        </div>
        
        <label for="phone_number">Phone Number</label>
        <input type = "text" name ="phone_number"/>
        <label for="email">Email</label>
        <input type = "email" name ="email"/>
        <input type="submit" value="Get in Touch"/>
    </div>
  )
}

export default Contact
