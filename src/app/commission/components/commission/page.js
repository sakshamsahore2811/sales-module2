import styles from "./page.module.css";
import NavBar from "../../../../../components/NavBar/page";
import CardLink from "@/app/lead/components/Cards/page";
import BarGraph from "../BarGraph/page";
import LeadConversionCommissionTable from "../LeadConversionCommissionTable/page";
import BillingCommissionTable from "../BillingCommissionTable/page";
import React from "react";
import Cookies from "universal-cookie";
import axios from "axios";

export default function commission() {
  const [accountsCard, setAccountsCard] = React.useState([
    {
      total_accounts: 0,
      overdue_accounts: 0,
      inactive_accounts: 0,
      invoice_amount: 0,
    },
  ]);
  const cookie = new Cookies({ path: "/" });
  const srId = cookie.get("srid");
  const [leaderboardTable, setLeaderboardTable] = React.useState([]);
  const [billingTable, setBillingTable] = React.useState([]);
  const [leadConversionCommission, setLeadConversionCommission] = React.useState(0);
  const [billingConversionCommission, setBillingConversionCommission] = React.useState(0);
  console.log(leaderboardTable, billingTable, srId)
  const fetchAccountsCard = async (srId) => {
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
    await fetchAccountsCard(srId);
    await fetchRank(srId);
    await billingRank(srId);
  };

  React.useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className={`${styles.parent}`}>
      <NavBar />
      <p
        style={{
          fontSize: "3vh",
          width: "90%",
          margin: "auto",
          marginTop: "2%",
          color: "#1E1E1E",
          fontWeight: "600",
          marginBottom: "0",
        }}
      >
        Commission Management
      </p>
      <div className={`${styles.cardHolder}`}>
        <CardLink
          color1="#FFDFBC"
          color2="#FF8704"
          text="Total Accounts"
          value={accountsCard[0].total_accounts}
        />
        <CardLink
          color1="#CCDCFE"
          color2="#5088F1"
          text="Overdue Accounts"
          value={accountsCard[0].overdue_accounts}
        />
        <CardLink
          color1="#F5CBD6"
          color2="#D8315B"
          text="Inactive Accounts"
          value={accountsCard[0].inactive_accounts}
        />
        <CardLink
          color1="#BAE8EE"
          color2="#00ACC1"
          text="Commission"
          value={`₹ ${parseInt(billingConversionCommission, 10) + parseInt(leadConversionCommission, 10)}`}
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
          backgroundColor: "white",
          marginBottom: "2%"
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
          Lead conversion Commission
        </p>
        <div className={`${styles.billing__leadbar__parent}`}>
          <div className={`${styles.billing__parent}`}>
            <LeadConversionCommissionTable table={leaderboardTable} setCommission={setLeadConversionCommission} srId={srId} />
          </div>
          <div className={`${styles.leadbar__parent}`}>
            <BarGraph />
          </div>
        </div>
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
          backgroundColor: "white",
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
          Billing Commission
        </p>
        <div className={`${styles.billing__leadbar__parent}`}>
          <div className={`${styles.billing__parent}`}>
            <BillingCommissionTable srId={srId} setCommission={setBillingConversionCommission} billingTable={billingTable} leadsTable={leaderboardTable} />
          </div>
          <div className={`${styles.leadbar__parent}`}>
            <BarGraph />
          </div>
        </div>
      </div>
    </div>

  );
} 
