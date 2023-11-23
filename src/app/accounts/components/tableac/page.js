"use client";
import styles from "./page.module.css";
export default function Tableac({ table }) {
  const data = [];
  table.forEach((item, index) => {
    data.push(
      <tr key={index}>
        <td>{item.active_status}</td>
        <td>{item.pharmacy_name}</td>
        <td>{item.contact_no}</td>
        <td>{item.subscription_plan}</td>
        <td>{item.billing_amount}</td>
        <td style={{color: item.paid_status === "Paid"?"green":"red"}}>{item.paid_status}</td>
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
            <th>Account Status</th>
            <th>Pharmacy name</th>
            <th>Contact no</th>
            <th>Subscription plan</th>
            <th>Billing Amount</th>
            <th>Invoice Status</th>
          </tr>
        </thead>
        <tbody style={{ color: "#858D9D", fontWeight: "600", fontSize: "80%" }}>
          {data}
        </tbody>
      </table>
    </div>
  );
}
