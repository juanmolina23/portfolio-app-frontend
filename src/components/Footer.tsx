import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <Container fluid className='px-0 purple-bg-color pt-5' id='footer'>
      <footer className='py-3 mt-auto'>
        <Nav className='nav justify-content-center pb-3 mb-3'>
          <Nav.Item>
            <Nav.Link
              as={Link}
              className='nav-link px-2 text-body-secondary'
              to={"/"}
            >
              <i className='fa-solid fa-house'></i> Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className='nav-link px-2 text-body-secondary'
              eventKey='link-1'
              href='https://github.com/juanmolina23'
            >
              <i className='fa-brands fa-github'></i> GitHub
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className='nav-link px-2 text-body-secondary'
              eventKey='link-2'
              href='https://www.linkedin.com/in/juanmolina23/'
            >
              <i className='fa-brands fa-linkedin'></i> LinkedIn
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <p className='text-center '>
          <i className='fa-regular fa-copyright'></i> Juan Molina Dev{" "}
          {new Date().getFullYear()}
        </p>
      </footer>
    </Container>
  );
}
export default Footer;
