"use client";
import styles from "./page.module.css";
import { Line } from "react-chartjs-2";
import React from "react";
import { useState, useEffect, useRef, forwardRef } from "react";
import {
  Chart,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

Chart.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function Graph() {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        labels: "sales of the week",
        data: [
          0, 150, 200, 300, 200, 0, 400, 400, 250, 200, 400, 400, 410, 380,
        ],
        borderColor: "#00ACC1",
        pointBorderWidth: "0",
        tension: 0.4,
      },
    ],
  };

  const options = {
    elements: {
      point: {
        radius: 0,
      },
    },
    plugins: {
      legend: true,
    },
    scales: {
      y: {
        min: 0,
        max: 800,
        ticks: {
          stepSize: 200,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <>
      <div style={{ width: "80%" }}>
        <Line data={data} options={options}></Line>
      </div>
    </>
  );
}
