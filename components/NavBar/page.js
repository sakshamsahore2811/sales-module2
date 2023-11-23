"use client";
import styles from "./page.module.css";
import account from "./img/account.png";
import Image from "next/image";
import Cookies from "universal-cookie";
import React, { useEffect } from "react";

export default function NavBar() {
  const cookie = new Cookies();
  const [name, setName] = React.useState("");
  React.useEffect(()=>{
    setName(cookie.get("name"));
  }, [])
  return (
    <div className={`${styles.parent}`}>
      <div className={`${styles.greetings}`}>
        <p style={{ fontSize: "3vh", color: "#1E1E1E", fontWeight: "600", marginBottom: "0px" }}>
          Hello {name}!
        </p>
        <p style={{ fontSize: "2.5vh", color: "#2B2F38", fontWeight: "400", marginBottom: "0px" }}>
          Welcome back
        </p>
      </div>
      <div className={`${styles.account}`}>
        <div className={`${styles.accountInfo}`}>
          {/* <Image src={account} className={`${styles.img}`} /> */}
        </div>
      </div>
    </div>
  );
}
