import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
    return (
        <nav className="navbar">
            <ul>
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/About">About</Link> </li>
                <li> <Link to="/Menu">Menu</Link> </li>
                <li> <Link to="/Reservations">Reservations</Link> </li>
                <li> <Link to="/Order">Order</Link> </li>
                <li> <Link to="/Login">Login</Link> </li>
            </ul>
        </nav>
    )
}

export default Nav;