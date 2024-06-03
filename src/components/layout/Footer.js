import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <img src="./img/footer_logo.png" alt="Logo of the Little Lemon restaurant" className='logo'/>

            <ul className='navigation'>
                <h3>Navigation</h3>
                <li> <Link to="/little-lemon">Home</Link> </li>
                <li> <Link to="/little-lemon/about">About</Link> </li>
                <li> <Link to="/little-lemon/menu">Menu</Link> </li>
                <li> <Link to="/little-lemon/reservations">Reservations</Link> </li>
                <li> <Link to="/little-lemon/order">Order</Link> </li>
                <li> <Link to="/little-lemon/login">Login</Link> </li>
            </ul>

            <ul className='contact'>
                <h3>Contact</h3>
                <li>Adress: First Street 1</li>
                <li>Phone number: +123456789</li>
                <li>Email: info@littlelemon.com</li>
            </ul>

            <ul className='socials'>
                <h3>Social Media</h3>
                <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
        </footer>
    )
}

export default Footer;