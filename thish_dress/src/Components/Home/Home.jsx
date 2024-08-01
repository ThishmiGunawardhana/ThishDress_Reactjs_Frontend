import React from 'react';
import './Home.css';
import home_image from '../../assets/01.jpeg';
import logo_image from '../../assets/logo.png';

const Home = () => {
  return (
    <div className="main-content">
      <div className="image-container">
        <img src={home_image} alt="Trendy Collection" />
      </div>
      <div className="home">
      <div className='navbar'>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#collection">Collection</a></li>
          <li><a href="#cart">Cart</a></li>
          <li><a href="#signup">SignUp</a></li>
        </ul>
        <div className='image'>
        <img src={logo_image} alt="Thishdress Logo" className="logo" />
        </div>
      </div>
      <div className="text-container">
        <h1>Trendy collection’s</h1>
        <h2>HIGHEST QUALITY COLLECTION</h2>
        <p>Reviews</p>
        <div className="review-circles">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Home;
