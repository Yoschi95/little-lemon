import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <img src="./img/Logo.svg" alt="Logo of the Little Lemon restaurant" className='logo'/>

            <ul className='navigation'>
                <h3>Navigation</h3>
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/About">About</Link> </li>
                <li> <Link to="/Menu">Menu</Link> </li>
                <li> <Link to="/Reservations">Reservations</Link> </li>
                <li> <Link to="/Order">Order</Link> </li>
                <li> <Link to="/Login">Login</Link> </li>
            </ul>

            <ul className='contact'>
                <h3>Contact</h3>
                <li>Adress: First Street 1</li>
                <li>Phone number: +123456789</li>
                <li>Email: info@littlelemon.com</li>
            </ul>

            <ul className='socials'>
                <h3>Social Media</h3>
                <li><a href="www.instagram.com">Instagram</a></li>
                <li><a href="www.facebook.com">Facebook</a></li>
                <li><a href="www.linkedin.com">LinkedIn</a></li>
            </ul>
        </footer>
    )
}

export default Footer;