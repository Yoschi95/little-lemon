import React, { useState } from 'react';
import "./ReservationForm.css";

const ReservationForm = () => {

  const [name, setName] = useState('');

  const [date, setDate] = useState('');

  const [time, setTime] = useState('');

  const [guests, setGuests] = useState('');

  const [occasion, setOccasion] = useState('');


  const handleSubmit = (event) => {

    event.preventDefault();
    console.log(`Submitting reservation for ${name} on ${date} at ${time} for ${guests} guests. Occasion: ${occasion}.`);

  }

  return (

    <form onSubmit={handleSubmit} className='reservation-form'>

      <label className="name">
        <p>Name</p>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>

      <label className="date">
        <p>Date</p>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </label>

      <label className="time">
        <p>Time</p>
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
      </label>

      <label className="numofGuests">
        <p>Number of guests</p>
        <input type="number" value={guests} onChange={(e) => setGuests(e.target.value)} min="1" required />
      </label>

      <label className="occasion">
        <p>Occasion</p>
        <select value={occasion} onChange={(e) => setOccasion(e.target.value)} required >
          <option value="">--Please choose an option--</option>
          <option value="birhtday">Birthday</option>
          <option value="engagement">Engagement</option>
          <option value="anniversary">Anniversary</option>
        </select>
      </label>

      <button type="submit" className="submitButton">Book table</button>

    </form>

  );

}

export default ReservationForm;