import React from 'react';
import {Home} from '../Home';
import '../static/landing.css';
import Header from "./Header";
import WhatWeDo from './WhatWeDo';
import How from './How';

const Landing = () => {
  return (
    <>
        <Header />
        <WhatWeDo />
        <How />
    </>
  );
}

export default Landing;