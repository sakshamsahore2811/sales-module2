"use client";
import styles from "./page.module.css";
import SideBar from "../../../components/SideBar/page";
import MyLeads from "./components/MyLeads/page";

export default function dashboard() {
  return (
    <div className={`${styles.parent}`}>
      <div className={`${styles.SideBar}`}>
        <SideBar />
      </div>
      <div className={`${styles.dashboard}`}>
        <MyLeads />
      </div>
    </div>
  );
}
