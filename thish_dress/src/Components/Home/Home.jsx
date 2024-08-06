import React from 'react';
import './Home.css';
import home_image from '../../assets/01.jpeg';
import logo_image from '../../assets/logo.png';
import fb from '../../assets/fb.png';
import twitter from '../../assets/twitter.jpeg';
import instergram from '../../assets/instergram.jpeg';

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
          <li><img src={logo_image} alt="Thishdress Logo" className="logo" /></li> 
        </ul>
      </div>
      <div className="text-container">
        <h2>Trendy collection’s</h2>
        <h1>HIGHEST QUALITY COLLECTION</h1>
        <p>Reviews</p>
        <div className="review-logos">
          <div className="fb">
            <img src={fb} alt="fb" className="rewiew-logos" />
          </div>
          <div className="instergram">
            <img src={instergram} alt="instergram" className="rewiew-logos" />
          </div>
          <div className="twitter">
            <img src={twitter} alt="twitter" className="rewiew-logos" />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Home;
