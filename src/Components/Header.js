import {Button, Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";


function Header() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Link className="nav-link" to="/">
                    <Navbar.Brand href="/">Demo MQTT</Navbar.Brand>
                </Link>
                <Nav className="me-auto">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/action">Action</Link>
                    <Link className="nav-link" to="/schedule">Schedule</Link>
                    <Link className="nav-link" to="/">Login</Link>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Container>
        </Navbar>
    )
}

export default Header;
