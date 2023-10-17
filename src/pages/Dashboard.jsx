import React from "react";
import Info from "../Dashboard/Info";
import Navbar from "../Dashboard/Navbar";
import Prescription from "../Dashboard/Prescription";
import Chart1 from "./Chart1";
import Chart2 from "./Chart2";
import { Row, Col } from "react-bootstrap";

const Dashboard = () => {
  return (
    <div style={{ backgroundColor: "#F5F6F8", width: '100%' }}>
      <Row md={1}>
        <Row><Navbar /></Row>
        <Row><Info /></Row>
        <Row>
          <Col xs={12} md={8}><Chart1/></Col>
          <Col xs={12} md={4}><Chart2/></Col>
        </Row>
        <Row><Prescription /></Row>
        </Row>
    </div>
  );
};

export default Dashboard;
