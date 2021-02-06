import React from 'react';
import './style.css';
import vrImage from '../assets/desktop/image-interactive.jpg';

const LandingPage = () => {
  return (
    <>
      <div className="mainPage">
        <div className="container">
          <div className="navbar">
            <div className="leftBox">
              <h1>loopstudios</h1>
            </div>
            <div className="rightBox">
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Events</a>
                </li>
                <li>
                  <a href="#">Products</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="box">
            <h1>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
          </div>
        </div>
      </div>

      <div className="secondSection">
        <div className="container">
          <div className="leftBox">
            <img src={vrImage} alt="VR Image" />
          </div>
          <div className="rightBox">
            <div className="content">
              <h1>THE LEADER IN INTERACTIVE VR</h1>
              <p>
                Founded in 2011, Loopstudios has been producing world-class
                reality projects for some of the best companies around the
                globe. Our award-winning creations have transformed businesses
                through digital experiences that bind to their brand.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="thirdSection">
        <div className="container">
          <div className="flex-r">
            <h1>OUR CREATIONS</h1>
            <button className="btn">SEE ALL</button>
          </div>
          <div className="flex-c">
            <div className="imgBox b1">
              <h2>DEEP EARTH</h2>
            </div>
            <div className="imgBox b2">
              <h2>NIGHT ARCADE</h2>
            </div>
            <div className="imgBox b3">
              <h2>SOCCER TEAM</h2>
            </div>
            <div className="imgBox b4">
              <h2>THE GRID</h2>
            </div>

            <div className="imgBox b5">
              <h2>FROM UP ABOVE VR</h2>
            </div>
            <div className="imgBox b6">
              <h2>POCKET BOREALIS</h2>
            </div>
            <div className="imgBox b7">
              <h2>THE CURIOSITY</h2>
            </div>
            <div className="imgBox b8">
              <h2>MAKE IT FISH EYE</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
