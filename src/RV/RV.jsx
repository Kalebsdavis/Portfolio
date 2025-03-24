
import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import RVView from './views/RVView';

const RV =() =>{


    return(
    <Container fluid>
        <Row classname='g-0'>
            <Col md={8} className="main-content">
                <Routes>
                    <Route path='/' element={<RVView/>}/>
                </Routes> 
            </Col>
        </Row>
    </Container>
    )
}

export default RV;