import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../App.css";

function NavigationBar() {
  return (
    <Navbar className="navbar" bg="light" expand="lg">
      <Container className="navContainer">
        <Navbar.Brand>
          <img
            src=" https://www.lastminutedeals.co.in/images/lastminutedeals.png"
            alt="lastminute deal"
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Deals</Nav.Link>
            <Nav.Link href="#link">Orders</Nav.Link>
            <Nav.Link href="#link">
              <img src="profile/default.png" />
            </Nav.Link>

            <NavDropdown title="" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Card</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
