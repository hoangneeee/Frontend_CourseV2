import {useEffect, useState} from "react";
import mqttApi from "../Api/Mqtt/mqttApi";
import {Avatar, List, Divider, Typography} from "antd";

function Action() {
    const [loading, setLoading] = useState(false);
    const [messageList, setMessageList] = useState([])

    const fetchMessageList = async () => {
        try {
            setLoading(true)
            const res = await mqttApi.getMessage();
            console.log('Success', res.data);

            setMessageList(res.data);
            setLoading(false)
        } catch (error) {
            console.error(error);
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchMessageList().then(r => {});
    }, []);

    return (
        <>
            <h1 className="text-center text-danger">Action History</h1>
            <Divider orientation="left">History</Divider>
            <List
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={messageList}
                renderItem={(item) => (
                    <List.Item>
                        <Typography.Text mark>Mac Device {item.mac} :</Typography.Text> {item.message}
                    </List.Item>
                )}
            />

        </>
    );
}

export default Action;
