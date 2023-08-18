import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
//import { useAppSelector } from "../store/store";
import logo from "../assets/new_logo_white.png";
import { useState } from "react";

function NavMenu() {
  //const currentUser = useAppSelector((state) => state.user.user);
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      fixed="top"
      expand="lg"
      expanded={expanded}
      className="purple-bg-color"
      collapseOnSelect
    >
      <Container className="purple-bg-color">
        <Navbar.Brand
          as={Link}
          to="/"
          className="text-white"
          style={{ width: "200px", height: "auto" }}
        >
          <img src={logo} className="img-fluid" alt="..." />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(true)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={Link}
              to="/"
              className="text-white"
              onClick={() => setExpanded(false)}
            >
              Home
            </Nav.Link>
            <NavDropdown
              title="Projects"
              id="collasible-nav-dropdown"
              className="text-white text-decoration-none"
            >
              <NavDropdown.Item
                as={Link}
                to="/projects"
                className="text-white"
                onClick={() => setExpanded(false)}
              >
                All Projects
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                as={Link}
                to="/projects/expensify-app"
                className="text-white"
                onClick={() => setExpanded(false)}
              >
                Expensify App
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/projects/complex-app"
                className="text-white"
                onClick={() => setExpanded(false)}
              >
                Complex App
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              as={Link}
              to="/resume"
              className="text-white"
              onClick={() => setExpanded(false)}
            >
              Resume
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className="text-white"
              onClick={() => setExpanded(false)}
            >
              Contact
            </Nav.Link>
          </Nav>
          <hr className="text-white" />
          <Nav>
            <Nav.Link
              as={Link}
              to="/contact"
              className="btn btn-lg purple-btn-outline rounded-pill px-4"
              onClick={() => setExpanded(false)}
            >
              Say Hello
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMenu;
