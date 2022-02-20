import React from "react";

function hideNav() {
  var x = document.getElementById("my-links");
  x.style.display = "none";
}

const buttonsList = [
  { href: "#welcome-section", text: "Welcome" },
  { href: "#who-am-i", text: "Who am I" },
  { href: "#desktop-section", text: "Desktop projects" },
  { href: "#web-section", text: "Web Projects" },
  { href: "#web-section", text: "Web Projects" },
];

function MobileNavButton({ href, text }) {
  return (
    <li>
      <a className="nav-button" href={href} onClick={() => hideNav()}>
        {text}
      </a>
    </li>
  );
}

function MobileNavContactButton({ classNameLi, classNameA, href }) {
  return (
    <li className={classNameLi}>
      <a className={classNameA} href={href} onClick={() => hideNav()}>
        Contact me
      </a>
    </li>
  );
}

export default function MobileNavButtons() {
  return (
    <>
      {" "}
      <div id="my-links">
        <ul>
          {buttonsList.map((button, index) => {
            return (
              <MobileNavButton
                href={button.href}
                text={button.text}
                key={index}
              ></MobileNavButton>
            );
          })}
          <MobileNavContactButton
            classNameLi="contact-link"
            classNameA="nav-button"
            href="#contact-section"
          ></MobileNavContactButton>
        </ul>
      </div>
    </>
  );
}
