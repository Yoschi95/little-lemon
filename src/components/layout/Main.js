import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Main.css';
import Home from '../pages/Home'
import About from '../pages/About'
import Menu from '../pages/Menu'
import Reservations from '../pages/Reservations'
import Order from '../pages/Order'
import Login from '../pages/Login'

function Main() {
    return (
        <main className="main">
            <Router>
                <Routes>
                    <Route path="/Home" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Menu" element={<Menu />} />
                    <Route path="/Reservations" element={<Reservations />} />
                    <Route path="/Order" element={<Order />} />
                    <Route path="/Login" element={<Login />} />
                </Routes>
            </Router>
        </main>
    )
}

export default Main;