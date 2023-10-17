import React from "react";
import { Bar } from "react-chartjs-2";
import "bootstrap/dist/css/bootstrap.min.css";
import { Chart, registerables } from "chart.js";
import { AiOutlineDown } from "react-icons/ai";
import { Row, Col } from "react-bootstrap"; // Import Chart and registerables

Chart.register(...registerables); // Register the necessary components

const Chart1 = () => {
  const data = {
    labels: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ],
    datasets: [
      {
        data: [1000, 1500, 1200, 1800, 2000, 1600, 1400, 1750, 1850, 1900, 2200, 2400],
        backgroundColor: "#5a32ea",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: "category", // Use "category" for the x-axis
        beginAtZero: true,
      },
      y: {
        display: false, // Hide the y-axis
      },
    },
  };

  return (
    <div className="g-4 p-4 bg-white rounded" style={{ marginLeft: "15px" }}>
      <Row>
        <Col md={9}>
          <h4>Overview</h4>
          <p className="text-secondary">Monthly Income.</p>
        </Col>
        <Col className="my-3 bg-light py-2 rounded text-center">
          <span className="me-2">Quarterly</span>
          <AiOutlineDown />
        </Col>
      </Row>

      <Bar data={data} options={options}/>
    </div>
  );
};

export default Chart1;
