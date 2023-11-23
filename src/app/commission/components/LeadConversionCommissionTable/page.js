import React from "react";
import styles from "./page.module.css";
import BarGraph from "../BarGraph/page";

const Table = ({table, setCommission, srId}) => {
  const commissionData=[];
  table.forEach((item, index) => {
    if(item.srid === srId){
      setCommission(item.ratio * 100)
    }
    commissionData.push(<tr key={index}>
      <td>{item.name}</td>
      <td>{item.total}</td>
      <td>{(item.ratio * 100).toFixed(2)}</td>
    </tr>)
    ;
  });
  return (
    <div className={`${styles.table}`}>
      <table style={{ width: "100%", marginTop: "0" }}>
        <thead style={{ width: "100%", top: "0", left: "0", backgroundColor: "#F0F1F3" }}>
          <tr
            style={{
              width: "100%",
              color: "#B9BDC7",
              fontWeight: "600",
              fontSize: "2vh",
              padding: "5%",
            }}
          >
            <th>Salesperson name</th>
            <th>Total leads</th>
            <th>Commission(₹)</th>
          </tr>
        </thead>
        <tbody style={{ color: "#858D9D", fontWeight: "600", fontSize: "90%" }}>
          {commissionData}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
