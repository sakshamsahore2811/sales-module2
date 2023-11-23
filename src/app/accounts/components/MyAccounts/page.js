"use client";
import styles from "./page.module.css";
import NavBar from "../../../../../components/NavBar/page";
import CardLink from "@/app/lead/components/Cards/page";
import tota from "./img/1.png";
import inactive from "./img/2.png";
import overdue from "./img/3.png";
import totalbil from "./img/4.png";
import Tableac from "../tableac/page";
import one from "./img/12.png";
import two from "./img/5.png";
import three from "./img/7.png";
import four from "./img/121.png";
import React, { useEffect } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import ProfileCards from "../ProfileCards/page";

export default function dash() {
  const [accountsCard, setAccountsCard] = React.useState([
    {
      total_accounts: 0,
      overdue_accounts: 0,
      inactive_accounts: 0,
      invoice_amount: 0,
    },
  ]);

  const [accountsTable, setAccountsTable] = React.useState([]);
  const cookie = new Cookies();

  const fetchAccountsCard = async () => {
    const srId = cookie.get("srid");
    try {
      const response = await axios.post("http://127.0.0.1:5000/accounts_card", {
        srid: srId,
      });
      if (response) {
        setAccountsCard(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchAccountsTable = async () => {
    const srId = cookie.get("srid");
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/account_profiles",
        {
          srid: srId,
        }
      );
      if (response) {
        setAccountsTable(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    fetchAccountsTable();
    fetchAccountsCard();
  }, []);

  return (
    <div className={`${styles.parent}`}>
      <NavBar />
      <p
        style={{
          fontSize: "3vh",
          color: "#1E1E1E",
          fontWeight: "1000",
          width: "90%",
          margin: "auto",
          marginTop: "2%",
        }}
      >
        My Accounts
      </p>
      <div className={`${styles.cardHolder}`}>
        <CardLink
          value={accountsCard[0].total_accounts}
          color1="#FFDFBC"
          color2="#FF8704"
          text="Total Accounts"
        />
        <CardLink
          value={accountsCard[0].inactive_accounts}
          color1="#F5CBD6"
          color2="#EE404C"
          text="Inactive Accounts"
        />

        <CardLink
          value={accountsCard[0].overdue_accounts}
          color1="#B3E1E8"
          color2="#00ACC1"
          text="Overdue Accounts"
        />
        <CardLink
          value={`₹ ${accountsCard[0].invoice_amount}`}
          color1="#CCDCFE"
          color2="#5088F1"
          text="Total Billing"
        />
      </div>
      <p style={{width: "90%", margin:"auto", marginBottom: "2%", fontSize: "3vh"}}>Account Profiles</p>
      <div className={`${styles.accounts__table}`}>
        <Tableac table={accountsTable} />
      </div>
      <div className={`${styles.accounts__ProfileCards}`}>
        <ProfileCards table={accountsTable} />
      </div>
    </div>
  );
}
