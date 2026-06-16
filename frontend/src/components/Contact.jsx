import { useState, useEffect } from 'react'
import axios from 'axios' 

function Contacts(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [success, setSuccess] = useState(false)
    const handleSubmit = (e) => {
    e.preventDefault()  // stops page refresh
    axios.post("http://127.0.0.1:8000/api/contacts/", {
    name, email, message
    }).then(() => {
    setSuccess(true)
    setName('')
    setEmail('')
    setMessage('')
  })
}
return (
    <section id="contact" data-aos="fade-up">
    <h2>Contact Me</h2>
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input 
        type="email" 
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send Message</button>
      {success && <p>Message sent successfully!</p>}
    </form>
  </section>
)
}

export default Contacts