import './Reservations.css';
import ReservationForm from "../shared/ReservationForm";

function Reservations() {
    return (
        <main className="reservations">
            <h1>Reservation</h1>
            <h2>Please enter the required information:</h2>
            <ReservationForm />
        </main>
    )
}

export default Reservations;