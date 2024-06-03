import React, { useReducer, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { fetchAPI, submitAPI } from '../../utils/mockAPI'
import './Main.css';
import Home from '../pages/Home'
import About from '../pages/About'
import Menu from '../pages/Menu'
import Reservations from '../pages/Reservations'
import ConfirmedReservation from '../sections/ConfirmedReservation'
import Order from '../pages/Order'
import Login from '../pages/Login'

function Main() {

    let availableTimesInitObject = { 
        data: {
            date: '',
            times: ['']
        }, 
        triggerFetchingData: false, 
        initialized: false,
        error: null 
    };

    const updateTimesReducer = (state, action) => {

        switch (action.type) {

            case 'FETCH_REQUEST':
               // console.log(`Fetch request received for date: ${action.payload.date}`)
                return { ...state, data: {date: action.payload.date}, triggerFetchingData: !state.triggerFetchingData };

            case 'FETCH_SUCCESS':

                return { 
                    ...state, 
                    data: {
                        date: action.payload.date,
                        times: action.payload.times
                    }, 
                    initialized: true,
                    error: null
                };

            case 'FETCH_ERROR':
                return { ...state, error: action.payload};


            default:
               throw new Error("No case in updateTimesReducer hitted");
        }
    }


   const [availableTimesObj, dispatchDate] = useReducer(updateTimesReducer, availableTimesInitObject);

    useEffect(() => {

        if (!availableTimesObj.initialized) {

            const currentDate = new Date();
            let currentDateFormatted = '';

            if (currentDate.getMonth() < 9)
            {
                currentDateFormatted = `${currentDate.getFullYear()}-0${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
            }
            else
            {
                currentDateFormatted = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
            }
    
            // console.log(`Init availableTimes state for todays date: ${currentDateFormatted}`)    
            fetchAPI(currentDateFormatted)
    
                .then(response => response)
    
                .then(fetchedData => {
                    dispatchDate(
                    {
                        type: 'FETCH_SUCCESS',
                        payload: {
                            date: currentDateFormatted,
                            times: fetchedData}
                    }) 
                })
    
                .catch(error => {
                    dispatchDate(
                    {
                        type: 'FETCH_ERROR',
                        payload: error
                    }
                )
                    console.error(error)
              });
        }

        else {

            // console.log(`Update availableTimes state for date: ${availableTimesObj.data.date}`)
            fetchAPI(availableTimesObj.data.date)
    
                .then(response => response)
    
                .then(fetchedData => {
                    dispatchDate(
                    {
                        type: 'FETCH_SUCCESS',
                        payload: {
                            date: availableTimesObj.data.date,
                            times: fetchedData}
                    }) 
                })
    
                .catch(error => {
                    dispatchDate(
                    {
                        type: 'FETCH_ERROR',
                        payload: error
                    }
                )
                    console.error(error)
              });
        }
        
      }, [availableTimesObj.triggerFetchingData]); // eslint-disable-line react-hooks/exhaustive-deps



    const submitForm = (formData) => {
        console.log('Submitted Form');
        return submitAPI(formData);
    };

    return (
        <Routes>
            <Route path="/little-lemon/home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="/Reservations" element={<Reservations availableTimesObj={availableTimesObj} dispatchDate={dispatchDate} submitForm={submitForm} />} />
            <Route path="/ConfirmedReservation" element={<ConfirmedReservation />} />
            <Route path="/Order" element={<Order />} />
            <Route path="/Login" element={<Login />} />
        </Routes>
    )
}

export default Main;