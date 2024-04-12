import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header'
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Menu from './components/pages/Menu'
import Reservations from './components/pages/Reservations'
import Order from './components/pages/Order'
import Login from './components/pages/Login'

function App() {
  return (
    <>
    <Router>
      <Header/>
      <Nav/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Reservations" element={<Reservations />} />
          <Route path="/Order" element={<Order />} />
          <Route path="/Login" element={<Login />} />
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
