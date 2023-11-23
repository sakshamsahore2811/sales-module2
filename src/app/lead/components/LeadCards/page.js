"use client";
import styles from "./page.module.css";
import acc from '../../img/acc.png'
import balloon from '../../img/balloon.png'
import cal from '../../img/cal.png'
import call from '../../img/call.png'
import chat from '../../img/chat.png'
import map from '../../img/map.png'
import Image from "next/image";

export default function LeadCards({ table }) {
  const data = [];
  table.forEach((item, index) => {
    var color;
    var bgColor;
    if (item.onboard_status === "Pending") {
      color = "#5088F1";
      bgColor = "#EEF7FF";
    } else if (item.onboard_status === "Declined") {
      color = "red";
      bgColor = "#FEF7F7";
    } else {
      color = "green";
      bgColor = "#F0FDF4";
    }
    data.push(
      <div className={`${styles.leadscard__card}`}>
        <div className={`${styles.leadscard__name}`}>
          <p style={{marginBottom:"0"}}>{item.pharmacy_name}</p>
          <div
            style={{
              backgroundColor: bgColor,
              borderRadius: "20px",
              padding: "2%",
              color: color,
            }}
          >
            {item.onboard_status}
          </div>
        </div>
        <div><Image className={`${styles.leadscard__img}`} src={acc} alt="" />{item.owner_name}</div>
        <div><Image className={`${styles.leadscard__img}`} src={map} alt=""/>{item.address}</div>
        <div><Image className={`${styles.leadscard__img}`} src={call} alt=""/>{item.contact_no}</div>
        <div><Image className={`${styles.leadscard__img}`} src={balloon} alt=""/>{item.visits}</div>
        <div><Image className={`${styles.leadscard__img}`} src={cal} alt=""/>{item.last_visit}</div>
        <div><Image className={`${styles.leadscard__img}`} src={chat} alt=""/>{item.remarks}</div>
      </div>
    );
  });

  return (
    <>
      <div className={`${styles.leadscard__parent}`}>
        {data}
      </div>
    </>
  );
}
