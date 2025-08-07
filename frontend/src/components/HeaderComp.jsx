import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavbarComp() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="py-3">
      <Container>
        <Navbar.Brand className="fs-4" href="#home">Your Brand</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="ms-auto">
            <Nav.Link className="fs-4" href="#intro">Intro</Nav.Link>
            <Nav.Link className="fs-4" href="#gallery">Gallery</Nav.Link>
            <Nav.Link className="fs-4" href="#pricing">Pricing</Nav.Link>
            <Nav.Link className="fs-4" href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
