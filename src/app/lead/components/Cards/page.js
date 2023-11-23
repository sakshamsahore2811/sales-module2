"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function cardLink({ color1, color2, img, text, value }) {
  const router = useRouter();
  return (
    <>
      <div className={`${styles.cardLink__parent}`}>
        <div style={{ backgroundColor: color1 }} className={`${styles.upper}`}>
          <div className={`${styles.window}`}>
            <p
              style={{
                fontSize: "7vh",
                fontWeight: "700",
                marginBottom: "0%",
                color: color2,
              }}
            >
              {value}
            </p>
          </div>
          <div className={`${styles.mobile}`}>
            <p
              style={{
                fontSize: "3vh",
                fontWeight: "700",
                marginBottom: "0%",
                color: color2,
              }}
            >
              {value}
            </p>
          </div>
        </div>
        <div style={{ backgroundColor: color2 }} className={`${styles.lower}`}>
          <div className={`${styles.mobile}`}>
            <p
              style={{
                fontSize: "1.3vh",
                fontWeight: "700",
                marginBottom: "0%",
              }}
            >
              {text}
            </p>
          </div>
          <div className={`${styles.window}`}>
            <p
              style={{ fontSize: "2vh", fontWeight: "700", marginBottom: "0%" }}
            >
              {text}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
