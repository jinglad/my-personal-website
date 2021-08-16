import React, { useState } from "react";
import Navbar from "../Home/Navbar/Navbar";
import "./ContactMe.css";
import firebase from "firebase/app";
import "firebase/firestore";
import firebaseConfig from "./firebase/firebase";

firebase.initializeApp(firebaseConfig);

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    var db = firebase.firestore();
    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        alert("Thank You for your message...!");
        console.log(name, email, message);
      })
      .catch((error) => {
        alert(error.message);
        console.log(error);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div
      className="text-center container"
      style={{ fontFamily: "'Noto Sans', sans-serif" }}
    >
      <Navbar />
      <div className="form-container">
        <h1 className="text-white mb-3">Message Me</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              onChange={(e) => setName(e.target.value)}
              className="form-control form-control-lg"
              type="text"
              value={name}
              name="name"
              placeholder="Your Name"
              id=""
            />
          </div>
          <div className="form-group">
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="form-control form-control-lg"
              type="email"
              name="email"
              placeholder="Your Email"
            />
          </div>
          <div className="form-group">
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              className="form-control form-control-lg"
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-warning">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
