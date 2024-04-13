import './Home.css';
import { Link } from 'react-router-dom';
import ReserveButton from '../shared/ReserveButton';

function Home() {
    return (
        <main className="home">
            <div className='leftSide'>
                <h1>Litte Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <ReserveButton onClick={() => {return(<Link to="/Reservations"></Link>)}}> Reserve table </ReserveButton>
            </div>

            <div className='rightSide'>
                <img src="./img/restaurant.jpg" alt="Logo of the Little Lemon restaurant" className='logo'/>
            </div>
        </main>
    )
}

export default Home;