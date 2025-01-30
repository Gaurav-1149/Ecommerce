import React from 'react'
import './item.css'
import {Link} from 'react-router-dom'

const Item = (props) => {
  return (

    <div className='item' >
      <Link to={`/product/${props.id}`}> <img onClick={window.scroll(0,0)} src={props.image} alt="IMAGE" /> </Link>
      <p>{props.name}</p>
      <div className="item-price">
        <p className='new_price'>${props.new_price}</p>
        <p className='old_price' >${props.old_price}</p>
      </div>
    </div>

  )
}

export default Item