"use client";
import styles from "./page.module.css";
import SideBar from "../../../components/SideBar/page";
import Dash from "./components/MyAccounts/page";
// import Table from "./components/table/page";
export default function dashboard() {
  return (
    <div className={`${styles.parent}`}>
      <div className={`${styles.SideBar}`}>
        <SideBar />
      </div>
      <div className={`${styles.dashboard}`}>
        <Dash />
      </div>
    </div>
  );
}
