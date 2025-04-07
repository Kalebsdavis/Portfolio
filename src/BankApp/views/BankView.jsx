import '../styles/Bank.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import BankGallery from '../components/BankGallery';

const RVView = () =>{
  let navigate = useNavigate();

    return(
        <Card className='project-card'>
        <BankGallery/>
      <Card.Body className='card-body'>
        <Card.Title className='card-title'>Bank Application (School Project)</Card.Title>
        <Card.Text className='project-text'>
          Bank Application Made with React.js and Express.js
        </Card.Text>
        <Button className='card-btn' onClick={()=>{navigate('/Bankinfo')}}>Read More</Button>
      </Card.Body>
    </Card>
    )
}

export default RVView;