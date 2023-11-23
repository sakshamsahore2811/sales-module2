import styles from "./page.module.css";

export default function RankCard() {
  return (
    <>
      <div className={`${styles.window}`}>
        <div className={`${styles.rankCardComponents}`}>
          <div className={`${styles.circle}`}>
            <p style={{ fontSize: "4vh", marginBottom: "0px" }}>24</p>
          </div>
          <div className={`${styles.rankCardText}`}>
            <p
              style={{
                fontWeight: "500",
                color: "#c1c1c1",
                fontSize: "2.5vh",
                marginTop: "9%",
                marginBottom: "0px",
              }}
            >
              Current Rank
            </p>
          </div>
          <div className={`${styles.rankDetails}`}>
            <div>
              <p
                style={{
                  textAlign: "center",
                  fontWeight: "500",
                  fontSize: "3vh",
                  marginTop: "9%",
                  marginBottom: "0px",
                }}
              >
                26
              </p>
              <p
                style={{
                  fontSize: "1.6vh",
                  color: "#858D9D",
                  marginTop: "9%",
                  marginBottom: "0px",
                }}
              >
                Last Month Rank
              </p>
            </div>
            <div>
              <p
                style={{
                  textAlign: "center",
                  fontWeight: "500",
                  fontSize: "3vh",
                  marginTop: "9%",
                  marginBottom: "0px",
                }}
              >
                22
              </p>
              <p
                style={{
                  fontSize: "1.6vh",
                  color: "#858D9D",
                  marginTop: "9%",
                  marginBottom: "0px",
                }}
              >
                Your Best Rank
              </p>
            </div>
          </div>
          <button className={`${styles.leaderBtn}`}>View Leaderboard</button>
        </div>
      </div>
      <div className={`${styles.mobile}`}>
        <div className={`${styles.rankCard__mobile__leftHalf}`}>
          <button className={`${styles.header__button}`}>Current Rank</button>
          <div className={`${styles.rankCircle}`}>
            <p style={{ fontSize: "2vh", marginBottom: "0px" }}>24</p>
          </div>
        </div>
        <div className={`${styles.rankCard__mobile__rightHalf}`}>
          <select
            style={{
              padding: "2%",
              color: "#858D9D",
              width: "50%",
              borderRadius: "100px",
              backgroundColor: "#F0F0F0",
              border: "none",
              width: "62%",
              marginBottom: "0px",
            }}
          >
            <option value="lastmonth">Last Month</option>
            <option value="lastweek">Last Week</option>
            <option value="lastyear">Last Year</option>
          </select>
          <div className={`${styles.rankDetails}`}>
            <div className={`${styles.rank}`}>
              <div className={`${styles.rankContainer}`}>10</div>
              <p
                style={{
                  color: "#858D9D",
                  fontSize: "1.5vh",
                  fontWeight: "600",
                  marginBottom: "0px",
                }}
              >
                Your best rank
              </p>
            </div>
            <div className={`${styles.rank}`}>
              <div className={`${styles.rankContainer}`}>22</div>
              <p
                style={{
                  color: "#858D9D",
                  fontSize: "1.5vh",
                  fontWeight: "600",
                  marginBottom: "0px",
                }}
              >
                Last month rank
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
