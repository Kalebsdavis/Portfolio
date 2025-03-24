import '../styles/TrackMate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import trackMateSignup from '../../imgs/TrackMate-signup.png';
import { useNavigate } from 'react-router-dom';
import Gallery from '../components/TrackMateGallery';

const TrackMateView = () =>{
  let navigate = useNavigate();

    return(
        <Card className='project-card'>
        <Gallery/>
      <Card.Body className='card-body'>
        <Card.Title className='card-title'>Track Mate Authentication System (School Project)</Card.Title>
        <Card.Text className='project-text'>
          TrackMate authentication system built from scratch using react.js and express.js
        </Card.Text>
        <Button className='card-btn' onClick={()=>{navigate('/TrackMateInfo')}}>Read More</Button>
      </Card.Body>
    </Card>
    )
}

export default TrackMateView;