import React from 'react'
import {useState} from 'react'
import ContactImg from '../assets/Contact.jpg'
import EmailImg from '../assets/mail.png'
import '../style/Contact.css'

function Contact() {

    const [formData, setFormData] = useState(
        {
            FirstName: '',
            LastName: '',
            Email: '',
            Subject: '',
            Message: ''
        }
    )

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        await fetch('http://localhost:5000/contact', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        alert('Submitted Successfully');

        setFormData({
            FirstName: '',
            LastName: '',
            Email: '',
            Subject: '',
            Message: ''
        })
    }

    return(
    <div id="Contact"  className='Contact-Text' >
        <h1>Get in touch</h1>
        <p>Want to transform your vision into reality? Let's connect.</p> 

        <div className='Contact'>

        <div className='GetInTouch-Content'>
            
            
            <img src={ContactImg} alt='Contact'/>
            

            <form className='Form-Content' onSubmit={handleSubmit}>

           
            <div className='Name-Row'>
            <input type='text' name='FirstName' placeholder='First Name' value={formData.FirstName} required onChange={handleChange}/>
          
            <input type='text' name='LastName' placeholder='Last Name' value={formData.LastName} required onChange={handleChange} />
            </div>

            <input type='email' name='Email' placeholder='Email' value={formData.Email} required  onChange={handleChange}/>
          
            <input type='text' name='Subject' placeholder='Subject' value={formData.Subject} required onChange={handleChange}  />
            
            <textarea name='Message' placeholder='Message' value={formData.Message} required onChange={handleChange} />
            
            
            <button type='submit'>Submit</button>

            </form>

            </div>
            </div>
            
            <div className='Email-Section'>
            <img src={EmailImg} alt='Email-Address'/><p>bawophapanyi@gmail.com</p>
            </div>
            </div>
        
        
    )
    
}
export default Contact