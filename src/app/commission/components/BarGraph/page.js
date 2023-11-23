"use client";
import { useEffect } from "react";
import styles from "./page.module.css";
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
} from "chart.js";

Chart.register(CategoryScale, LinearScale, BarElement);

const BarGraph = () => {
  const data = {
    labels: ["May", "June", "July", "August", "September"],
    datasets: [
      {
        data: [66, 44, 46, 16, 77],
        backgroundColor: [
          "#7F82FF",
          "rgb(75, 192, 192)",
          "#0042C1",
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
        ],

        borderWidth: 2,
        barThickness: 35,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className={`${styles.bar}`}>
      <Bar
        data={data}
        options={options}
        style={{ width: "35%", height: "280px", right: "-40%" }}
      />
    </div>
  );
};

export default BarGraph;
