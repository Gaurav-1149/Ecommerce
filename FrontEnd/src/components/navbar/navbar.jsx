import "./navbar.css";
import logo from "../assets/logo.png"
import cart_icon from "../assets/cart_icon.png"
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";

const Navbar = () => {
    const [menu, setMenu] = useState("Shop");
    const {getTotalCartItems} = useContext(ShopContext)

    return (
        <div className="navbar" >
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => {setMenu("Shop")}} > <Link to="/" >Shop</Link> {menu==="Shop"? <hr/>:<></>} </li>
                <li onClick={() => {setMenu("Men")}} > <Link to="/men" >Men</Link> {menu==="Men"? <hr/>:<></>} </li>
                <li onClick={() => {setMenu("Women")}} > <Link to="/women" >Women</Link> {menu==="Women"? <hr/>:<></>} </li>
                <li onClick={() => {setMenu("Kids")}} > <Link to="/kids" >Kids</Link> {menu==="Kids"? <hr/>:<></>} </li>
            </ul>

            <div className="nav-login-cart" >
                {localStorage.getItem('auth-token')?
                <button onClick={() => {localStorage.removeItem('auth-token');window.location.replace('/')}} >Logout</button>
                :<Link to="/login" ><button>Login</button></Link>}
            
            <Link to="/cart" ><img src={cart_icon} alt="" /></Link>
                
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
            
        </div>
    )
}

export default Navbar;