import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function Signup() {
  return (
    <Container fluid className="appContainer">
      <Row className="d-flex justify-content-center">
        <Col lg={4}>
          <Form className="p-4 p-md-5 border rounded-3 bg-light">
            <h1 className="text-center mt-3 mb-4">Sign Up</h1>
            <Form.Group className="form-floating mb-3">
              <Form.Control
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Username"
              />
              <Form.Label htmlFor="floatingInput">Username</Form.Label>
            </Form.Group>
            <Form.Group className="form-floating mb-3">
              <Form.Control
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <Form.Label htmlFor="floatingInput">Password</Form.Label>
            </Form.Group>
            <Form.Group className="form-floating mb-3">
              <Form.Control
                type="password"
                className="form-control"
                id="floatingConfirmPassword"
                placeholder="Confirm Password"
              />
              <Form.Label htmlFor="floatingConfirmPassword">
                Confirm Password
              </Form.Label>
            </Form.Group>
            <Form.Group className="form-floating mb-3">
              <Form.Control
                type="text"
                className="form-control"
                id="floatingFirstName"
                placeholder="First Name"
              />
              <Form.Label htmlFor="floatingFirstName">First Name</Form.Label>
            </Form.Group>
            <Form.Group className="form-floating mb-3">
              <Form.Control
                type="text"
                className="form-control"
                id="floatingLastName"
                placeholder="Last Name"
              />
              <Form.Label htmlFor="floatingLastName">Last Name</Form.Label>
            </Form.Group>
            <Button variant="primary" size="lg" className="w-100" type="submit">
              Sign Up
            </Button>
            <hr className="my-4" />
            <div className="d-flex justify-content-center">
              <small className="text-muted">
                Already have an account? <Link to="/login">Login!</Link>
              </small>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;
