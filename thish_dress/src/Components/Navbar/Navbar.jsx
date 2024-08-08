import React from 'react';
import './Navbar.css';
import logo from '../../assets/1.png';
import cart_icon from '../../assets/shopping-cart.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='' className='logo'/>
      </div>
      <ul className='nav-menu'>
        <li>Home<hr/></li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt='' className="cart-icon" />
        <div className='nav-cart-count'>0</div>
      </div>

    </div>
  );
}

export default Navbar;
