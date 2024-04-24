import './Reservations.css';
import ReservationForm from "../sections/ReservationForm";

function Reservations(props) {
    return (
        <main className="reservations">
            <h1>Reservation</h1>
            <h2>Please enter the required information:</h2>
            <ReservationForm availableTimesObj={props.availableTimesObj} dispatchDate={props.dispatchDate} />
        </main>
    )
}

export default Reservations;