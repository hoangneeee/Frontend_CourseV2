import './App.css';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container} from "react-bootstrap";
import Body from "./Components/Body";


const App = () => {
    return (
        <Container style={{backgroundColor: "#f5f5f5"}}>
            <Body/>
        </Container>
    );
}

export default App;
