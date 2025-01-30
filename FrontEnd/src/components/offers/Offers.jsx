import React from 'react'
import exclusive_image from '../assets/exclusive_image.png'
import './Offers.css'

export default function Offers(){
  return (
    <div className='Offers'>

        <div className="Left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>
        </div>

        <div className="Right">
            <img src={exclusive_image} alt="Exclusive Image" />
        </div>

    </div>
)
}
