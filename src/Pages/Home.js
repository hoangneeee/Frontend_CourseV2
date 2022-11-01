import {useEffect, useState} from "react";
import userApi from "../Api/User/userApi";
import mqttApi from "../Api/Mqtt/mqttApi";
import {ListGroup, Row} from "react-bootstrap";
import MessageList from "../Components/MessageList";


function Home() {
    const [messageList, setMessageList] = useState([])

    useEffect(() => {
        const fetchMessageList = async () => {
            try {
                const res = await mqttApi.getMessage();
                console.log('Success', res.data);

                setMessageList(res.data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchMessageList();
    }, []);

    return (
        <>
            <h1 className="text-center text-danger">Device Message</h1>
            <Row>
                <ListGroup>
                    {messageList.map((data) => <MessageList message={data.message} mac={data.mac}/>)}
                </ListGroup>
            </Row>
        </>
    );
}

export default Home;
