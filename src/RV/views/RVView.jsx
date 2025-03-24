import '../styles/RV.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import RVGallery from '../components/RVGallery';

const RVView = () =>{
  let navigate = useNavigate();

    return(
        <Card className='project-card'>
        <RVGallery/>
      <Card.Body className='card-body'>
        <Card.Title className='card-title'>RV Reservation System (School Project)</Card.Title>
        <Card.Text className='project-text'>
          RV Reservation System made with express.js and node.js
        </Card.Text>
        <Button className='card-btn' onClick={()=>{navigate('/RVinfo')}}>Read More</Button>
      </Card.Body>
    </Card>
    )
}

export default RVView;