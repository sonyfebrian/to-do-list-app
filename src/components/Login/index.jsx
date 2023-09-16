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
  FormFeedback,
  InputGroup,
  InputGroupText,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userAction } from "../../store/User.store";
import { logo, top, bottom } from "../../assets";
import * as Yup from "yup";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "./styles.css";

const Login = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLogin = async () => {
    try {
      await validationSchema.validate(
        { email, password },
        { abortEarly: false }
      );

      setError({ email: "", password: "" });

      const user = users.find((u) => u.email === email);

      if (!user) {
        setError({ email: "User not found.", password: "" });
        return;
      } else if (user.password !== password) {
        setError({ email: "", password: "Invalid password." });
        return;
      } else {
        dispatch(userAction.signIn(user));
        navigate("/dashboard");
      }
    } catch (validationError) {
      const newErrors = {};
      validationError.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });
      setError(newErrors);
    }
  };
  const handleSignInGoogle = () => {
    dispatch(
      userAction.signIn({
        email: "user@example.com",
        password: "password",
        name: "adi",
        role: "guest",
      })
    );
    navigate("/dashboard");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
                  invalid={!!error.email}
                  onChange={({ target }) => setEmail(target.value)}
                />
                <FormFeedback>{error.email}</FormFeedback>
              </FormGroup>
              <FormGroup className="mb-4">
                <Label for="password">Password</Label>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Password"
                    bsSize="lg"
                    value={password}
                    invalid={!!error.password}
                    onChange={({ target }) => setPassword(target.value)}
                  />

                  <span
                    onClick={togglePasswordVisibility}
                    style={{ cursor: "pointer" }}
                  >
                    {showPassword ? (
                      <InputGroupText>
                        <AiOutlineEye className="w-5 sm:w-5 h-8 sm:h-8 " />
                      </InputGroupText>
                    ) : (
                      <InputGroupText>
                        <AiOutlineEyeInvisible className="w-5 sm:w-5 h-10 sm:h-10 " />
                      </InputGroupText>
                    )}
                  </span>
                </InputGroup>
                <FormFeedback>{error.password}</FormFeedback>
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
                <p className="text-center fw-bold mx-3 mb-0">Or</p>
              </div>

              <div className="px-6 sm:px-0 ">
                <button
                  type="button"
                  onClick={handleSignInGoogle}
                  className="text-gray-900 w-full bg-white border focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-10 py-2.5 text-center inline-flex items-center justify-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
                >
                  <img
                    className="google-icon"
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  />
                  Sign up with Google
                  <div></div>
                </button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
