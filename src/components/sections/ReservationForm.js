import React, { useState } from 'react';
import "./ReservationForm.css";

const ReservationForm = (props) => {
  
  const [name, setName] = useState('');
  
  const [date, setDate] = useState('');
  
  const [time, setTime] = useState('');
  
  const [guests, setGuests] = useState('');
  
  const [occasion, setOccasion] = useState('');
  
  const handleSubmit = (event) => {
    
    event.preventDefault(); // Disable standard HTML form handling to reload the page
    console.log(`Submitting reservation for ${name} on ${date} at ${time} for ${guests} guests. Occasion: ${occasion}.`);
    
  };
    
  const handleDateChange = (event) => {
      
    setDate(event.target.value);
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
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>

      <label className="date">
        <p>Date</p>
        <input type="date" value={date} onChange={handleDateChange} required />
      </label>

      <label className="time">
        <p>Time</p>
        <select value={time} onChange={(e) => setTime(e.target.value)} required data-testid="selectTime" >
        <option value="">--Please choose a time--</option>
        {props.availableTimesObj.data.times?.map( (time) => <option value={time} key={time.toString()}>{time}</option> )}
        </select>
      </label>

      <label className="numofGuests">
        <p>Number of guests</p>
        <input type="number" value={guests} onChange={(e) => setGuests(e.target.value)} min="1" max="20" placeholder='2' required />
      </label>

      <label className="occasion">
        <p>Occasion</p>
        <select value={occasion} onChange={(e) => setOccasion(e.target.value)} required >
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