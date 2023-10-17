import React from "react";
import { Doughnut } from "react-chartjs-2";
import "bootstrap/dist/css/bootstrap.min.css";

const Chart2 = () => {
  const data = {
    labels: ["Category A", "Category B", "Category C"],
    datasets: [
      {
        data: [30, 40, 30],
        backgroundColor: ["#f62890", "#5e37ea", "#FFF"],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
      // Center text plugin
      centerText: {
        display: true,
        text: "Center Text",
        color: "#000", // Text color
        fontStyle: "Arial",
        fontSize: 24, // Text font size
      },
    },
    scales: {
      x: {
        display: false, // Hide the x-axis
      },
      y: {
        display: false, // Hide the y-axis
      },
    },
  };

  return (
    <div className="g-4 p-4 ml-5 bg-white rounded">
        <h4>Customers</h4>
        <p className="text-secondary">Customers that can buy products.</p>
          <Doughnut data={data} options={options} />
        </div>
  );
};

export default Chart2;
