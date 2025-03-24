import '../styles/RVInfo.css';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap';
import Gallery from '../components/RVGallery';

const RVInfo = () =>{


    return(
        <div className="main-container">
            <div className='project-container'>
            <Card className='project-card-info'>
                <Gallery/>
                <Card.Body className='card-body-info'>
                <Card.Title className='card-title-info'>Track Mate Authentication System (School Project)</Card.Title>
                <Card.Text className='project-text-info'>
                TrackMate is a project created at Weber State University for Isabelle, an academic advisor. It consists of three apps in one:

                RoomTracker – Tracks classroom availability, preventing room conflicts for university activities. It is a valuable tool for academic advisors.
                PurchaseTracker – Keeps track of department expenses.
                TrainingTracker – Manages department training information.
                For my capstone, two groups were assigned to this project to continue enhancing it according to Isabelle’s vision. One of her main goals is to share the system with other departments. To achieve this, user roles are essential, which in turn require an authentication system—this became my responsibility.

                I built the front end of the authentication system using React.js and the backend with Node.js. To ensure the protection of user information, I implemented a salt and hash method using bcrypt.
                </Card.Text>
            </Card.Body>
    </Card>
            </div>
        </div>
    )
}

export default RVInfo;