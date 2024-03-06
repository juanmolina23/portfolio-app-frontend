import Container from "react-bootstrap/Container";
import avatarImg from "../assets/jm-avatar.svg";
import devicesImg from "../assets/devices.svg";
import Projects from "./Projects";
import { Col, Row } from "react-bootstrap";
import CallToAction from "./CallToAction";
import Skills from "./Skills";
import About from "./About";

function Home() {
  return (
    <Container fluid className='px-0 pt-5 mt-5'>
      <section className='mt-5' id='home'>
        <Container>
          <Row>
            <Col lg={12} className='text-center'>
              <h1>Frontend, Backend, Full Stack Developer</h1>
              <p className='lead'>
                I design and code beautifully simple things, and I love what I
                do.
              </p>
              <img className='my-5' src={avatarImg} alt='Avatar of myself' />
            </Col>
          </Row>
          <Row>
            <Col lg={12} className='text-center'>
              <img
                className='mt-5 img-fluid'
                src={devicesImg}
                alt='Image of electronic devices'
              />
            </Col>
          </Row>
        </Container>
      </section>
      <About />
      <Skills />
      <Projects />
      <CallToAction />
    </Container>
  );
}

export default Home;
