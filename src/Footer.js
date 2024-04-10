import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <img src="./img/Logo.svg" alt="Logo of the Little Lemon restaurant"/>

            <ul>
                <h3>Navigation</h3>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order online</li>
                <li>Login</li>
            </ul>

            <ul>
                <h3>Contact</h3>
                <li>Adress: First Street 1</li>
                <li>Phone number: +123456789</li>
                <li>Email: info@littlelemon.com</li>
            </ul>

            <ul>
                <h3>Social Media</h3>
                <li><a href="www.instagram.com">Instagram</a></li>
                <li><a href="www.facebook.com">Facebook</a></li>
                <li><a href="www.linkedin.com">LinkedIn</a></li>
            </ul>
        </footer>
    )
}

export default Footer;