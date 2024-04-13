import React, { useState } from 'react';


const ReservationForm = () => {

  const [name, setName] = useState('');

  const [date, setDate] = useState('');

  const [time, setTime] = useState('');

  const [guests, setGuests] = useState('');



  const handleSubmit = (event) => {

    event.preventDefault();
    console.log(`Submitting reservation for ${name} on ${date} at ${time} for ${guests} guests.`);

  }

  return (

    <form onSubmit={handleSubmit}><label>

        Name:

        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required /></label><br/><label>

        Date:

        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required /></label><br/><label>

        Time:

        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required /></label><br/><label>

        Number of Guests:

        <input type="number" value={guests} onChange={(e) => setGuests(e.target.value)} min="1" required /></label><br/><button type="submit">Book Table</button></form>

  );

}

export default ReservationForm;