import React from "react";
import { Card, Table, Form, InputGroup, Row, Col } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";

function Product() {
  const jsonData = [
    { imageSrc: 'https://www.shutterstock.com/shutterstock/photos/2277653131/display_1500/stock-vector-collection-of-d-abstract-shape-in-cartoon-style-set-of-realistic-elements-for-design-of-various-2277653131.jpg', name: 'Abstract 3D', subname: 'some places to find 3D abstract images', stock: '32 in stock', price: '$ 4.99', sales: '20' },
    { imageSrc: 'https://www.shutterstock.com/shutterstock/photos/2048490764/display_1500/stock-photo--d-render-abstract-modern-blue-background-folded-ribbons-macro-fashion-wallpaper-with-wavy-2048490764.jpg', name: 'Sarphens Illustration', subname: 'some places to find 3D abstract images', stock: '32 in stock', price: '$ 4.99', sales: '20' },
  ];

  return (
    <div className="p-4">
      <Card className="border-0 px-3">
        <Card.Body>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <Card.Title style={{ fontSize: "1.7rem", marginTop: "1rem" }}>Product Sell</Card.Title>
            </div>
            <Row>
              <Col>
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
          </Form></Col>
            <Col className="my-3 bg-light py-2 rounded text-center"><span className="me-2">Last 30 days</span><AiOutlineDown /></Col>
            </Row>
          </div>
          <Table>
            <thead>
              <tr>
                <th style={{ fontSize: "20px", color: "gray", padding: "20px" }}>Product Name</th>
                <th style={{ fontSize: "20px", color: "gray", padding: "20px" }}>Stock</th>
                <th style={{ fontSize: "20px", color: "gray", padding: "20px" }}>Price</th>
                <th style={{ fontSize: "20px", color: "gray", padding: "20px" }}>Total Sale</th>
              </tr>
            </thead>
            <tbody>
              {jsonData.map((item, index) => (
                <tr key={index} className="custom-table-row" style={{ fontSize: "18px", color: "gray" }}>
                  <td style={{ padding: "20px" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img src={item.imageSrc} alt={item.name} style={{ width: "50px", height: "50px", marginRight: "10px" }} />
                      <div>
                        <div>{item.name}</div>
                        <div style={{ fontSize: "14px", color: "darkgray" }}>{item.subname}</div>
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: "20px" }}>{item.stock}</td>
                  <td style={{ padding: "20px" }}>{item.price}</td>
                  <td style={{ padding: "20px" }}>{item.sales}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Product;
