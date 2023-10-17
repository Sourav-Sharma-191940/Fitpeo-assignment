import React from "react";
import { Row, Col, Form, InputGroup } from "react-bootstrap";
import { FaHandPeace, FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <div
      className="px-5"
      style={{ paddingLeft: "20px", marginLeft: "25px" }}
    >
      <Row className="align-items-center">
        <Col className="fw-bold">
          <h5 className="mb-0">
            <span className='me-2'>Hello Shahrukh</span>
            <FaHandPeace style={{color: '#deb896'}}/>
          </h5>
        </Col>
        <Col md={3} xs={12}>
          <Form>
            <InputGroup className="my-3">
              <InputGroup.Text className="bg-white">
                <FaSearch />
              </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Search..."
                aria-label="Search"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Navbar;
