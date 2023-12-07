import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import userApi from "../Api/User/userApi";
import { useParams } from "react-router-dom";
import { vi, Faker } from "@faker-js/faker";
import moment from "moment";
import { pad, random } from "../Util/function";
import mqttApi from "../Api/Mqtt/mqttApi";

const faker = new Faker({
  locale: [vi],
});

const generateRandomSchedule = () => {
  const randomDay = moment(faker.date.recent().toISOString()).format(
    "DD/MM/YYYY HH:mm"
  );
  return `${randomDay}`;
};

const generateRandomAddress = () => {
  return `${faker.location.city()}`;
};

const generateRandomLocation = () => {
  return {
    latitude: faker.location.latitude(),
    longitude: faker.location.longitude(),
  };
};

function Schedule() {
  const [deviceStates, setDeviceStates] = useState(Array(30).fill(false));
  const [currentPage, setCurrentPage] = useState(1);

  const [selectedDevice, setSelectedDevice] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const devicesPerPage = 9;

  const indexOfLastDevice = currentPage * devicesPerPage;
  const indexOfFirstDevice = indexOfLastDevice - devicesPerPage;
  const currentDevices = deviceStates.slice(
    indexOfFirstDevice,
    indexOfLastDevice
  );

  function getLink(lat, long) {
    return `https://maps.google.com/maps?q=${lat},${long}&hl=es;&output=embed`;
  }

  const handleViewDetails = (index) => {
    const location = generateRandomLocation();
    setSelectedDevice({ index: indexOfFirstDevice + index, location });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedDevice(null);
  };

  const handleToggle = async (index) => {
    try {
      const newDeviceStates = [...deviceStates];
      const response = await mqttApi.sendDataSchedule({
        deviceCode: pad(index + 1, 4),
        state: !newDeviceStates[indexOfFirstDevice + index],
      });

      newDeviceStates[indexOfFirstDevice + index] =
        !newDeviceStates[indexOfFirstDevice + index];
      setDeviceStates(newDeviceStates);
    } catch (error) {
      console.error("Error toggling device:", error);
    }
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container fluid>
      <h1 className="text-center my-4">Lịch thiết bị</h1>
      <Row className="justify-content-center">
        {currentDevices.map((deviceState, index) => (
          <Col md={4} key={indexOfFirstDevice + index}>
            <Card className="shadow" onClick={() => handleViewDetails(index)}>
              <Card.Body>
                <Card.Title className="text-center">{`Device ${
                  indexOfFirstDevice + index + 1
                } - ${pad(index + 1, 4)}`}</Card.Title>
                <Card.Text className="text-center">
                  Trạng thái: {deviceState ? "On" : "Off"}
                </Card.Text>
                <Card.Text className="text-center">
                  Lịch tiếp theo: {generateRandomSchedule()}
                </Card.Text>
                <Card.Text className="text-center">
                  Địa chỉ: {generateRandomAddress()}
                </Card.Text>
                <Button
                  variant={deviceState ? "danger" : "success"}
                  block
                  onClick={() => handleToggle(index)}
                  className="mt-3"
                >
                  {deviceState ? "Turn Off" : "Turn On"}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Chi tiết thiết bị</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <iframe
              id="iframeId"
              src={`https://maps.google.com/maps?q=${random(8,23)},${random(102,109)}&hl=es;&output=embed`}
              height="500px"
              width="100%"
            ></iframe>
          </div>
        </Modal.Body>
      </Modal>

      <div className="text-center mt-4">
        {[...Array(Math.ceil(deviceStates.length / devicesPerPage))].map(
          (_, index) => (
            <button key={index + 1} onClick={() => paginate(index + 1)}>
              {index + 1}
            </button>
          )
        )}
      </div>
    </Container>
  );
}

export default Schedule;
