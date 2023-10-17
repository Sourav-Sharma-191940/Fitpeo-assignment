import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { BsArrowDownShort, BsArrowUpShort, BsFillHandbagFill  } from 'react-icons/bs';
import {BiWalletAlt} from 'react-icons/bi'
import {CgNotes} from 'react-icons/cg'
import {RiMoneyDollarCircleFill} from 'react-icons/ri'

function Info() {
  const data = [
    {
      id: 1,
      icon: <RiMoneyDollarCircleFill size={50} color="#12af55" />,
      intro: "Earning",
      value: '$ 198k',
      icons: <BsArrowUpShort size={24} color="green" />,
      growth: "37.8%",
      month: 'this month',
      color: 'green',
      bgcolor: '#deffee',
    },
    {
      id: 2,
      icon: <CgNotes size={36} color="#a301ff" />,
      intro: "Orders",
      value: '$2.4k',
      icons: <BsArrowDownShort size={24} color="red" />,
      growth: "2%",
      month: 'this month',
      color: 'red',
      bgcolor: '#e7dbff',
    },
    {
      id: 3,
      icon: <BiWalletAlt size={36} color="#0053bd" />,
      intro: "Balance",
      value: '$2.4k',
      icons: <BsArrowDownShort size={24} color="red" />,
      growth: "2%",
      month: 'this month',
      color: 'red',
      bgcolor: '#ccf2ff',
    },
    {
      id: 4,
      icon: <BsFillHandbagFill size={36} color="#dc0c23" />,
      intro: "Total Sales",
      value: '$89K',
      icons: <BsArrowUpShort size={24} color="green" />,
      growth: "11%",
      month: 'this month',
      color: 'green',
      bgcolor: '#fecbec',
    }
  ];

  return (
    <>
      <Row className="g-4 pb-4" style={{ marginLeft: "10px" }}>
        {data.map((item) => (
          <Col md={3} sm= {12} key={item.id}>
            <Card className="border-0 text-center py-3">
              <Card.Body style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ flex: "0 0 25%" }}>
                  <div
                    style={{
                      backgroundColor: `${item.bgcolor}`,
                      borderRadius: "50%",
                      width: "80px",
                      height: "80px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </div>
                </div>
                <div style={{ flex: "0 0 70%", textAlign: "left", paddingLeft: "20px" }}>
                  <div style={{ fontSize: "14px", color: "gray" }}>{item.intro}</div>
                  <div style={{ fontSize: "24px", fontWeight: "bold" }}>{item.value}</div>
                  <div style={{ display: "flex", marginLeft: '-5px', color: `${item.color}` }}>
                    {item.icons}
                    <span style={{ marginRight: "3px" }}>{item.growth}</span>
                    <span style={{ fontSize: "16px", marginLeft: "3px", color: 'black' }}>{item.month}</span>
                  </div>
                  
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Info;
