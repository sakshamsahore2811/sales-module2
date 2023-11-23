"use client";
import styles from './page.module.css'
import call from '../../img/call.png'
import sub from '../../img/sub.png'
import status from '../../img/status.png'
import amt from '../../img/amt.png'
import Image from 'next/image'
import React,{ useEffect } from 'react';

export default function ProfileCards({table}){
    const data = []
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
          <div className={`${styles.ProfileCards__card}`}>
            <div className={`${styles.ProfileCards__name}`}>
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
            <div><Image className={`${styles.ProfileCards__img}`} src={call} alt="" />{item.contact_no}</div>
            <div><Image className={`${styles.ProfileCards__img}`} src={sub} alt=""/>{item.subscription_plan}</div>
            <div><Image className={`${styles.ProfileCards__img}`} src={status} alt=""/>{item.paid_status}</div>
            <div><Image className={`${styles.ProfileCards__img}`} src={amt} alt=""/>₹{item.billing_amount}/- plan</div>
          </div>
        );
      });
    
      return (
        <>
          <div className={`${styles.ProfileCards__parent}`}>
            {data}
          </div>
        </>
      );
}