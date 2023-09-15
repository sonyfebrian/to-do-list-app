import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { BiHome } from "react-icons/bi";
import { RiTodoLine } from "react-icons/ri";
import { logoD, oval, dokumen, logoText } from "../../assets";
import { Container, Row, Col } from "reactstrap";
import NavbarTop from "../Navbar";
import "./style.css";
const SidebarComponent = () => {
  return (
    <>
      <Container fluid>
        <Row className="flex-nowrap">
          <Col xs="auto" md="3" xl="2" className="p-0">
            <div
              className="app-container"
              style={{ backgroundColor: "red", width: "200px" }}
            >
              <Sidebar className="sidebar">
                <Menu
                // menuItemStyles={{
                //   button: ({ level, active, disabled }) => {
                //     if (level === 0) {
                //       return {
                //         color: disabled ? "#eee" : "#455A64",
                //         backgroundColor: active ? "#fff" : undefined,
                //         "&:hover": {
                //           background:
                //             "linear-gradient(90deg, #4F92E3 100%, #154886 100%)",
                //           color: "white !important",
                //           borderRadius: "8px !important",
                //           fontWeight: "bold !important",
                //         },
                //       };
                //     }
                //   },
                // }}
                >
                  <div className="d-inline-block">
                    <img
                      src={logoD}
                      alt="logo dashboard"
                      className="img-fluid"
                      style={{
                        maxWidth: "100px",
                        height: "auto",
                        marginLeft: "20px",
                      }}
                    />
                  </div>
                  <div
                    className="d-inline-block"
                    style={{
                      float: "right",
                      marginTop: "50px",
                      marginRight: "10px",
                    }}
                  >
                    <img
                      src={oval}
                      alt="logo dashboard"
                      className="img-fluid"
                      style={{ maxWidth: "100px", height: "auto" }}
                    />
                  </div>
                  {/* <MenuItem className="menu1">
              <img src={logoD} alt="logo dashboard" />
            </MenuItem> */}
                  <MenuItem icon={<BiHome />} className="menu-item">
                    {" "}
                    Dashboard{" "}
                  </MenuItem>
                  <MenuItem icon={<RiTodoLine />}> Todo </MenuItem>
                </Menu>
              </Sidebar>

              {/* <h1>WELCOME TO QUICKPAY</h1> */}
            </div>
          </Col>
          <Col md="9" xl="10" className="p-0">
            <NavbarTop />

            <section className="text-gray-600 body-font">
              <div className="inline-flex items-center ml-20">
                <img
                  className="w-5 h-5 object-cover object-center rounded mr-2"
                  alt="hero"
                  src={logoText}
                />
                <p className="leading-relaxed mt-3">Todo</p>
                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-sm">
                  Create Todo +
                </button>
              </div>
              <div className="container mx-auto flex px-5 pt-20 items-center justify-center flex-col">
                <img
                  className="lg:w-2/6 md:w-3/6 w-5/6  object-cover object-center rounded"
                  alt="hero"
                  src={dokumen}
                />
                <p className="leading-relaxed">You Dont Have a Todo yet</p>
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SidebarComponent;
