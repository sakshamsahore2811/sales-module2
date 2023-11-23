"use client";
import React from "react";
import styles from "./page.module.css";
import Cookies from "universal-cookie";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function NewLead() {
  const cookie = new Cookies();
  const srId = cookie.get("srid");
  const router = useRouter();
  const [form, setForm] = React.useState(false);
  const [shopName, setShopName] = React.useState("");
  const [ownerName, setOwnerName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [pincode, setPincode] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [color, setColor] = React.useState("black")

  const submit = async () => {
    //code to fetch post req to db
    const reponse = await axios.post("http://127.0.0.1:5000/create_new_lead", {
      srid: srId,
      ownerName: ownerName,
      shopName: shopName,
      address: address,
      pincode: pincode,
      phone: phone,
    });

    if (reponse.data) {
      if (reponse.data.message) {
        setColor("green")
        setMessage("Successful!");
        setForm(!form);
      }
      else{
        setColor("red");
        setMessage("Error!");
        setForm(!form)
      }
    }
  };
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row-reverse",
          alignItems: "center",
          margin: "2%",
        }}
      >
        <button
          onClick={() => {
            setForm(!form);
            setMessage("")
          }}
          style={{
            padding: "2%",
            paddingTop: "0.5%",
            paddingBottom: "0.5%",
            fontSize: "2vh",
            border: "none",
            borderRadius: "5px",
            backgroundColor: form ? "#EE404C" : "#00ACC1",
            color: "white",
          }}
        >
          {form ? "Cancel" : "Create Lead"}
        </button>
      </div>
      {form ? (
        <form className={`${styles.form_parent}`}>
          <label style={{ marginTop: "1%" }} htmlFor="">
            Shop name
          </label>
          <input
            onChange={(e) => {
              setShopName(e.target.value);
            }}
            value={shopName}
            className={`${styles.form_input}`}
          />
          <label style={{ marginTop: "1%" }} htmlFor="">
            Owner name
          </label>
          <input
            onChange={(e) => {
              setOwnerName(e.target.value);
            }}
            value={ownerName}
            className={`${styles.form_input}`}
          />
          <label style={{ marginTop: "1%" }} htmlFor="">
            Address
          </label>
          <input
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            value={address}
            className={`${styles.form_input}`}
          />
          <label style={{ marginTop: "1%" }} htmlFor="">
            Pincode
          </label>
          <input
            onChange={(e) => {
              setPincode(e.target.value);
            }}
            value={pincode}
            className={`${styles.form_input}`}
          />
          <label style={{ marginTop: "1%" }} htmlFor="">
            Contact no
          </label>
          <input
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            value={phone}
            className={`${styles.form_input}`}
          />
        </form>
      ) : null}
      {form ? (
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row-reverse",
            alignItems: "center",
            margin: "2%",
            marginTop: "0.5%",
          }}
        >
          <button
            type="submit"
            onClick={() => {
              submit();
            }}
            style={{
              padding: "1%",
              paddingTop: "0.5%",
              paddingBottom: "0.5%",
              fontSize: "2vh",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#00ACC1",
              color: "white",
            }}
          >
            Submit
          </button>
        </div>
      ) : null}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "1%",
        }}
      >
        <p style={{ fontSize: "125%", fontWeight: "600", color: color }}>{message}</p>
      </div>
    </>
  );
}
