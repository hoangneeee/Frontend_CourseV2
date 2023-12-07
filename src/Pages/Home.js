import { useEffect, useState } from "react";
import userApi from "../Api/User/userApi";
import mqttApi from "../Api/Mqtt/mqttApi";
import { Avatar, List, Button, Table, Space, Dropdown, Spin } from "antd";
import { randomChar, randomString } from "../Util/function";
import { v4 as uuidv4 } from "uuid";

import { vi, Faker } from "@faker-js/faker";

const faker = new Faker({
  locale: [vi],
});

function genData() {
  return {
    key: uuidv4(),
    mac: uuidv4(),
    type: "Đèn giao thông",
    address: `${faker.location.city()}`,
  };
}

function ButtonCell({ data }) {
  console.log(data);
  const [pending, setPending] = useState(false);

  const sendMessage = async (action) => {
    setPending(true);
    const res = await mqttApi.sendMessage({
      mac: data.mac,
      message: action,
    });
    setPending(false);
  };

  return pending ? (
    <Spin />
  ) : (
    <Space size="middle">
      <Button
        type="primary"
        style={{
          backgroundColor: "green",
        }}
        onClick={() => {
          sendMessage("Bật đèn xanh").then((r) => {});
        }}
      >
        Xanh
      </Button>
      <Button
        type="primary"
        style={{
          backgroundColor: "#AA0000",
        }}
        onClick={() => {
          sendMessage("Bật đèn đỏ").then((r) => {});
        }}
      >
        Đỏ
      </Button>
      <Button
        type="primary"
        style={{
          backgroundColor: "orange",
        }}
        onClick={() => {
          sendMessage("Bật đèn vàng").then((r) => {});
        }}
      >
        Vàng
      </Button>
    </Space>
  );
}

const columns = [
  {
    title: "Mac",
    dataIndex: "mac",
  },
  {
    title: "Loại",
    dataIndex: "type",
  },
  {
    title: "Địa chỉ",
    dataIndex: "address",
  },
  {
    title: "Action",
    dataIndex: "action",
    render: (_, record) => <ButtonCell data={record} />,
  },
];

function Home() {
  const [messageList, setMessageList] = useState([]);
  const [device, setDevice] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);

  const dataDevice = [
    genData(),
    genData(),
    genData(),
    genData(),
    genData(),
    genData(),
    genData(),
    genData(),
    genData(),
    genData(),
    genData(),
  ];

  useEffect(() => {
    setDevice(dataDevice);
  }, []);

  const fetchMessageList = async () => {
    try {
      setSelectedRowKeys([]);
      setLoading(true);
      const res = await mqttApi.getMessage();
      console.log("Success", res.data);

      setMessageList(res.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  // useEffect(() => {
  //     fetchMessageList().then(r => {});
  // }, []);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  return (
    <>
      <h1 className="text-center text-danger">Danh sách thiết bị</h1>
      <div>
        <div
          style={{
            marginBottom: 16,
          }}
        >
          <Button
            type="primary"
            onClick={() => {}}
            disabled={!hasSelected}
            loading={loading}
          >
            Reload
          </Button>
          <span
            style={{
              marginLeft: 8,
            }}
          >
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
          </span>
        </div>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={device}
        />
      </div>
    </>
  );
}

export default Home;
