import TrackMateView from './views/TrackMateView';
import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

const TrackMate =() =>{


    return(
    <Container fluid>
        <Row classname='g-0'>
            <Col md={8} className="main-content">
                <Routes>
                    <Route path='/' element={<TrackMateView/>}/>
                </Routes> 
            </Col>
        </Row>
    </Container>
    )
}

export default TrackMate;