import { useState, useEffect } from "react";

import {
  Container,
  Row,
  Col,
  Button,
  Input,
  Form,
  FormGroup,
  Label,
} from "reactstrap";

import "./App.css";

function App() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    // Add a listener to check for window width changes
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    // Remove the listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <Container fluid>
        <Row>
          <Col
            sm="10"
            md="6"
            style={isDesktop ? { height: "100vh" } : null}
            className="bg-light"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample image"
            />
          </Col>

          <Col sm="4" md="6">
            <div className="d-flex flex-row align-items-center justify-content-center">
              <p className="lead fw-normal mb-0 me-3">Sign in with</p>
              <Button color="primary" className="me-2">
                <i className="fab fa-facebook-f"></i>
              </Button>
              <Button color="info" className="me-2">
                <i className="fab fa-twitter"></i>
              </Button>
              <Button color="linkedin" className="me-2">
                <i className="fab fa-linkedin-in"></i>
              </Button>
            </div>
            <div className="divider d-flex align-items-center my-4">
              <p className="text-center fw-bold mx-3 mb-0">Or</p>
            </div>
            <Form>
              <FormGroup className="mb-4">
                <Label for="email">Email address</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email address"
                  bsSize="lg"
                />
              </FormGroup>
              <FormGroup className="mb-4">
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  bsSize="lg"
                />
              </FormGroup>
              <div className="d-flex justify-content-between mb-4">
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" /> Remember me
                  </Label>
                </FormGroup>
                <a href="!#">Forgot password?</a>
              </div>
              <div className="text-center text-md-start mt-4 pt-2">
                <Button className="mb-0 px-5" color="primary" size="lg">
                  Login
                </Button>
                <p className="small fw-bold mt-2 pt-1 mb-2">
                  Dont have an account?{" "}
                  <a href="#!" className="link-danger">
                    Register
                  </a>
                </p>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
