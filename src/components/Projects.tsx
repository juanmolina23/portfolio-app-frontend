import { Col, Container, Row } from "react-bootstrap";
import Project from "./Project";

function Projects() {
  return (
    <section id='projects'>
      <Container fluid className='d-flex flex-column justify-content-center'>
        <h1 className='text-center mb-3'>My Recent Work</h1>
        <h2 className='lead mb-5 text-center'>
          Here are a few past design projects I've worked on.
        </h2>
        <Row className=''>
          <Col lg={4} md={4} sm={6}>
            <Project
              projectImg='src/assets/expensify.jpg'
              projectUrl=''
              projectDesc='Expensify App!'
            />
          </Col>
          <Col lg={4} md={4} sm={6}>
            <Project
              projectImg='src/assets/expensify.jpg'
              projectUrl=''
              projectDesc='Complex App!'
            />
          </Col>
          <Col lg={4} md={4} sm={6}>
            <Project
              projectImg='src/assets/expensify.jpg'
              projectUrl=''
              projectDesc='Complex App!'
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
