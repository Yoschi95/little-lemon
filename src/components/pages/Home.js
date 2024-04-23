import './Home.css';
import { useNavigate } from 'react-router-dom';
import ReserveButton from '../shared/ReserveButton';

function Home() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/Reservations');
    }

    return (
        <main className="home">
            <div className='leftSide'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <ReserveButton onClick={handleClick} > Reserve table </ReserveButton>
            </div>

            <div className='rightSide'>
                <img src="./img/restaurant.jpg" alt="Logo of the Little Lemon restaurant" className='logo'/>
            </div>
        </main>
    )
}

export default Home;