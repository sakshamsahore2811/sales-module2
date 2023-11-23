"use client";
import React from "react";
import Image from "next/image";
import axios from "axios";
import styles from "./page.module.css";
import logo from "./img/logo.png";
import first from "./img/top_left.png";
import second from "./img/bottom_right.png";
import combo from "./img/combo.png";
import banner from "./img/banner.png";
import one from "./img/banner_img1.png";
import two from "./img/banner_img2.png";
import three from "./img/banner_img3.png";
import four from "./img/banner_img4.png";
import circle from "./img/circle.png";
import { useRouter } from "next/navigation";
import Cookies from "universal-cookie";
import jwt, { sign } from "jsonwebtoken";

export default function Login() {
  const [otpGenerated, setOtpGenerated] = React.useState(false);
  const [otp, setOtp] = React.useState("");
  const [isRegisteredUser, setIsRegisteredUser] = React.useState(true);
  const [phone, setPhone] = React.useState("");
  const [unauth, setUnauth] = React.useState(false);
  const [newPhone, setNewPhone] = React.useState("");
  const [newEmail, setNewEmail] = React.useState("");
  const [newAddress, setNewAddress] = React.useState("");
  const [newName, setNewName] = React.useState("");
  const [hashed, setHashed] = React.useState("");
  const [temp, setTemp] = React.useState(false);
  const router = useRouter();
  const cookie = new Cookies();

  const getSrId = async () => {
    const token = cookie.get("token");
    try {
      const response = await axios.post("http://127.0.0.1:5000/get_srid", {
        token: token,
      });
      console.log(response.data);
      if (response.data) {
        if (!response.data.message) {
          router.replace("/login");
        } else {
          const srId = response.data.srid;
          const name = response.data.name;
          cookie.set("srid", srId); //srid saved in cookie
          cookie.set("name", name); //name saved in cookie
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const signup = async (e) => {
    e.preventDefault();
    if (newPhone.length !== 10) {
      setUnauth(true);
      return;
    }
    try {
      const response = await axios.post("http://127.0.0.1:5000/signup", {
        phone: newPhone,
        name: newName,
        email: newEmail,
        address: newAddress,
      });
      console.log(response.data);
      if (response.data) {
        if (!response.data.message) {
          router.replace("/login");
        } else {
          setIsRegisteredUser(true);
          getSrId();
          router.replace("/dashboard");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const requestOtp = async (e) => {
    e.preventDefault();
    if (phone.length !== 10) {
      setUnauth(true);
      return;
    }
    try {
      const response = await axios.post("http://127.0.0.1:5000/login_otp", {
        phone: phone,
      });
      console.log(response.data);
      if (response.data) {
        if (response.data.message) {
          setOtpGenerated(response.data.message);
          setHashed(response.data.hashedContactNumber);
          setTemp(response.data.isRegisteredUser);
        }
      }
    } catch (err) {
      console.log("err from fe");
      console.log(err);
    }
  };

  const login = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://127.0.0.1:5000/login_token", {
      otp: otp,
      phone: phone,
      hashedContactNumber: hashed,
    });
    console.log(response.data);
    const token = response.data.token;
    cookie.set("token", token); //token saved in cookie

    if (temp) {
      if (response.data.message) {
        getSrId();
        router.replace("/dashboard");
      } else {
        setOtpGenerated(false);
        setOtp("");
        setPhone("");
        setUnauth(true);
        router.replace("/login");
      }
    } else {
      setIsRegisteredUser(false);
      setNewPhone(phone);
    }
  };

  return (
    <div className={`${styles.login__parent}`}>
      <div className={`${styles.login__window}`}>
        <div className={`${styles.login__left_half}`}>
          <Image src={first} className={`${styles.login__bg_img_1}`} alt="" />
          <Image src={second} className={`${styles.login__bg_img_2}`} alt="" />
          <div
            id="carouselExampleAutoplaying"
            className="carousel slide"
            data-bs-ride="carousel"
            style={{ width: "100%" }}
          >
            <div className="carousel-inner" style={{ width: "100%" }}>
              <div className="carousel-item active" style={{ width: "100%" }}>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={combo}
                    alt=""
                    className={`${styles.login__banner}`}
                  />
                </div>
                <p
                  style={{
                    width: "100%",
                    fontSize: "3vh",
                    fontWeight: "700",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  Change The Way Of Managing Your Store
                </p>
              </div>
              <div
                className="carousel-item"
                style={{ width: "100%", marginTop: "20%" }}
              >
                <p
                  style={{
                    width: "100%",
                    fontSize: "3vh",
                    fontWeight: "700",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  Easy to use Interface to manage all our tasks!
                </p>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={banner}
                    alt=""
                    className={`${styles.login__banner}`}
                  />
                </div>
              </div>
              <div className="carousel-item" style={{ width: "100%" }}>
                <p
                  style={{
                    width: "100%",
                    fontSize: "3vh",
                    fontWeight: "700",
                    textAlign: "center",
                    color: "white",
                    marginTop: "10%",
                  }}
                >
                  Next Gen B2B SaaS platform for health care professionals
                  created by IITians & IIMs
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Image
                    style={{ margin: "1%", width: "40%", objectFit: "contain" }}
                    src={one}
                    alt=""
                  />
                  <Image
                    style={{ margin: "1%", width: "40%", objectFit: "contain" }}
                    src={two}
                    alt=""
                  />
                  <Image
                    style={{ margin: "1%", width: "40%", objectFit: "contain" }}
                    src={three}
                    alt=""
                  />
                  <Image
                    style={{ margin: "1%", width: "40%", objectFit: "contain" }}
                    src={four}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.login__right_half}`}>
          <Image className={`${styles.login__logo}`} src={logo} alt="" />
          <div className={`${styles.parent__login_card}`}>
            <p
              style={{
                fontSize: "3vh",
                fontWeight: "700",
                color: "#1E1E1E",
                marginBottom: "0",
              }}
            >
              Hello There!
            </p>
            <p
              style={{
                fontSize: "2vh",
                fontWeight: "700",
                color: "#525252",
                marginBottom: "0",
              }}
            >
              Login via phone
            </p>
            {unauth ? (
              <p
                style={{
                  fontSize: "2vh",
                  fontWeight: "700",
                  color: "red",
                  marginBottom: "0",
                }}
              >
                *Invalid
              </p>
            ) : null}
            {isRegisteredUser ? (
              <div style={{ width: "100%" }}>
                {!otpGenerated ? (
                  <form
                    method="POST"
                    style={{ width: "70%", margin: "auto", marginTop: "10%" }}
                  >
                    <p
                      style={{
                        fontSize: "2vh",
                        fontWeight: "500",
                        color: "#2B2F38",
                        marginBottom: "2%",
                      }}
                    >
                      Phone
                    </p>

                    <input
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        setUnauth(false);
                      }}
                      className={`${styles.input_box}`}
                      style={{
                        height: "40px",
                        width: "100%",
                        borderRadius: "100px",
                        border: "1px solid rgba(0, 0, 0, 0.4)",
                        marginBottom: "5%",
                      }}
                    />

                    <button
                      className={`${styles.login__button}`}
                      onClick={(e) => {
                        requestOtp(e);
                      }}
                      type="submit"
                    >
                      Send OTP
                    </button>
                  </form>
                ) : (
                  <form
                    style={{ width: "70%", margin: "auto", marginTop: "10%" }}
                  >
                    <p
                      style={{
                        fontSize: "2vh",
                        fontWeight: "500",
                        color: "#2B2F38",
                        marginBottom: "2%",
                      }}
                    >
                      Enter OTP
                    </p>

                    <input
                      className={`${styles.input_box}`}
                      value={otp}
                      onChange={(e) => {
                        setOtp(e.target.value);
                      }}
                      style={{
                        height: "40px",
                        width: "100%",
                        borderRadius: "100px",
                        border: "1px solid rgba(0, 0, 0, 0.4)",
                        marginBottom: "5%",
                      }}
                    />

                    <button
                      className={`${styles.login__button}`}
                      onClick={(e) => {
                        login(e);
                      }}
                      type="submit"
                    >
                      Login
                    </button>
                  </form>
                )}
              </div>
            ) : null}

            {!isRegisteredUser ? (
              <form style={{ width: "70%", margin: "auto", marginTop: "10%" }}>
                <p
                  style={{
                    fontSize: "2vh",
                    fontWeight: "500",
                    color: "#2B2F38",
                    marginBottom: "2%",
                  }}
                >
                  Name
                </p>

                <input
                  className={`${styles.input_box}`}
                  value={newName}
                  onChange={(e) => {
                    setNewName(e.target.value);
                  }}
                  type="phone"
                  id=""
                  style={{
                    height: "40px",
                    width: "100%",
                    borderRadius: "100px",
                    border: "1px solid rgba(0, 0, 0, 0.4)",
                    marginBottom: "5%",
                  }}
                />
                <p
                  style={{
                    fontSize: "2vh",
                    fontWeight: "500",
                    color: "#2B2F38",
                    marginBottom: "2%",
                  }}
                >
                  Phone
                </p>

                <input
                  className={`${styles.input_box}`}
                  value={newPhone}
                  type="phone"
                  id=""
                  style={{
                    height: "40px",
                    width: "100%",
                    borderRadius: "100px",
                    border: "1px solid rgba(0, 0, 0, 0.4)",
                    marginBottom: "5%",
                  }}
                />

                <p
                  style={{
                    fontSize: "2vh",
                    fontWeight: "500",
                    color: "#2B2F38",
                    marginBottom: "2%",
                  }}
                >
                  Address
                </p>

                <input
                  className={`${styles.input_box}`}
                  value={newAddress}
                  onChange={(e) => {
                    setNewAddress(e.target.value);
                  }}
                  type="phone"
                  id=""
                  style={{
                    height: "40px",
                    width: "100%",
                    borderRadius: "100px",
                    border: "1px solid rgba(0, 0, 0, 0.4)",
                    marginBottom: "5%",
                  }}
                />

                <p
                  style={{
                    fontSize: "2vh",
                    fontWeight: "500",
                    color: "#2B2F38",
                    marginBottom: "2%",
                  }}
                >
                  Email
                </p>

                <input
                  className={`${styles.input_box}`}
                  value={newEmail}
                  onChange={(e) => {
                    setNewEmail(e.target.value);
                  }}
                  type="phone"
                  id=""
                  style={{
                    height: "40px",
                    width: "100%",
                    borderRadius: "100px",
                    border: "1px solid rgba(0, 0, 0, 0.4)",
                    marginBottom: "5%",
                  }}
                />

                <button
                  className={`${styles.login__button}`}
                  onClick={(e) => {
                    signup(e);
                  }}
                  type="submit"
                >
                  Signup
                </button>
              </form>
            ) : null}
          </div>
        </div>
      </div>
      <div className={`${styles.login__mobile}`}>
        <div className={`${styles.login__NavBar}`}>
          <Image src={logo} className={`${styles.logo__NavBar}`} alt="" />
        </div>
        <div style={{ width: "100%", marginTop: "15%", position: "relative" }}>
          <Image src={circle} alt="" style={{ width: "100%" }} />
          <div className={`${styles.login__mobile__card}`}>
            <p
              style={{
                fontSize: "2.5vh",
                fontWeight: "700",
                color: "#1E1E1E",
                marginBottom: "0",
              }}
            >
              Login via mobile number
            </p>
            {unauth ? (
              <p
                style={{
                  fontSize: "2vh",
                  fontWeight: "700",
                  color: "red",
                  marginBottom: "0",
                }}
              >
                *Invalid
              </p>
            ) : null}
            {isRegisteredUser ? (
              <div style={{width:"100%"}}>
                {!otpGenerated ? (
                  <form
                    style={{ width: "90%", margin: "auto", marginTop: "10%" }}
                  >
                    <p
                      style={{
                        fontSize: "2vh",
                        fontWeight: "500",
                        color: "#2B2F38",
                        marginBottom: "2%",
                      }}
                    >
                      Phone
                    </p>
                    <input
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        setUnauth(false);
                      }}
                      className={`${styles.input_box}`}
                      style={{
                        height: "40px",
                        width: "100%",
                        borderRadius: "100px",
                        border: "1px solid rgba(0, 0, 0, 0.4)",
                        marginBottom: "5%",
                      }}
                    />
                    <button
                      onClick={(e) => {
                        requestOtp(e);
                      }}
                      type="submit"
                      className={`${styles.login__button}`}
                    >
                      Send OTP
                    </button>
                  </form>
                ) : (
                  <form
                    style={{ width: "90%", margin: "auto", marginTop: "10%" }}
                  >
                    <p
                      style={{
                        fontSize: "2vh",
                        fontWeight: "500",
                        color: "#2B2F38",
                        marginBottom: "2%",
                      }}
                    >
                      OTP
                    </p>

                    <input
                      value={otp}
                      onChange={(e) => {
                        setOtp(e.target.value);
                      }}
                      className={`${styles.input_box}`}
                      style={{
                        height: "40px",
                        width: "100%",
                        borderRadius: "100px",
                        border: "1px solid rgba(0, 0, 0, 0.4)",
                        marginBottom: "5%",
                      }}
                    />

                    <button
                      onClick={(e) => {
                        login(e);
                      }}
                      type="submit"
                      className={`${styles.login__button}`}
                    >
                      Login
                    </button>
                  </form>
                )}
              </div>
            ) : null}

            {!isRegisteredUser ? (
              <form style={{ width: "90%", margin: "auto", marginTop: "10%" }}>
                <p
                  style={{
                    fontSize: "2vh",
                    fontWeight: "500",
                    color: "#2B2F38",
                    marginBottom: "2%",
                  }}
                >
                  Name
                </p>

                <input
                  className={`${styles.input_box}`}
                  value={newName}
                  onChange={(e) => {
                    setNewName(e.target.value);
                  }}
                  type="phone"
                  id=""
                  style={{
                    height: "40px",
                    width: "100%",
                    borderRadius: "100px",
                    border: "1px solid rgba(0, 0, 0, 0.4)",
                    marginBottom: "5%",
                  }}
                />
                <p
                  style={{
                    fontSize: "2vh",
                    fontWeight: "500",
                    color: "#2B2F38",
                    marginBottom: "2%",
                  }}
                >
                  Phone
                </p>

                <input
                  className={`${styles.input_box}`}
                  value={newPhone}
                  type="phone"
                  id=""
                  style={{
                    height: "40px",
                    width: "100%",
                    borderRadius: "100px",
                    border: "1px solid rgba(0, 0, 0, 0.4)",
                    marginBottom: "5%",
                  }}
                />

                <p
                  style={{
                    fontSize: "2vh",
                    fontWeight: "500",
                    color: "#2B2F38",
                    marginBottom: "2%",
                  }}
                >
                  Address
                </p>

                <input
                  className={`${styles.input_box}`}
                  value={newAddress}
                  onChange={(e) => {
                    setNewAddress(e.target.value);
                  }}
                  type="phone"
                  id=""
                  style={{
                    height: "40px",
                    width: "100%",
                    borderRadius: "100px",
                    border: "1px solid rgba(0, 0, 0, 0.4)",
                    marginBottom: "5%",
                  }}
                />

                <p
                  style={{
                    fontSize: "2vh",
                    fontWeight: "500",
                    color: "#2B2F38",
                    marginBottom: "2%",
                  }}
                >
                  Email
                </p>

                <input
                  className={`${styles.input_box}`}
                  value={newEmail}
                  onChange={(e) => {
                    setNewEmail(e.target.value);
                  }}
                  type="phone"
                  id=""
                  style={{
                    height: "40px",
                    width: "100%",
                    borderRadius: "100px",
                    border: "1px solid rgba(0, 0, 0, 0.4)",
                    marginBottom: "5%",
                  }}
                />

                <button
                  className={`${styles.login__button}`}
                  onClick={(e) => {
                    signup(e);
                  }}
                  type="submit"
                >
                  Signup
                </button>
              </form>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
