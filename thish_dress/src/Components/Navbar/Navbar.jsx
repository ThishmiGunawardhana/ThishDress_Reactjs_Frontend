import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/1.png';
import cart_icon from '../../assets/shopping-cart.png'

const Navbar = () => {

  const [menu,setMenu] = useState("Home");

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='' className='logo'/>
      </div>
      <ul className='nav-menu'>
        <li className={menu === "Home" ? "active" : ""} onClick={() => setMenu("Home")}>
          Home
          {menu === "Home" && <hr />}
        </li>
        <li className={menu === "Men" ? "active" : ""} onClick={() => setMenu("Men")}>
          Men
          {menu === "Men" && <hr />}
        </li>
        <li className={menu === "Women" ? "active" : ""} onClick={() => setMenu("Women")}>
          Women
          {menu === "Women" && <hr />}
        </li>
        <li className={menu === "Kids" ? "active" : ""} onClick={() => setMenu("Kids")}>
          Kids
          {menu === "Kids" && <hr />}
        </li>
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
