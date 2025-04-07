import '../styles/BankInfo.css';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap';
import Gallery from '../components/BankGallery';

const RVInfo = () =>{


    return(
        <div className="main-container">
            <div className='project-container'>
            <Card className='project-card-info'>
                <Gallery/>
                <Card.Body className='card-body-info'>
                <Card.Title className='card-title-info'>Bank App (School Project)</Card.Title>
                <Card.Text className='project-text-info'>
                This Banking App was apart of a school project that first introduced me to Full Stack Developement:

                The app originally was made with just express.js and MySQL2 where the views were made with .ejs file types I since has restructured it to work with React.js to be closer to industry standard
                It has a functioning Authentication system which includes the salting and hashing of passwords which are then stored in the database.
                The user can use the transaction tool to deposit and withdraw funds as well as the ability to transfer funds between their own accounts and other accounts they are also able to see their transaction history and memos.
                
                </Card.Text>
            </Card.Body>
    </Card>
            </div>
        </div>
    )
}

export default RVInfo;