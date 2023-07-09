import React from 'react';
import {Home} from '../Home';
import '../static/landing.css';
import dots from "../../assets/dots_img.png";
import bg from "../../assets/Group2.png";
import logo from "../../assets/logo_transparent.png";
import circleimg from "../../assets/circleimage-white.png";
import front_img from "../../assets/front_img.png"

const Header = () => {
  return (
    <>
        <div className='header-img'>
            <div className='header_section'>
                <div className='header_content'>
                    <div className='logo'>
                        <img src={logo}/>
                    </div>
                    <div className='tagline'>
                        Reduce <span className='green'>Food Waste</span> and Save Money
                    </div>
                    <div className='info'>
                    We want to tackle food waste by recommending recipes based on leftover ingredients in the fridge at home.
                    </div>

                    <div className='header_content_input'>
                        <input type="email" placeholder='Enter your email'></input>
                        <button type='button'> Get started</button>
                    </div>

                </div>
                <div className='header_rightimg'>
                    <div className='header_rightimg_img'>
                        <img src={front_img}/>
                    </div>
                    <img className='dots-img' src={dots}/>
                </div>
            </div>

        </div>
        
    </>
  );
}

export default Header;