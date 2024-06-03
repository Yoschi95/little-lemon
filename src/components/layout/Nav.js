import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
    return (
        <nav className="navbar">
            <div className='home'> <Link to="/little-lemon">Home</Link> </div>
            <div className='about'> <Link to="/About">About</Link> </div>
            <div className='menu'> <Link to="/Menu">Menu</Link> </div>
            <div className='reservations'> <Link to="/Reservations">Reservations</Link> </div>
            <div className='order'> <Link to="/Order">Order</Link> </div>
            <div className='login'> <Link to="/Login">Login</Link> </div>
        </nav>
    )
}

export default Nav;