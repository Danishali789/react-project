import React from "react";
import "./header.css";

export default function Header(props) {
  return (
    <div>
      <header id="myHeader" className="header">
        <div className="logo">
          <h3>{props.title}</h3>
        </div>

        <div className="menu">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Service</a>
          <a href="#">Screenshot</a>
          <a href="#">Blog</a>
          <a href="#">Conact us</a>
        </div>
      </header>
    </div>
  );
}
