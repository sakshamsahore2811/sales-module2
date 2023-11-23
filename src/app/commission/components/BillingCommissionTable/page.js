import React from "react";
import styles from "./page.module.css";
import BarGraph from "../BarGraph/page";

const BillingCommissionTable = ({billingTable, leadsTable, setCommission, srId}) => {
  const commissionData = [];
  billingTable.forEach((item, index) => {
    if(item.srid === srId){
      setCommission((item.invoice * 0.2).toFixed(2));
    }
    commissionData.push(
      <tr key={index}>
        <td>{item.name}</td>
        <td>{leadsTable[index].active}</td>
        <td>{(item.invoice * 0.2).toFixed(2)}</td>
      </tr>
    );
  });
  return (
    <div className={`${styles.table}`}>
      <table style={{ width: "100%", marginTop: "0"}}>
        <thead style={{ width: "100%",  top: "0", left: "0",backgroundColor: "#F0F1F3" }}>
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
            <th>Active accounts</th>
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

export default BillingCommissionTable;
