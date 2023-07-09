import React, {useEffect, useState } from "react";
import Link from 'react-router-dom';
import './App.css';

import Layout from './components/Layout';
import Landing from './components/Landing/Landing';
import Navbar from "./components/Navbar/Navbar";
//Navbar class inside Navbar file inside Navbar folder
import {BrowserRouter as Router} from 'react-router-dom';


function App() {

  const APIKey = '641e62f856554bb698b1dd909a45c0db';

  useEffect( async () => {
    //runs everytime page reloads
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKey}`);
    const data = await response.json();
    console.log(data);

  }

  return (
    <Router>
      <div className="App">
        <div className='container'>
          {/* <Navbar /> */}
          <Landing />
          {/* <Layout /> */}
        </div>
      </div>
    </Router>
    
  );
}

export default App;
