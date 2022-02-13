import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";


function Header() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Link className="nav-link" to="/">
                    <Navbar.Brand href="/">Course V2</Navbar.Brand>
                </Link>
                <Nav className="me-auto">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/">Register</Link>
                    <Link className="nav-link" to="/">Login</Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header;