import {Button, Card, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

function CourseCard(props) {
    const createTime = props.course.create_time
    let path = `/course/${props.course.id}`

    return (
        <Col md={4} xs={12}>
            <Card>
                <Link to={path}>
                    <Card.Header>
                        <Card.Img variant="top" src={props.course.image} style={{width: '100%', height: '180px'}}/>
                    </Card.Header>
                </Link>
                <Card.Body>
                    <Card.Title>{props.course.title}</Card.Title>
                    <Card.Text as={"h6"}>Author : {props.course.author_id.username}</Card.Text>
                    <Card.Text as={"h6"}>Create Time : {createTime.slice(0, 4)+'-'+createTime.slice(4, 6)+'-'+createTime.slice(6, 8)}</Card.Text>
                    <Card.Text as={"h6"}>Price : {props.course.price} $</Card.Text>
                    <Card.Text>Description : {props.course.description}</Card.Text>
                    <Button variant="danger">Add Cart</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default CourseCard;
