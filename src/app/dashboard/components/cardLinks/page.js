import Image from "next/image";
import styles from "./page.module.css";
import {useRouter} from "next/navigation";

export default function cardLink({ color1, color2, img, text, url }) {
  const router = useRouter();
  return (
    <>
      <div onClick={()=>{router.push(url)}} className={`${styles.cardLink__parent}`}>
        <div style={{ backgroundColor: color1 }} className={`${styles.upper}`}>
          <Image src={img} alt="" className={`${styles.img}`} />
        </div>
        <div style={{ backgroundColor: color2 }} className={`${styles.lower}`}>
          <div className={`${styles.mobile}`}>
            <p
              style={{
                fontSize: "0.85vh",
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
