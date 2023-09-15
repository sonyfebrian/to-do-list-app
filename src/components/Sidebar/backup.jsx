import {
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  // Dropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
} from "reactstrap";
import { BiHome } from "react-icons/bi";
import { RiTodoLine } from "react-icons/ri";
import NavbarTop from "../Navbar";

const Sidebar = () => {
  return (
    <>
      <Container fluid>
        <Row className="flex-nowrap">
          <Col
            xs="auto"
            md="3"
            xl="2"
            className="px-sm-2 px-0 bg-white shadow-lg"
          >
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <a
                href="/"
                className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
              >
                <span className="fs-5 d-none d-sm-inline">Menu</span>
              </a>
              <Nav vertical id="menu">
                <NavItem>
                  <NavLink href="#">
                    <BiHome />
                    <p className="ms-1 p-1 d-none d-sm-inline">Dashboard</p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    <RiTodoLine />
                    <span className="ms-1 d-none d-sm-inline">Todo</span>
                  </NavLink>
                </NavItem>
              </Nav>
              <hr />
              {/* <Dropdown>
                <DropdownToggle
                  tag="a"
                  className="d-flex align-items-center text-white text-decoration-none"
                  id="dropdownUser1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://github.com/mdo.png"
                    alt="hugenerd"
                    width="30"
                    height="30"
                    className="rounded-circle"
                  />
                  <span className="d-none d-sm-inline mx-1">loser</span>
                </DropdownToggle>
                <DropdownMenu dark className="text-small shadow">
                  <DropdownItem href="#">New project...</DropdownItem>
                  <DropdownItem href="#">Settings</DropdownItem>
                  <DropdownItem href="#">Profile</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href="#">Sign out</DropdownItem>
                </DropdownMenu>
              </Dropdown> */}
            </div>
          </Col>
          <Col md="9" xl="10" className="p-0">
            <NavbarTop />
          </Col>
        </Row>
      </Container>
      {/* <NavbarTop /> */}
    </>
  );
};

export default Sidebar;
