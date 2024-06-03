import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
    return (
        <nav className="navbar">
            <div className='home'> <Link to="/little-lemon/">Home</Link> </div>
            <div className='about'> <Link to="/little-lemon/about">About</Link> </div>
            <div className='menu'> <Link to="/little-lemon/menu">Menu</Link> </div>
            <div className='reservations'> <Link to="/little-lemon/reservations">Reservations</Link> </div>
            <div className='order'> <Link to="/little-lemon/order">Order</Link> </div>
            <div className='login'> <Link to="/little-lemon/login">Login</Link> </div>
        </nav>
    )
}

export default Nav;