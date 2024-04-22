import React, { useReducer } from 'react';
import { Route, Routes } from 'react-router-dom';
import './Main.css';
import Home from '../pages/Home'
import About from '../pages/About'
import Menu from '../pages/Menu'
import Reservations from '../pages/Reservations'
import Order from '../pages/Order'
import Login from '../pages/Login'

function Main() {

    let arrAvailableTimes = ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00'];
    const updateTimesReducer = (state, action) => {

        switch (action.date) {
            default:
               return state = arrAvailableTimes;
        }
    }

    const initializeAvailableTimes = (arrAvailableTimes) => arrAvailableTimes;
    const [availableTimes, dispatchDate] = useReducer(updateTimesReducer, arrAvailableTimes , initializeAvailableTimes);

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="/Reservations" element={<Reservations availableTimes={availableTimes} dispatchDate={dispatchDate} />} />
            <Route path="/Order" element={<Order />} />
            <Route path="/Login" element={<Login />} />
        </Routes>
    )
}

export default Main;