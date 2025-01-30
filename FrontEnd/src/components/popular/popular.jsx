import React, { useEffect, useState } from 'react'
import data_product from '../assets/data'
import Item from '../item/item'
import './popular.css'

const Popular = () => {

  const [popularInWomen, setPopulanInWomen] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/popularinwomen')
    .then((res)=> res.json()).then((data) => setPopulanInWomen(data))
  },[])

  return (
    <div >
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className='item-card'>
            {popularInWomen.map((item,i) => {
                return <>
                <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                </>
            })}
        </div>

    </div>
  )
}

export default Popular