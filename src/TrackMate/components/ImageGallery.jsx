import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem
} from 'mdb-react-ui-kit';

import trackMateSignup from '../../imgs/TrackMate-signup.png';
import trackMateLogIn from '../../imgs/TrackMate-login.png';
import trackMateAdminTools from '../../imgs/TrackMate-adminttools.png';
import '../styles/ImageGallery.css';

const Gallery = () => {
  return (
    <MDBCarousel  showControls fade>
      <MDBCarouselItem>
        <img src={trackMateSignup} className="d-block w-100" alt="Sign Up" />
      </MDBCarouselItem>

      <MDBCarouselItem>
        <img src={trackMateLogIn} className="d-block w-100" alt="Log In" />
      </MDBCarouselItem>

      <MDBCarouselItem>
        <img src={trackMateAdminTools} className="d-block w-100" alt="Admin Tools" />
      </MDBCarouselItem>
    </MDBCarousel>
  );
}

export default Gallery;