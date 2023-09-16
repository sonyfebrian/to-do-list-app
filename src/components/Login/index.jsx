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
import { useNavigate } from "react-router-dom";
import userData from "../../constants/data";
import { logo, top, bottom } from "../../assets";

import "./styles.css";
const Login = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = userData.find((u) => u.email === email);

    if (!user) {
      setError("User not found. ");
    } else if (user.password !== password) {
      setError("Invalid password.");
    } else {
      setError("");
      // Successful login, navigate to the dashboard
      navigate("/dashboard"); // Redirect to the dashboard route
      localStorage.setItem("user", JSON.stringify(user));
    }
  };
  return (
    <>
      <Container fluid>
        <Row>
          <Col
            sm="10"
            md="6"
            style={isDesktop ? { height: "100vh" } : {}}
            className="bg-light"
          >
            <img src={logo} className="img-fluid" alt="Sample image" />
            <img
              src={bottom}
              className="position-absolute bottom-0 start-50 translate-middle-x   ms-3"
              alt="Sample image"
              style={{ maxWidth: "100px", zIndex: -1 }} // Adjust the width as needed
            />
            <img
              src={top}
              className="img-fluid position-absolute top-0 end-0 me-3"
              alt="Sample image"
              style={{ maxWidth: "100px" }} // Adjust the width as needed
            />
          </Col>

          <Col sm="4" md="6">
            <Form className="px-4 py-3">
              <p className="lead fw-normal me-3 mt-5 ">Welcome Back</p>
              <FormGroup className="mb-4">
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  bsSize="lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup>
              <Button
                className="mb-0 px-5 w-100"
                style={{ backgroundColor: "#154886" }}
                size="lg"
                onClick={handleLogin}
              >
                Sign In
              </Button>
              <div className="divider d-flex align-items-center my-4">
                {error && <p>{error}</p>}
                <p className="text-center fw-bold mx-3 mb-0">Or</p>
              </div>
              <Button
                className="mb-0 px-5 w-100"
                style={{ backgroundColor: "#ffffff", color: "black" }}
                size="lg"
              >
                <img
                  className="google-icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                />
                Sign in with google
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
