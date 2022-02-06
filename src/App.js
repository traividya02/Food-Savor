import logo from './logo.svg';
import React, {useEffect, useState } from "react";
import './App.css';

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
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"></input>
        <button className="search-button" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
