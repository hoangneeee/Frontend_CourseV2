import {Col, Container, Row} from "react-bootstrap";


function Footer() {
    return (
        <>
            <Container className="mt-2 mb-2 bg-black p-3">
                <Row>
                    <Col className="col-6 text-light text-center">Version : 1.0.0</Col>
                    <Col className="col-6 text-light text-center">Copyright : Vo Hoang</Col>
                </Row>
            </Container>
        </>
    )
}

export default Footer;