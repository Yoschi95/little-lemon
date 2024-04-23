import React from 'react';
import './ReserveButton.css';

const ReserveButton = ({ onClick, children }) => {

  return (

    <button onClick={onClick} className='reserve-button' data-testid="reservationButton">

      {children}

    </button>

  );

}

export default ReserveButton;