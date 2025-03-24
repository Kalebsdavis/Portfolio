import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem
} from 'mdb-react-ui-kit';

import RVLandingPage from '../../imgs/RV-Park/LandingPage.png';
import RVMyReservations from '../../imgs/RV-Park/MyReservations.png';
import RVPayment from '../../imgs/RV-Park/Payment.png';
import RVCalendarSelection from '../../imgs/RV-Park/CalendarSelection.png';
import RVCalendarSelection2 from '../../imgs/RV-Park/CalendarSelection2.png';
import RVEmployeeView from '../../imgs/RV-Park/EmployeeView.png';
import RVEmployeeReservations from '../../imgs/RV-Park/EmployeeReservations.png';
import RVAdminView from '../../imgs/RV-Park/AdminView.png';
import RVChangeUserRoles from '../../imgs/RV-Park/ChangeUserRoles.png';

import '../styles/RVGallery.css';

const TrackMateGallery = () => {
  return (
    <MDBCarousel  showControls fade>
      <MDBCarouselItem>
        <img src={RVLandingPage} className="d-block w-100" alt="LandingPage" />
      </MDBCarouselItem>

      <MDBCarouselItem>
        <img src={RVMyReservations} className="d-block w-100" alt="MyReservations" />
      </MDBCarouselItem>

      <MDBCarouselItem>
        <img src={RVPayment} className="d-block w-100" alt="payment" />
      </MDBCarouselItem>
      <MDBCarouselItem>
        <img src={RVCalendarSelection} className="d-block w-100" alt="calendar" />
      </MDBCarouselItem>
      <MDBCarouselItem>
        <img src={RVCalendarSelection2} className="d-block w-100" alt="calendar2" />
      </MDBCarouselItem>
      <MDBCarouselItem>
        <img src={RVEmployeeView} className="d-block w-100" alt="employeeView" />
      </MDBCarouselItem>
      <MDBCarouselItem>
        <img src={RVEmployeeReservations} className="d-block w-100" alt="employeeReservations" />
      </MDBCarouselItem>
      <MDBCarouselItem>
        <img src={RVAdminView} className="d-block w-100" alt="Admin Tools" />
      </MDBCarouselItem>
      <MDBCarouselItem>
        <img src={RVChangeUserRoles} className="d-block w-100" alt="changeUserRoles" />
      </MDBCarouselItem>
    </MDBCarousel>
  );
}

export default TrackMateGallery;