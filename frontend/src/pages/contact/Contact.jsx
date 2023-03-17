
import "./contact.scss"
import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import Loader from "../../components/microcomponents/loader/Loader";

const Contact = () => {

  const [message, setMessage] = useState(null)
  const [check, setCheck] = useState('We always like to hear a suggestion')
  const [colorStyle, setColorStyle] = useState('')
  const [loading, setLoading] = useState(false)


  const onChange = (e) => {
      setCheck('We always like to hear a suggestion')
      setColorStyle('')
      setMessage({ ...message, [e.target.name]: e.target.value })
  }
  const onClick = (e) => {
      e.preventDefault();
      setLoading(true)
      setCheck('We always like to hear a suggestion')
      setColorStyle('')
      if (message?.name && message?.email && message?.message) {
          emailjs.send('service_xw8s8dg', 'template_0wi4w7l', message, 'yv_FvhoXwy3tl2ezl')
              .then((result) => {
                  setCheck('Your message has been sent')
                  setColorStyle('limegreen')
                  setLoading(false)
                  setTimeout(() => {
                      setCheck('We always like to hear a suggestion')
                      setColorStyle('')
                      setMessage({name: "", email: "", message: ""})
                  }, 3000);
                  
              }, (error) => {
                  setCheck('Somthing went wrong')
                  setColorStyle('crimson')
                  setLoading(false)
                  setTimeout(() => {
                      setCheck('We always like to hear a suggestion')
                      setColorStyle('')
                  }, 3000);
              });
      } else {
          setCheck('Please fill the all fields')
          setColorStyle('crimson')
          setLoading(false)
      }

  }



  return (
      <div className="contact">
          <div className="container">
              <span>Contact</span>
              
              <div className="form-contact">
                  <form>
                      <p style={{colorStyle} ? {color: colorStyle} : {}}>{check}</p>

                      <input type="text"
                          name='name'
                          onChange={onChange}
                          placeholder='Name'
                          value={message?.name}
                      />
                      <input type='text'
                          name='email'
                          onChange={onChange}
                          placeholder='Email'
                          value={message?.email}
                      />
                      <input type="textarea"
                          onChange={onChange}
                          name='message'
                          value={message?.message}
                          placeholder='Message'
                      />
                      <button disabled={loading} onClick={onClick} >{loading ? <Loader /> : "Send"}</button>
                  </form>
              </div>
          </div>
      </div>
  );
}


export default Contact