import React, { useState, useReducer, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './Main.css';
import Home from '../pages/Home'
import About from '../pages/About'
import Menu from '../pages/Menu'
import Reservations from '../pages/Reservations'
import Order from '../pages/Order'
import Login from '../pages/Login'
import { fetchAPI, submitAPI } from '../../utils/mockAPI'

function Main() {

    let arrDefaultAvailableTimes = ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00'];

    const [data, setData] = useState(null);

    useEffect(() => {

        const currentDate = new Date();
        const currentDateFormatted = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;

        fetchAPI(currentDateFormatted)

          .then(response => response)

          .then(data => {
            dispatchDate(
                {
                    type: 'INITIALIZE',
                    payload: data
                }
            ) 
            setData(data)
          })

          .catch(error => console.error(error));

      }, []);

    if (data)
    {
        console.log("Fetched data successfully!");
        console.log(JSON.stringify(data));
    }

    else
    {
        console.log("Loading...");
    }

    const updateTimesReducer = (state, action) => {

        switch (action.type) {

            case 'INITIALIZE':
                return action.payload;

            default:
               return state;
        }
    }

    const [availableTimes, dispatchDate] = useReducer(updateTimesReducer, arrDefaultAvailableTimes);

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