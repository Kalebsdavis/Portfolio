import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem
} from 'mdb-react-ui-kit';

import LandingPage from '../../imgs/Banking-Application/LandingPage.png';
import SignUp from '../../imgs/Banking-Application/SignUp.png';
import Login from '../../imgs/Banking-Application/LogIn.png';
import AccountPage from '../../imgs/Banking-Application/AccountPage.png';
import TransactionTool from '../../imgs/Banking-Application/TransactionTool.png';
import TransactionHistory from '../../imgs/Banking-Application/TransactionHistory.png';

import '../styles/BankGallery.css';

const BankGallery = () => {
  return (
    <MDBCarousel showControls fade interval={2500}dark>
      <MDBCarouselItem className="active" interval={1000}>
        <img src={LandingPage} className="d-block w-100" alt="LandingPage" />
      </MDBCarouselItem>

      <MDBCarouselItem>
        <img src={SignUp} className="d-block w-100" alt="MyReservations" />
      </MDBCarouselItem>

      <MDBCarouselItem>
        <img src={Login} className="d-block w-100" alt="payment" />
      </MDBCarouselItem>
      <MDBCarouselItem>
        <img src={AccountPage} className="d-block w-100" alt="calendar" />
      </MDBCarouselItem>
      <MDBCarouselItem>
        <img src={TransactionTool} className="d-block w-100" alt="calendar2" />
      </MDBCarouselItem>
      <MDBCarouselItem>
        <img src={TransactionHistory} className="d-block w-100" alt="employeeView" />
      </MDBCarouselItem>
    </MDBCarousel>
  );
}

export default BankGallery;