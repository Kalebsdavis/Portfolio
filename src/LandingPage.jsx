import './App.css'
import TrackMate from './TrackMate/TrackMate';
import RV from './RV/RV';
import { Link } from 'react-router-dom';

const LandingPage = () =>{
    
    return(
    <div className='landing-page-background'>
        <div  className='landing-page-container'>
            <div className='header'><Link to='https://www.linkedin.com/in/kaleb-davis-77037b336'><h1>Kaleb Davis</h1></Link></div>
            <div className='card-container'>
            <div className='trackmate-card'><TrackMate/></div>
            <div className='trackmate-card'><RV/></div>
            </div>
        </div>
    </div>
    )
}

export default LandingPage;