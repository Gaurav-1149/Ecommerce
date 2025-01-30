import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../context/ShopContext'
import cart_cross from '../assets/cart_cross_icon.png'

export const CartItems = () => {
    const {all_product, cartItems, removeFromCart,getTotalCartAmount} = useContext(ShopContext)

  return (
    <div>
        <div className="cart">
            <div className="cartTop">
                <div className="title">
                    <p>Product</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <hr />
                {all_product.map((e) => {
                    if(cartItems[e.id]>0) {
                    return  <div >
                                <div className='items'>
                                    <img className='productImg' src={e.image} alt="" />
                                    <p className='productName'>{e.name}</p>
                                    <p>${e.new_price}</p>
                                    <button >{cartItems[e.id]}</button>
                                    <p>${e.new_price*cartItems[e.id]}</p>
                                    <img className='removeBtn' onClick={()=> {removeFromCart(e.id)}} src={cart_cross} alt="" />
                                </div>
                                <hr />
                            </div>
                    }
                })}
            </div>
            <div className="cartDown">
                <div className="cartDownLeft">
                   <h2>Cart Totals</h2>
                     <div className="pricePair">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="pricePair">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="pricePair">
                            <p><b>Total</b></p>
                            <p><b>${getTotalCartAmount()}</b></p>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="CartDownRight">
                    <p>If you have a promo code, Enter it here</p>
                    <input type="text" placeholder='promo code' />
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}
