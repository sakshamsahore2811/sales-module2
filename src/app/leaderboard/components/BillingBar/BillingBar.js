"use client";
import React, { useState, useEffect } from "react";
import Styles from "./Style.module.css";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BillingBar = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["May", "June", "Juley"],
      datasets: [
        {
          label: "sales",
          data: [24, 18, 9],
          width: "20px",
          borderColor: "rgba(53,162,235)",
          backgroundColor: "rgba(53,162,235 ,0.5 )",
          color: "blue",
        },
      ],
    });

    setChartOptions({
      plugins: {
        Legend: {
          position: "top",
        },
        Title: {
          display: true,
          text: "Last Three Month",
        },
      },
    });
  }, []);

  return (
    <div className={Styles.Bar}>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default BillingBar;
