import { Col, Container, Row } from "react-bootstrap";

function About() {
  return (
    <section className='purple-bg-color pb-6' id='about-me'>
      <Container className='pb-5'>
        <Row className='d-flex flex-column justify-content-center align-items-center'>
          <Col lg={7} className='text-center'>
            <h3 className='mt-5'>
              Hi there, my name is Juan. Nice to meet you.
            </h3>
            <p className='lead mt-5 '>
              Since beginning my journey as a freelance designer over 11 years
              ago, I've done remote work for agencies, consulted for startups,
              and collaborated with talented people to create digital products
              for both business and consumer use. I'm quietly confident,
              naturally curious, and perpetually working on improving my chops
              one design problem at a time.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
