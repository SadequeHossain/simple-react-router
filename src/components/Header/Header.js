import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className="navBar">
            <NavLink className="nav" activeStyle={{
                fontWeight: "bold",
                color: "red"
            }} to="/home">Home</NavLink>
            <NavLink className="nav" activeStyle={{
                fontWeight: "bold",
                color: "red"
            }} to="/friends">Friends</NavLink>
            <NavLink className="nav" activeStyle={{
                fontWeight: "bold",
                color: "red"
            }} to="/about">About</NavLink>
            <NavLink className="nav" activeStyle={{
                fontWeight: "bold",
                color: "red"
            }} to="/about/culture">Culture</NavLink>
        </div>
    );
};

export default Header;