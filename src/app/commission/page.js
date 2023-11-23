"use client";
import styles from "./page.module.css";
import SideBar from "../../../components/SideBar/page";
import Commission from "./components/commission/page";

export default function commission() {
  return (
    <div className={`${styles.parent}`}>
      <div className={`${styles.SideBar}`}>
        <SideBar />
      </div>
      <div className={`${styles.commission}`}>
        <Commission />
      </div>
    </div>
  );
}
