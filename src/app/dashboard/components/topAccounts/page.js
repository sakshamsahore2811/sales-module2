import Image from "next/image";
import styles from "./page.module.css";
import first from "./img/1.png";
import second from "./img/2.png";
import third from "./img/3.png";

export default function TopAccounts() {
  return (
    <div className={`${styles.tableParent}`}>
      <p
        style={{
          fontSize: "3vh",
          color: "#2B2F38",
          fontWeight: "600",
          marginBottom: "1%",
        }}
      >
        Top Accounts
      </p>
      <hr
        style={{
          margin: "auto",
        }}
      />
      <table style={{ width: "100%" }}>
        <thead style={{ width: "100%" }}>
          <tr style={{ width: "100%", color: "#B9BDC7", fontWeight: "600", fontSize: "60%", padding:"5%" }}>
            <th style={{textAlign: "start"}}>Distributor name</th>
            <th>Medicines Purchased</th>
            <th>Delivery Awaiting</th>
          </tr>
        </thead>
        <tbody style={{color: "#858D9D", fontWeight: "600", fontSize: "90%"}}>
          <tr>
            <td style={{textAlign: "start"}}>
              <div className={`${styles.profile}`}>
                <Image src={first} className={`${styles.img}`} />
                John Doe
              </div>
            </td>
            <td>6000</td>
            <td>6000</td>
          </tr>
          <tr>
            <td style={{textAlign: "start"}}>
              <div className={`${styles.profile}`}>
                <Image src={second} className={`${styles.img}`} />
                John Doe
              </div>
            </td>
            <td>5150</td>
            <td>5150</td>
          </tr>
          <tr>
            <td style={{textAlign: "start"}}>
              <div className={`${styles.profile}`}>
                <Image src={third} className={`${styles.img}`} />
                John Doe
              </div>
            </td>
            <td>5150</td>
            <td>5150</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
