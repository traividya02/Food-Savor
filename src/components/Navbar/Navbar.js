import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavElems';

const Navbar = () => {
  return (
    <>
      <Nav>
        
        <NavLink to="/home" >
        <img src='../../../assets/logo_transparent.png' alt=''></img>
        </NavLink>

        <Bars />
        <NavMenu>
          <NavLink to="/" activeStyle>Landing</NavLink>
          <NavLink to="/home" activeStyle>Home</NavLink>
          <NavLink to="/search" activeStyle>Search By Ingredients</NavLink>
          <NavLink to="/recipes" activeStyle>Recipes</NavLink>
          
        </NavMenu>

        <NavBtn>
          <NavBtnLink to="/signIn">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
}

export default Navbar