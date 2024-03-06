import { Row, Col, Container } from "react-bootstrap";

function CallToAction() {
  return (
    <Container
      fluid
      id='callToAction'
      className='d-flex justify-content-center'
    >
      <div className='box w-75 rounded position-relative d-flex justify-content-center flex-row align-items-center'>
        <Row className='w-100'>
          <Col lg={4}>
            <h1 className='text-white text-center'>Start a project</h1>
          </Col>
          <Col lg={4}>
            <p className='text-white text-center'>
              Interested in working together? We should queue up a time to chat.{" "}
              <span className='mint-text'>I’ll buy the coffee.</span>
            </p>
          </Col>
          <Col lg={4} className='d-flex justify-content-center'>
            <a href='mailto:molinajuan23@icloud.com'>
              <button className='btn btn-lg btn-mint-outline rounded-pill'>
                <i className='fa-solid fa-handshake'></i> Let's do this
              </button>
            </a>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default CallToAction;
