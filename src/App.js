import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header'
import Nav from './components/layout/Nav'
import Main from './components/layout/Main'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className='app'>
      <Router>
          <Header/>
          <Nav/>
          <Main/>
          <Footer/>
      </Router>
    </div>
  );
}

export default App;
