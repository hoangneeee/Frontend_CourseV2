import {Button, Card, Col} from "react-bootstrap";


function LessonCard(props) {
    const lessonTime = props.lesson.lesson_time

    return (
        <Col md={4} xs={12}>
            <Card>
                <Card.Body>
                    <Card.Title>{props.lesson.lesson_name}</Card.Title>
                    <Card.Text>Time : {lessonTime.slice(0, 2)+':'+lessonTime.slice(2, 4)}</Card.Text>
                    <Button variant="primary">Learn</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default LessonCard;