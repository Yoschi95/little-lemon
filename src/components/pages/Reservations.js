import './Reservations.css';
import ReservationForm from "../sections/ReservationForm";
import ConfirmedReservation from "../sections/ConfirmedReservation";

function Reservations(props) {
    return (
        <main className="reservations">
            <h1>Reservation</h1>
            <h2>Please enter the required information:</h2>
            <ReservationForm availableTimesObj={props.availableTimesObj} dispatchDate={props.dispatchDate} submitForm={props.submitForm}/>
           { 
            // <ConfirmedReservation />
           }
        </main>
    )
}

export default Reservations;