import React, { useContext }from 'react'
import { ShopContext } from '../context/ShopContext'
import'./CSS/ShopCategory.css'
import dropdown_icon from '../components/assets/dropdown_icon.png'
import Item from '../components/item/item' 

const ShopCategory = (props) => {

  const {all_product} = useContext(ShopContext);

  return (
    
    <div className='shop-category'>
      <img className='Banner' src={props.banner} alt="" />
      <div className="shopCategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopCategory-sort">
          sort by <img className='Dropdown' src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopCategory-products">
        {all_product?.map((item,i)=> {
          if (props.category===item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          }
            else{
              return null;
            }
        })}
      </div>
    </div>
  )
}
export default ShopCategory