import React, { useEffect, useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Card,
  Button,
} from "react-bootstrap";

const HomePage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ overflowX: "hidden", margin: 0, padding: 0 }}>
      {/* HEADER */}
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home">Your Brand</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar">
            <Nav className="ms-auto">
              <Nav.Link href="#intro">Intro</Nav.Link>
              <Nav.Link href="#gallery">Gallery</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* INTRO SECTION */}
      <section
        id="intro"
        className="position-relative"
        style={{
          height: "100vh",
          background: `url('/placeholder.png') center / cover no-repeat`,
          overflow: "hidden",
        }}
      >
        {/* Geometric Shapes - Behind content */}
        {/* Large Box (left side) */}
        <div
          style={{
            position: "absolute",
            width: 450,
            height: 600,
            backgroundColor: "rgba(0, 128, 0, 0.8)",
            top: "50%",
            left: "5%",
            transform: "translateY(-50%)",
            zIndex: 0,
          }}
        />

        {/* Circle (center) */}
        <div
          style={{
            position: "absolute",
            width: 500,
            height: 500,
            borderRadius: "50%",
            backgroundColor: "rgba(255, 0, 0, 0.8)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 0,
          }}
        />

        {/* Box 1 (right-top) */}
        <div
          style={{
            position: "absolute",
            width: 400,
            height: 280,
            backgroundColor: "rgba(0, 0, 255, 0.8)",
            top: "15%",
            right: "5%",
            zIndex: 0,
          }}
        />

        {/* Box 2 (right-bottom) */}
        <div
          style={{
            position: "absolute",
            width: 400,
            height: 280,
            backgroundColor: "rgba(0, 0, 255, 0.8)",
            bottom: "15%",
            right: "5%",
            zIndex: 0,
          }}
        />
      </section>

      {/* GALLERY */}
      <section 
        id="gallery" 
        className="bg-light d-flex align-items-center"
        style={{ 
          minHeight: "100vh", 
          padding: "76px 0 20px 0" 
        }}
      >
        <Container>
          <Row>
            <Col className="text-center mb-5">
              <h2>Our Products</h2>
              <p className="lead">Browse through our amazing collection</p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            {[1, 2, 3].map((i) => (
              <Col md={4} className="mb-4" key={i}>
                <Card className="h-100 shadow-sm">
                  <Card.Img
                    variant="top"
                    src="public/images/placeholder.png"
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>Product {i}</Card.Title>
                    <Card.Text>High quality product description</Card.Text>
                    <div className="mt-auto">
                      <h5 className="text-primary">₱{i * 10}/1g</h5>
                      <Button variant="outline-primary">Add to Cart</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* PRICING */}
      <section
        id="pricing"
        className="position-relative"
        style={{ 
          height: "100vh", 
          margin: 0, 
          padding: "56px 0 0 0",
          display: "flex",
          alignItems: "center"
        }}
      >
        <div
          style={{
            backgroundImage: `url('/placeholder.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${scrollY * 0.3}px)`,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
          }}
        />
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.6)",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
          }}
        />
        <Container className="h-100 d-flex flex-column justify-content-center">
          <Row>
            <Col className="text-center text-white mb-5">
              <h2>Special Offers</h2>
              <p className="lead">Limited time deals you don't want to miss</p>
            </Col>
          </Row>
          <Row className="flex-grow-1 align-items-center">
            {["Basic", "Pro", "Enterprise"].map((plan, idx) => (
              <Col md={4} className="mb-4" key={idx}>
                <Card className="text-center bg-transparent border-light h-100">
                  <Card.Body className="d-flex flex-column justify-content-center">
                    <Card.Title className="text-white">{plan} Plan</Card.Title>
                    <h3 className="text-primary">₱{29 + idx * 30}</h3>
                    <Card.Text className="text-white">
                      {plan === "Basic"
                        ? "Perfect for starters"
                        : plan === "Pro"
                        ? "For professionals"
                        : "For large businesses"}
                    </Card.Text>
                    <Button variant="primary">Choose Plan</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* FOOTER */}
      <footer
        className="bg-dark text-white d-flex align-items-center"
        style={{ 
          minHeight: "100vh", 
          margin: 0, 
          padding: "76px 0 20px 0" 
        }}
      >
        <Container className="h-100 d-flex flex-column justify-content-center">
          <Row className="flex-grow-1 align-items-center">
            <Col md={4} className="mb-4">
              <h5>About Us</h5>
              <p>
                We provide high-quality products and excellent customer service.
              </p>
            </Col>
            <Col md={4} className="mb-4">
              <h5>Quick Links</h5>
              <Nav className="flex-column">
                <Nav.Link href="#faq" className="text-white p-0 mb-2">
                  FAQ
                </Nav.Link>
                <Nav.Link href="#contact" className="text-white p-0 mb-2">
                  Contact
                </Nav.Link>
                <Nav.Link href="#privacy" className="text-white p-0 mb-2">
                  Privacy Policy
                </Nav.Link>
              </Nav>
            </Col>
            <Col md={4} className="mb-4">
              <h5>Follow Us</h5>
              <div>
                <Button variant="outline-light" className="me-2 mb-2">
                  Facebook
                </Button>
                <Button variant="outline-light" className="me-2 mb-2">
                  Twitter
                </Button>
                <Button variant="outline-light" className="me-2 mb-2">
                  Instagram
                </Button>
              </div>
            </Col>
          </Row>
          <hr className="my-4" />
          <Row>
            <Col className="text-center">
              <p className="mb-0">
                &copy; 2025 Your Company. All rights reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default HomePage;
