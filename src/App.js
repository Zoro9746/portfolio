import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Nav, Navbar, Badge } from 'react-bootstrap';

const App = () => {
  return (
    <div style={{ backgroundColor: '#f4f7f6', minHeight: '100vh', fontFamily: "'Segoe UI', Roboto, sans-serif" }}>
      
      {/* Navigation */}
      <Navbar bg="white" expand="lg" className="shadow-sm sticky-top">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold text-dark">VEDANAYAKI T</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto fw-medium">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <header id="home" className="py-5 bg-white">
        <Container>
          <Row className="align-items-center py-5">
            <Col md={4} className="text-center mb-4 mb-md-0">
              <img 
                src="/profile-photo.jpeg" 
                alt="Vedanayaki T"
                className="rounded-circle shadow-lg border border-4 border-white"
                style={{ width: '260px', height: '260px', objectFit: 'cover' }}
              />
            </Col>
            <Col md={8}>
              <h1 className="display-4 fw-bold text-dark mb-3">Vedanayaki Thangaraj</h1>
              <h6  className="mb-2 px-3 py-2 display-6">Information Science & Engineering</h6>
              <p className="lead text-muted mb-4" style={{ maxWidth: '700px' }}>
                Motivated and detail-oriented graduate from Bannari Amman Institute of Technology. 
                I specialize in creating user-focused solutions with a strong foundation in 
                analytical thinking and problem-solving.
              </p>
              <div className="d-flex gap-3">
                <a href="mailto:vedhanayakithangaraj@gmail.com" className="btn btn-dark px-4">Email Me</a>
                <a href="#projects" className="btn btn-outline-dark px-4">View Work</a>
              </div>
            </Col>
          </Row>
        </Container>
      </header>

      {/* Projects Section */}
      <section id="projects" className="py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold">Academic Projects</h2>
            <div className="mx-auto bg-primary" style={{ height: '3px', width: '50px' }}></div>
          </div>
          <Row>
            {/* Project 1 */}
            <Col md={6} className="mb-4">
              <Card className="h-100 border-0 shadow-sm hover-shadow">
                <Card.Body className="p-4">
                  <h4 className="fw-bold">Graphical Password Authenticator</h4>
                  <p className="text-muted">
                    Designed an image-based login system to replace text passwords, 
                    improving accessibility and security using SHA-256 hashing.
                  </p>
                  <div className="mt-3">
                    <Badge pill bg="light" text="dark" className="border me-2">HTML</Badge>
                    <Badge pill bg="light" text="dark" className="border me-2">CSS</Badge>
                    <Badge pill bg="light" text="dark" className="border">Bootstrap</Badge>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            {/* Project 2 */}
            <Col md={6} className="mb-4">
              <Card className="h-100 border-0 shadow-sm hover-shadow">
                <Card.Body className="p-4">
                  <h4 className="fw-bold">Multilingual Agnostic Chatbot</h4>
                  <p className="text-muted">
                    Developed an AI chatbot utilizing NLP and semantic search to provide 
                    real-time, secure access to educational data across platforms.
                  </p>
                  <div className="mt-3">
                    <Badge pill bg="light" text="dark" className="border me-2">NLP</Badge>
                    <Badge pill bg="light" text="dark" className="border me-2">Python</Badge>
                    <Badge pill bg="light" text="dark" className="border">AI</Badge>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Skills & Extras Section */}
      <section id="skills" className="py-5 bg-white">
        <Container>
          <Row>
            <Col lg={4} className="mb-5">
              <h3 className="fw-bold mb-4">Technical Expertise</h3>
              <div className="d-flex flex-wrap gap-2">
                {['C', 'SQL', 'UI/UX', 'Python', 'Web Tech', 'Java','FullStack(MERN)'].map(skill => (
                  <span key={skill} className="badge border text-dark fw-normal px-3 py-2 bg-light">
                    {skill}
                  </span>
                ))}
              </div>
            </Col>
            <Col lg={4} className="mb-5">
              <h3 className="fw-bold mb-4">Certifications</h3>
              <ul className="list-unstyled text-muted">
                <li className="mb-2">● Azure DevOps (Coursera)</li>
                <li className="mb-2">● Cyber Security (Threat Prism)</li>
                <li className="mb-2">● Responsive Web Design (Freecodecamp)</li>
                <li className="mb-2">● Internet of Things (NPTEL)</li>
              </ul>
            </Col>
            <Col lg={4} className="mb-5">
              <h3 className="fw-bold mb-4">Leadership</h3>
              <p className="text-muted mb-1"><strong>Vice-Captain</strong></p>
              <p className="text-muted small">College Basketball Team</p>
              <p className="text-muted mb-1"><strong>Board Member</strong></p>
              <p className="text-muted small">The GreatMinds Club</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="py-5 bg-dark text-white text-center">
        <Container>
          <p className="mb-1">VEDANAYAKI T</p>
          <p className="small text-secondary mb-4">Palani, Tamil Nadu - 624601</p>
          <div className="d-flex justify-content-center gap-4">
            <a href="https://github.com/Zoro9746" className="text-white text-decoration-none small">GitHub</a>
            <a href="https://linkedin.com" className="text-white text-decoration-none small">LinkedIn</a>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default App;