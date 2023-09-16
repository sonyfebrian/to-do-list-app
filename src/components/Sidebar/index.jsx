import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { BiHome } from "react-icons/bi";
import { RiTodoLine } from "react-icons/ri";
import { logoD, oval } from "../../assets";
import "./style.css";

const SidebarComponent = () => {
  return (
    <>
      <div
        className="app-container"
        style={{ backgroundColor: "red", width: "200px" }}
      >
        <Sidebar className="sidebar">
          <Menu>
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

            <MenuItem icon={<BiHome />} className="menu-item">
              {" "}
              Dashboard{" "}
            </MenuItem>
            <MenuItem icon={<RiTodoLine />}> Todo </MenuItem>
          </Menu>
        </Sidebar>
      </div>
    </>
  );
};

export default SidebarComponent;
