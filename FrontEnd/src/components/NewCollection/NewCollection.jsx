import React, { useEffect, useState } from 'react'
import Item from '../item/item'
import './NewCollection.css'

  const New_Collection = () => {
    const [new_collection, setNew_collection] = useState([])

    useEffect(() => {
      fetch('http://localhost:8080/newcollection')
      .then((res) => res.json()).then((data) => setNew_collection(data))
    },[])
  

  return (
    <div className='NewCollections' >
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className='Collections'>
            {new_collection.map((item,i) => {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />

            })}
        </div>
    </div>
  )
}

export default New_Collection;