
import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import BankView from './views/BankView';

const BankApp =() =>{


    return(
    <Container fluid>
        <Row classname='g-0'>
            <Col md={8} className="main-content">
                <Routes>
                    <Route path='/' element={<BankView/>}/>
                </Routes> 
            </Col>
        </Row>
    </Container>
    )
}

export default BankApp;