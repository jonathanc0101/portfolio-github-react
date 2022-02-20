import React from "react";
import MobileNavButtons from "./MobileNavButtons";

function toggleNav() {
  var x = document.getElementById("my-links");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

export default function NavBar() {
  return (
    <>
      {" "}
      <nav id="nav-desktop">
        <ul>
          <li>
            <a href="#welcome-section">Welcome</a>
          </li>
          <li>
            <a href="#who-am-i">Who am I</a>
          </li>
          <li>
            <a href="#desktop-section">Desktop projects</a>
          </li>
          <li>
            <a href="#web-section">Web Projects</a>
          </li>
          <li className="contact-link">
            <a href="#contact-section">Contact me</a>
          </li>
        </ul>
      </nav>
      <nav id="nav-mobile">
        <ul>
          <li>
            <a href="#article-section">My portfolio</a>
          </li>
          <li id="toggle-button">
            <a href="#" className="icon" onClick={() => toggleNav()}>
              <i className="fa fa-bars"></i>
            </a>
          </li>
        </ul>
        <MobileNavButtons></MobileNavButtons>
      </nav>
    </>
  );
}
