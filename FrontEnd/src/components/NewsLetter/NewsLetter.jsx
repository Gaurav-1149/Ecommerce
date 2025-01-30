import React from 'react'
import './NewsLetter.css'

export default function NewsLetter() {
  return (
    <div className='NewsLetter' >
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div className='News_Input'>
            <input type="email" placeholder='Enter Your Email' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}
