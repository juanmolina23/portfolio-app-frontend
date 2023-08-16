import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useAppDispatch } from "../store/store";
import { addAuthUser } from "../store/features/userSlice";

function Login() {
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState<String>("");
  const [password, setPassword] = useState<String>("");
  const navigate = useNavigate();

  function validateUsername(username: String) {
    if (username !== "") {
      setUsername(username);
    }
  }
  function validatePassword(password: String) {
    if (password !== "") {
      setPassword(password);
    }
  }
  function handleLogin(e: React.MouseEvent) {
    e.preventDefault();

    try {
      axios
        .post("/login", {
          username: username,
          password: password,
        })
        .then((res) => {
          if (res.status == 200) {
            dispatch(addAuthUser(res.data));
            navigate("/");
          } else {
            console.log(res.data.message);
          }
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container fluid className="appContainer">
      <Row className="d-flex justify-content-center">
        <Col lg={4}>
          <Form className="p-4 p-md-5 border rounded-3 bg-light">
            <h1 className="text-center mt-3 mb-4">Login</h1>
            <Form.Group className="form-floating mb-3">
              <Form.Control
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Username"
                onChange={(e) => validateUsername(e.target.value)}
              />
              <Form.Label htmlFor="floatingInput">Username</Form.Label>
            </Form.Group>
            <Form.Group className="form-floating mb-3">
              <Form.Control
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                onChange={(e) => validatePassword(e.target.value)}
              />
              <Form.Label htmlFor="floatingInput">Password</Form.Label>
            </Form.Group>
            <Button
              variant="primary"
              size="lg"
              className="w-100"
              type="submit"
              onClick={(e) => handleLogin(e)}
            >
              Login
            </Button>
            <hr className="my-4" />
            <div className="d-flex justify-content-center">
              <small className="text-muted">
                Do not have an account? <Link to="/sign-up">Sign up!</Link>
              </small>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
