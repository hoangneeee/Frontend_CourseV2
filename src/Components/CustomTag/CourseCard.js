import {Button, Card, Col} from "react-bootstrap";

function CourseCard(props) {
    return (
        <Col md={4} xs={12}>
            <Card>
                <Card.Img variant="top" src={props.course.image} style={{width: '100%', height: '180px'}}/>
                <Card.Body>
                    <Card.Title>{props.course.title}</Card.Title>
                    <Card.Text>
                        {props.course.description}
                    </Card.Text>
                    <Button variant="primary">Add Cart</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default CourseCard;