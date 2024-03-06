import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import resume from "../assets/SWE_Juan_Molina_Resume.pdf";
import purpleLogo from "../assets/new_logo_purple.png";
import whiteLogo from "../assets/new_logo_white.png";

import { useEffect, useState } from "react";

function NavMenu() {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  function handleNavChange(link: string) {
    setExpanded(false);
    //window.scrollTo(0, 0);
    navigate(link);
  }

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  if (width > 991) {
    return (
      <Navbar
        fixed='top'
        expand='lg'
        expanded={expanded}
        className='bg-white'
        collapseOnSelect
        id='main-navbar'
      >
        <Container className='bg-white'>
          <Navbar.Brand
            as={Link}
            to='/'
            reloadDocument={true}
            className='text-purple'
            style={{ width: "200px", height: "auto" }}
          >
            <img src={purpleLogo} className='img-fluid' alt='...' />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls='basic-navbar-nav'
            onClick={() => setExpanded((prev) => !prev)}
          />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link
                as={Link}
                to='/'
                reloadDocument={true}
                className='text-purple lead'
                onClick={() => setExpanded(false)}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href='/#about-me'
                className='text-purple lead'
                onClick={() => handleNavChange("/#about-me")}
              >
                About Me
              </Nav.Link>
              <Nav.Link
                href='/#projects'
                className='text-purple lead'
                onClick={() => handleNavChange("/#projects")}
              >
                Projects
              </Nav.Link>
            </Nav>
            <hr className='text-purple lead' />
            <Nav>
              <Button
                href={resume}
                target='_blank'
                className='btn btn-lg purple-btn-outline-reverse rounded-pill px-4'
                onClick={() => setExpanded(false)}
              >
                Download Resume
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  } else {
    return (
      <Navbar
        fixed='top'
        expand='lg'
        expanded={expanded}
        className='purple-bg-color'
        collapseOnSelect
        id='main-navbar'
        variant='dark'
      >
        <Container className='purple-bg-color'>
          <Navbar.Brand
            as={Link}
            to='/'
            reloadDocument={true}
            className='text-purple'
            style={{ width: "200px", height: "auto" }}
          >
            <img src={whiteLogo} className='img-fluid' alt='...' />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls='basic-navbar-nav'
            onClick={() => setExpanded((prev) => !prev)}
          />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link
                as={Link}
                to='/'
                reloadDocument={true}
                className='text-white lead'
                onClick={() => setExpanded(false)}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href='/#about-me'
                className='text-white lead'
                onClick={() => handleNavChange("/#about-me")}
              >
                About Me
              </Nav.Link>
              <Nav.Link
                href='/#projects'
                className='text-white lead'
                onClick={() => handleNavChange("/#projects")}
              >
                Projects
              </Nav.Link>
            </Nav>
            <hr className='text-white lead' />
            <Nav>
              <Button
                href={resume}
                target='_blank'
                className='btn btn-lg purple-btn-outline rounded-pill px-4'
                onClick={() => setExpanded(false)}
              >
                Download Resume
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavMenu;
