import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavMenu() {
  const isAuthenticated: Boolean = !!localStorage.getItem("user");
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      bg="dark"
      data-bs-theme="dark"
      collapseOnSelect
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" eventKey={1}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" eventKey={2}>
              About
            </Nav.Link>
          </Nav>
          <hr className="text-white" />
          <Nav>
            {isAuthenticated ? (
              <Nav.Link as={Link} to="/logout" eventKey={3}>
                <Button variant="outline-success" size="lg">
                  Logout
                </Button>
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/login" eventKey={3}>
                <Button variant="outline-success" size="lg">
                  Login
                </Button>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMenu;
