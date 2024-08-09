import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/1.png';
import cart_icon from '../../assets/shopping-cart.png'
import { Link } from 'react-router-dom';



const Navbar = () => {

  const [menu,setMenu] = useState("Home");

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='' className='logo'/>
      </div>
      <ul className='nav-menu'>
        <li className={menu === "Home" ? "active" : ""} onClick={() => setMenu("Home")}>
        <Link to='/'>Home</Link>
          {menu === "home" && <hr />}
        </li>
        <li className={menu === "Men" ? "active" : ""} onClick={() => setMenu("Men")}>
          <Link to='/mens'>Men</Link>
          {menu === "mens" && <hr />}
        </li>
        <li className={menu === "Women" ? "active" : ""} onClick={() => setMenu("Women")}>
        <Link to='/womens'>Women</Link>
          {menu === "womens" && <hr />}
        </li>
        <li className={menu === "Kids" ? "active" : ""} onClick={() => setMenu("Kids")}>
        <Link to='/kids'>Kids</Link>
          {menu === "kids" && <hr />}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt='' className="cart-icon" /></Link>
        <div className='nav-cart-count'>0</div>
      </div>

    </div>
  );
}

export default Navbar;
