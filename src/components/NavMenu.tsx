import { Container, Nav, Navbar, Button, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../store/store";

function NavMenu() {
  const currentUser = useAppSelector((state) => state.user.user);
  const navigate = useNavigate();

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
            {currentUser.username != "" ? (
              <NavDropdown title="Projects" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/projects">
                  All Projects
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/expensify-app">
                  Expensify App
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/complex-app">
                  Complex App
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              ""
            )}
            <Nav.Link as={Link} to="/resume" eventKey={3}>
              Resume
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" eventKey={4}>
              Contact
            </Nav.Link>
          </Nav>
          <hr className="text-white" />
          <Nav>
            {currentUser.username != "" ? (
              <Nav.Link as={Link} to="/login" eventKey={5}>
                <Button
                  variant="outline-success"
                  size="lg"
                  onClick={() => navigate("/logout")}
                >
                  Logout
                </Button>
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/login" eventKey={6}>
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
