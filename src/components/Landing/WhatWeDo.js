import React from 'react';
import {Home} from '../Home';
import '../static/landing.css';
import what_we_do_1 from "../../assets/what_we_do_1.svg";
import what_we_do_2 from "../../assets/what_we_do_2.svg";
import what_we_do_3 from "../../assets/what_we_do_3.svg";

const WhatWeDo = () => {
  return (
    <>
        <div className='what_we_do'>
            <div className='heading2'>
                WHAT WE DO
            </div>
            <div className='what_we_do_info'>
                We help thousands of people reduce food waste. 
            </div>
            <div className='what_we_do_section'>
                <div className='subsection'>
                    <img className='subsection_img' src={what_we_do_1}/>
                    <div className='subsection_text'>Quality Recipes</div>
                </div>
                <div className='subsection'>
                    <img className='subsection_img' src={what_we_do_2}/>
                    <div className='subsection_text'>Save on Groceries</div>
                </div>
                <div className='subsection'>
                    <img className='subsection_img' src={what_we_do_3}/>
                    <div className='subsection_text'>Zero Food Waste</div>
                </div>
            </div>
        </div>
    </>
  );
}

export default WhatWeDo;