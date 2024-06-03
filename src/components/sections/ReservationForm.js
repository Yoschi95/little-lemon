import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./ReservationForm.css";

const ReservationForm = (props) => {

  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    guests: '',
    occasion: ''
  });

  const navigate = useNavigate();
  
  const handleSubmit = (event) => {
    
    event.preventDefault(); // Disable standard HTML form handling to reload the page
    console.log(`Submitting reservation for ${formData.name} on ${formData.date} at ${formData.time} for ${formData.guests} guests. Occasion: ${formData.occasion}.`);
    props.submitForm(formData);
    navigate('little-lemon/confirmedReservation');
  };
    
  const handleDateChange = (event) => {
      
    setFormData({...formData, date: event.target.value});
    props.dispatchDate({
      type: 'FETCH_REQUEST',
      payload: {
        date: event.target.value,
        times: ''
      }
    });
  };

  return (

    <form onSubmit={handleSubmit} className='reservation-form'>

      <label className="name">
        <p>Name</p>
        <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
      </label>

      <label className="date">
        <p>Date</p>
        <input type="date" value={formData.date} onChange={handleDateChange} required />
      </label>

      <label className="time">
        <p>Time</p>
        <select value={formData.time} onChange={(e) => setFormData({...formData, time: e.target.value})} required data-testid="selectTime" >
        <option value="">--Please choose a time--</option>
        {props.availableTimesObj.data.times?.map( (time) => <option value={time} key={time.toString()}>{time}</option> )}
        </select>
      </label>

      <label className="numofGuests">
        <p>Number of guests</p>
        <input type="number" value={formData.guests} onChange={(e) => setFormData({...formData, guests: e.target.value})} min="1" max="20" placeholder='2' required />
      </label>

      <label className="occasion">
        <p>Occasion</p>
        <select value={formData.occasion} onChange={(e) => setFormData({...formData, occasion: e.target.value})} required >
          <option value="">--Please choose an option--</option>
          <option value="birthday">Birthday</option>
          <option value="engagement">Engagement</option>
          <option value="anniversary">Anniversary</option>
        </select>
      </label>

      <button type="submit" className="submitButton">Book table</button>

    </form>

  );

}

export default ReservationForm;