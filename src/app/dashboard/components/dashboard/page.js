import styles from "./page.module.css";
import NavBar from "../../../../../components/NavBar/page";
import CardLink from "../cardLinks/page";
import myleads from "./img/myleads.png";
import myaccount from "./img/myaccount.png";
import salesleaderboard from "./img/salesleaderboard.png";
import mycommission from "./img/mycommission.png";
import Graph from "../Graph/page";
import RankCard from "../rankCard/page";
import TopAccounts from "../topAccounts/page";
import React from "react";


export default function dashboard() {


  return (
    <div className={`${styles.parent}`}>
      <NavBar />
      <div className={`${styles.cardHolder}`}>
        <div className={`${styles.cardParent}`}>
          <p
            style={{
              fontSize: "2vh",
              color: "#1E1E1E",
              fontWeight: "600",
              marginBottom: "0px",
            }}
          >
            Pharmacy
          </p>
          <div className={`${styles.card}`}>
            <CardLink
              img={myleads}
              color1="#FFDFBC"
              color2="#FF8704"
              text="My Leads"
              url="/lead"
            />
            <CardLink
              img={myaccount}
              color1="#CCDCFE"
              color2="#5088F1"
              text="My Accounts"
              url="/accounts"
            />
          </div>
        </div>
        <div className={`${styles.cardParent}`}>
          <p
            style={{
              fontSize: "2vh",
              color: "#1E1E1E",
              fontWeight: "600",
              marginBottom: "0px",
            }}
          >
            Sales
          </p>
          <div className={`${styles.card}`}>
            <CardLink
              img={salesleaderboard}
              color1="#F5CBD6"
              color2="#D8315B"
              text="Sales Leaderboard"
              url="leaderboard"
            />
            <CardLink
              img={mycommission}
              color1="#BAE8EE"
              color2="#00ACC1"
              text="My Commission"
              url="commission"
            />
          </div>
        </div>
      </div>
      <div style={{ width: "90%", margin: "auto" }}>
        <p
          style={{
            fontSize: "3vh",
            color: "#2B2F38",
            fontWeight: "600",
            marginBottom: "0px",
          }}
        >
          Dashboard
        </p>
      </div>

      <div className={`${styles.graphRankHolder}`}>
        <div className={`${styles.graph}`}>
          <div className={`${styles.graphHeader}`}>
            <p
              style={{
                fontSize: "3vh",
                color: "#222C3F",
                fontWeight: "500",
                marginBottom: "0px",
              }}
            >
              Commission earned
            </p>
            <select
              style={{
                padding: "1%",
                color: "#858D9D",
                width: "30%",
                borderRadius: "100px",
                backgroundColor: "#F0F0F0",
                border: "none",
              }}
            >
              <option value="lastmonth">Last Month</option>
              <option value="lastweek">Last Week</option>
              <option value="lastyear">Last Year</option>
            </select>
          </div>
          <Graph />
          <div className={`${styles.graphFooter}`}>
            <p
              style={{
                fontSize: "3vh",
                color: "#04C100",
                fontWeight: "500",
                marginRight: "1%",
                marginBottom: "0px",
              }}
            >
              30%
            </p>
            <div className={`d-flex flex-column`}>
              <p
                style={{
                  color: "#667085",
                  fontWeight: "500",
                  fontSize: "2vh",
                  marginBottom: "0px",
                }}
              >
                Commission earned last month
              </p>
              <p
                style={{
                  color: "#858D9D",
                  fontWeight: "400",
                  fontSize: "1.6vh",
                  marginBottom: "0px",
                }}
              >
                Rs. 4500 more than last month
              </p>
            </div>
          </div>
        </div>
        <div className={`${styles.rank}`}>
          <div className={`${styles.rankHeader}`}>
            <select
              style={{
                padding: "2%",
                color: "#858D9D",
                width: "50%",
                borderRadius: "100px",
                backgroundColor: "#F0F0F0",
                border: "none",
                marginBottom: "0px",
              }}
            >
              <option value="lastmonth">Last Month</option>
              <option value="lastweek">Last Week</option>
              <option value="lastyear">Last Year</option>
            </select>
          </div>
          <div className={`${styles.rankHolder}`}>
            <RankCard />
          </div>
        </div>
      </div>
      <div className={`${styles.topAccounts}`}>
        <TopAccounts/>
      </div>
    </div>
  );
}
