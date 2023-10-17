import React, { useState } from "react";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
  FaAngleRight,
} from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { Image, Row, Col } from "react-bootstrap";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/about",
      name: "Product",
      icon: <FaUserAlt />,
      iconnew: <FaAngleRight />,
    },
    {
      path: "/analytics",
      name: "Customers",
      icon: <FaRegChartBar />,
      iconnew: <FaAngleRight />,
    },
    {
      path: "/comment",
      name: "Income",
      icon: <FaCommentAlt />,
      iconnew: <FaAngleRight />,
    },
    {
      path: "/product",
      name: "Promote",
      icon: <FaShoppingBag />,
      iconnew: <FaAngleRight />,
    },
    {
      path: "/productList",
      name: "Help",
      icon: <FaThList />,
      iconnew: <FaAngleRight />,
    },
  ];
  return (
    <div className="containers">
      <div style={{ width: isOpen ? "250px" : "70px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Dashboard
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="iconnew"
            >
              {item.iconnew}
            </div>
          </NavLink>
        ))}
        <div className="bottom-div" style={{ display: isOpen ? "block" : "none" }}>
          <Row className="mx-1 py-1 rounded colors">
            <Col xs={3}>
              <Image
                src="https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg"
                style={{
                  borderRadius: "50%",
                  height: "40px",
                  width: "40px",
                }}
              />
            </Col>
            <Col xs={7}>
              <span className="fw-bold">Evano</span> <br /> Product Mn.
            </Col>
            <Col xs={2} className="d-flex align-items-center">
              <AiOutlineDown />
            </Col>
          </Row>
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
