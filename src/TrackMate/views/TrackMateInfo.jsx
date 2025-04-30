import '../styles/TrackMateInfo.css';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap';
import Gallery from '../components/TrackMateGallery';

const TrackMateInfo = () =>{


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
                the way the authentication system works is that when a user creates an account they have to be approved or else there account gets deleted by an admin the best part about this is that admins can handle this anywhere they want because
                a email gets sent to all admins that allows them to approve a user or reject them with the click of a button.
                Along with the authentication came user roles in which I also implemented primarily the Admin tools which allowed the admins to manage user permissions from a user friendly gui. There are situations where falculty who would have admin permissions would leave the university but come back so I added a archived 
                accounts dashboard as well which is where 'deleted' accounts would go and can be reactivated from.
                </Card.Text>
            </Card.Body>
    </Card>
            </div>
        </div>
    )
}

export default TrackMateInfo;