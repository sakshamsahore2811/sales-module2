"use client";
import styles from "./page.module.css";
import NavBar from "../../../../../components/NavBar/page";
import CardLink from "../Cards/page";
import LeadTable from "../LeadTable/page";
import NewLead from "@/app/accounts/components/NewLead/page";
import Cookies from "universal-cookie";
import React from "react";
import LeadCards from "../LeadCards/page";

export default function MyLeads() {
  const [leadsCard, setLeadsCard] = React.useState([
    { total: "", registered: "", pending: "", declined: "" },
  ]);
  const [leadsTable, setLeadsTable] = React.useState([]);
  const cookie = new Cookies({ path: "/" });
  const srId = cookie.get("srid");
  const fetchLeadsCard = async (srId) => {
    try {
      if (srId) {
        const response = await fetch("http://127.0.0.1:5000/leads_card", {
          method: "POST",
          body: JSON.stringify({
            srid: srId,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
        const data = await response.json();
        setLeadsCard(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchLeadsTable = async (srId) => {
    try {
      if (srId) {
        const response = await fetch("http://127.0.0.1:5000/leads_table", {
          method: "POST",
          body: JSON.stringify({
            srid: srId,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
        const data = await response.json();
        setLeadsTable(data);
        console.log(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    fetchLeadsCard(srId);
    fetchLeadsTable(srId);
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
        My Leads
      </p>
      <div className={`${styles.cardHolder}`}>
        <CardLink
          color1="#FFDFBC"
          color2="#FF8704"
          text="Total"
          value={leadsCard[0].total}
        />
        <CardLink
          color1="#CCDCFE"
          color2="#5088F1"
          text="Registered"
          value={leadsCard[0].registered}
        />

        <CardLink
          color1="#B3E1E8"
          color2="#00ACC1"
          text="Pending"
          value={leadsCard[0].pending}
        />
        <CardLink
          color1="#FACFD2"
          color2="#EE404C"
          text="Declined"
          value={leadsCard[0].declined}
        />
      </div>
      <p style={{width: "90%", margin:"auto", marginBottom: "2%", fontSize: "3vh"}}>Your leads</p>
      <div className={`${styles.leads__leadstable}`}>
        <LeadTable table={leadsTable} />
      </div>
      <div className={`${styles.leads__leadscard}`}>
        <LeadCards table={leadsTable} />
      </div>
      <div className={`${styles.create_new_lead_parent}`}>
        <NewLead />
      </div>
    </div>
  );
}
