"use client";
import styles from "./page.module.css";
import NavBar from "../../../../../components/NavBar/page";
import CardLink from "@/app/lead/components/Cards/page";
import LeadConversion from "../LeadConversion/page";
import LeadBar from "../LeadBar/LeadBar";
import Billing from "../BillingTable/page";
import React from "react";
import Cookies from "universal-cookie";

export default function Dash() { 
  const [leadsCard, setLeadsCard] = React.useState([
    { total: "", registered: "", pending: "", declined: "" },
  ]);
  const cookie = new Cookies({ path: "/" });
  const srId = cookie.get("srid");
  const [leaderboardTable, setLeaderboardTable] = React.useState([]);
  const [billingTable, setBillingTable] = React.useState([]);
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

  const fetchRank = async (srId) => {
    try {
      if (srId) {
        const response = await fetch("http://127.0.0.1:5000/leads_conversion");
        const data = await response.json();
        setLeaderboardTable(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const billingRank = async (srId) => {
    try {
      if (srId) {
        const response = await fetch(
          "http://127.0.0.1:5000/billing_leaderboard"
        );
        const data = await response.json();
        setBillingTable(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchData = async () => {
    await fetchLeadsCard(srId);
    await fetchRank(srId);
    await billingRank(srId);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
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
          Sales leaderboard
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
        <div
          style={{
            margin: "auto",
            width: "90%",
            padding: "2%",
            paddingTop: "1%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: "10px",
            border: "1px solid rgba(0, 0 ,0, 0.08)",
            backgroundColor: "white"
          }}
        >
          <p
            style={{
              color: "#1E1E1E",
              width: "100%",
              margin: "auto",
              fontSize: "3vh",
            }}
          >
            Lead conversion leaderboard
          </p>
          <div className={`${styles.billing__leadbar__parent}`}>
            <div className={`${styles.billing__parent}`}>
            <LeadConversion table={leaderboardTable} />
            </div>
            <div className={`${styles.leadbar__parent}`}>
              <LeadBar />
            </div>
          </div>
        </div>
        <div
          style={{
            margin: "auto",
            marginTop: "2%",
            width: "90%",
            padding: "2%",
            paddingTop: "1%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: "10px",
            border: "1px solid rgba(0, 0 ,0, 0.08)",
            backgroundColor: "white"
          }}
        >
          <p
            style={{
              fontSize: "150%",
              color: "#1E1E1E",
              width: "100%",
              margin: "auto",
              fontSize: "3vh",
            }}
          >
            Billing leaderboard
          </p>

          <div className={`${styles.billing__leadbar__parent}`}>
            <div className={`${styles.billing__parent}`}>
              <Billing
                billingTable={billingTable}
                leadsTable={leaderboardTable}
              />
            </div>
            <div className={`${styles.leadbar__parent}`}>
              <LeadBar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
