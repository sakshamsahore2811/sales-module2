"use client";
import styles from "./page.module.css";
import SideBar from "../../../components/SideBar/page";
import Dashboard from "./components/dashboard/page";

export default function dashboard() {
  return (
    <div className={`${styles.parent}`}>
      <div className={`${styles.SideBar}`}>
        <SideBar />
      </div>
      <div className={`${styles.dashboard}`}>
        <Dashboard />
      </div>
    </div>
  );
}
