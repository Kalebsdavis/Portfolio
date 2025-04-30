import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem
} from 'mdb-react-ui-kit';

import trackMateSignup from '../../imgs/TrackMate-signup.png';
import trackMateLogIn from '../../imgs/TrackMate-login.png';
import trackMateAdminTools from '../../imgs/TrackMate-adminttools.png';
import trackMateArchive from '../../imgs/TrackMate-Archived.png'
import trackMateEmail from '../../imgs/email.png'
import '../styles/ImageGallery.css';

const TrackMateGallery = () => {
  return (
    <MDBCarousel  showControls fade interval={2500}>
      <MDBCarouselItem className="active" interval={1000}>
        <img src={trackMateSignup} className="d-block w-100" alt="Sign Up" />
      </MDBCarouselItem>

      <MDBCarouselItem>
        <img src={trackMateEmail} className="d-block w-auto" alt="Sign Up" />
      </MDBCarouselItem>

      <MDBCarouselItem>
        <img src={trackMateLogIn} className="d-block w-100" alt="Log In" />
      </MDBCarouselItem>

      <MDBCarouselItem>
        <img src={trackMateAdminTools} className="d-block w-100" alt="Admin Tools" />
      </MDBCarouselItem>

      <MDBCarouselItem>
        <img src={trackMateArchive} className="d-block w-100" alt="Admin Archive" />
      </MDBCarouselItem>
    </MDBCarousel>
  );
}

export default TrackMateGallery;