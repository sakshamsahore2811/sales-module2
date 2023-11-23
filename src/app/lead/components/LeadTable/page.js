"use client";
import React from "react";
import styles from "./Style.module.css";
// import LeadBar from '../LeadBar/LeadBar';

const LeadTable = ({ table }) => {
  const data = [];
  table.forEach((item, index) => {
    var color;
    var bgColor;
    if (item.onboard_status === "Pending") {
      color = "#5088F1";
      bgColor = "#EEF7FF";
    } else if (item.onboard_status === "Declined") {
      color = "red";
      bgColor = "#FEF7F7" 
    } else {
      color = "green";
      bgColor = "#F0FDF4"
    }
    data.push(
      <tr key={index}>
        <td style={{ }}>
          <div
            style={{
              backgroundColor: bgColor,
              width: "100%",
              borderRadius: "20px",
              padding: "4%",
              color: color 
            }}
          >
            {item.onboard_status}
          </div>
        </td>
        <td>{item.pharmacy_name}</td>
        <td>{item.address}</td>
        <td>{item.owner_name}</td>
        <td>{item.contact_no}</td>
        <td>{item.visits}</td>
        <td>{item.last_visit}</td>
        <td>{item.remarks}</td>
      </tr>
    );
  });

  return (
    <div className={`${styles.table}`}>
      <table style={{ width: "100%", marginTop: "0" }}>
        <thead style={{ width: "100%", position: "sticky", top: "0", left: "0", backgroundColor: "#F0F1F3" }}>
          <tr
            style={{
              width: "100%",
              color: "#B9BDC7",
              fontWeight: "600",
              fontSize: "2vh",
              padding: "5%",
            }}
          >
            <th>Onboard Status</th>
            <th>Pharmacy name</th>
            <th>Address</th>
            <th>Owner name</th>
            <th>Contact number</th>
            <th>Visits</th>
            <th>Last visit</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody style={{ color: "#858D9D", fontWeight: "600", fontSize: "80%" }}>
          {data}
        </tbody>
      </table>
    </div>
  );
};

export default LeadTable;
