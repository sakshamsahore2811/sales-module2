"use client";
import React from "react";
import Styles from "./page.module.css";
import SideBar from "../../../components/SideBar/page";
import MyLeaderboard from "./components/MyLeaderboard/page";

const page = () => {
  return (
    <div className={`${Styles.parent}`}>
      <div className={`${Styles.SideBar}`}>
        <SideBar />
      </div>
      <div className={`${Styles.dashboard}`}>
        <MyLeaderboard />
      </div>
    </div>
  );
};

export default page;
