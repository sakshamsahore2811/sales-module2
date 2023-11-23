"use client";
import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import dashboard from "./img/dashboard.png";
import popl from "./img/popl.png";
import search from "./img/search.png";
import settings from "./img/settings.png";
import todolist from "./img/todolist.png";
import back from "./img/back.png";
import hamburger from "./img/hamburger.png";
import hamburger2 from "./img/hamburger2.png";
import logo from "./img/logo.png";
import Cookies from "universal-cookie";
import { useRouter } from "next/navigation";

export default function SideBar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const cookie = new Cookies();
  const router = useRouter();
  const logout = ()=>{
    cookie.remove("token")
    router.replace("/login");
  }
  return (
    <div className={`${styles.parent}`}>
      <div className={`${styles.window}`}>
        <div className={`${styles.upper}`}>
          <Image src={search} className={`${styles.icon}`} />
          <Image onClick={()=>{router.push("/dashboard")}} src={dashboard} className={`${styles.icon}`} />
          <Image src={todolist} className={`${styles.icon}`} />
          <Image src={popl} className={`${styles.icon}`} />
          <Image src={settings} className={`${styles.icon}`} />
        </div>
        <div className={`${styles.lower}`}>
          <Image onClick={()=>{logout();}} src={back} className={`${styles.icon}`} />
        </div>
      </div>
      <div className={`${styles.mobile}`}>
        <Image src={logo} className={`${styles.SideBar__mobile__logo}`} />
        <Image
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          src={hamburger}
          className={`${styles.SideBar__mobile__hamburger}`}
          style={{ display: isOpen ? "none" : "block" }}
        />
        <div
          // onClick={() => {
          //   setIsOpen(!isOpen);
          // }}
          className={
            isOpen
              ? `${styles.mobile__drawer__open}`
              : `${styles.mobile__drawer__closed}`
          }
        >
          <Image
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            src={hamburger2}
            className={`${styles.SideBar__mobile__hamburger__open}`}
          />
          <div className={`${styles.SideBar__mobile__navigation}`}>
            <div className={`${styles.SideBar__mobile__navigation__upper}`}>
              <div className={`${styles.navigation__list}`}>
                <Image src={search} className={`${styles.icon__mobile}`} />
                <p className={`${styles.navigation__text}`} style={{marginBottom: "0px"}}>Search</p>
              </div>
              <div onClick={()=>{router.push("/dashboard"); setIsOpen(!isOpen)}} className={`${styles.navigation__list}`}>
                <Image src={dashboard}  className={`${styles.icon__mobile}`} />
                <p className={`${styles.navigation__text}`} style={{marginBottom: "0px"}}>Dashboard</p>
              </div>
              <div className={`${styles.navigation__list}`}>
                <Image src={todolist} className={`${styles.icon__mobile}`} />
                <p className={`${styles.navigation__text}`} style={{marginBottom: "0px"}}>To do list</p>
              </div>
              <div className={`${styles.navigation__list}`}>
                <Image src={popl} className={`${styles.icon__mobile}`} />
                <p className={`${styles.navigation__text}`} style={{marginBottom: "0px"}}>Payment Overdue Pharmacy list</p>
              </div>
              <div className={`${styles.navigation__list}`}>
                <Image src={settings} className={`${styles.icon__mobile}`} />
                <p className={`${styles.navigation__text}`} style={{marginBottom: "0px"}}>Settings</p>
              </div>
            </div>
            <div className={`${styles.SideBar__mobile__navigation__lower}`}>
              <div className={`${styles.navigation__list}`}>
                <Image onClick={()=>{logout();}} src={back} className={`${styles.icon__mobile}`} />
                <p className={`${styles.navigation__text}`} style={{marginBottom: "0px"}}>Logout</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
