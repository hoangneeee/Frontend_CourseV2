import {Row, Col, ListGroup} from "react-bootstrap";

const MessageList = ({message, mac}) => {

    return (
        <ListGroup.Item>{mac}: {message}</ListGroup.Item>
    )
}

export default MessageList
