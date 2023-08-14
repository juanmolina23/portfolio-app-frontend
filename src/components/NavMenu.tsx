import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import GenericModal from "./GenericModal";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { removeAuthUser } from "../store/features/userSlice";
import axios from "axios";

function NavMenu() {
  const currentUser = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();

  async function handleLogout() {
    const data = await (await axios.post("/logout")).data;
    console.log(data);
    setLoggingOut(true);
    dispatch(removeAuthUser());
  }

  const [loggingOut, setLoggingOut] = useState<boolean>(false);
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
              <Nav.Link as={Link} to="/projects" eventKey={3}>
                Projects
              </Nav.Link>
            ) : (
              ""
            )}
          </Nav>
          <hr className="text-white" />
          <Nav>
            {currentUser.username != "" ? (
              <Nav.Item>
                <Button
                  variant="outline-success"
                  size="lg"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </Nav.Item>
            ) : (
              <Nav.Link as={Link} to="/login" eventKey={4}>
                <Button variant="outline-success" size="lg">
                  Login
                </Button>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
      {loggingOut && (
        <GenericModal
          header="Logged out"
          bodyMessage="You have successfully logged out! You will be redirected to the home page"
          hasFooter={false}
        />
      )}
    </Navbar>
  );
}

export default NavMenu;
