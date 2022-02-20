import React from "react";
import NavBar from "./NavBar";
import Projects from "./Projects";

export default function Articles() {
  return (
    <div id="article-section">
      <NavBar></NavBar>

      <header className="header">
        <div id="welcome-section">
          <div id="p5-sketch">
            <script src="https://raw.githubusercontent.com/jonathanc0101/portfolio-github-react/master/src/components/seleccion.js" />
          </div>

          <div className="text-section">
            <h1>Hello!</h1>
            <h2 className="welcome-header">
              Welcome to my portfolio of projects
            </h2>

            <p>
              Some of the projects presented here I made during year of 2020.
            </p>

            <p>
              If you want to see any project and maybe the code behind it, feel
              free to click on any image and get redirected to the page in
              question or to the github that contains the code.
            </p>
          </div>
        </div>
      </header>

      <div id="who-am-i">
        <section>
          <div className="text-section">
            <h2>Who am I</h2>
            <p>
              Hello! My name is Jonathan Cavia, I'm persuing a Computer science
              degree in the Universidad de la Patagonia San Juan Bosco. I've
              worked in a broad range of IT related labors, from installing
              cameras and surveillance systems, designing and developing
              programs for the government in VB.NET, to making educative
              demonstrational programs in Python. Now I'm currently learning web
              development and i'm liking it so far, and that's what really
              matters so I'm gonna keep going because to like computer science
              is a lifelong learning journey.
            </p>

            <h2>👋</h2>
          </div>
        </section>
      </div>

      <section className="introduction">
        <div className="quote-container">
          <p className="text">“Good artists borrow, great artists steal.”</p>
          <p className="author">-Pablo Picasso (maybe)</p>
        </div>
      </section>

      <div className="text-section">
        <h2>Introduction</h2>
        <p>
          If the quote is true, then all programmers are great artists. We live
          in an age of copy-paste. Altough this wasn't copy paste per se, I did
          not come up with any of the building blocks that made this website,
          that's the result of work done by much, much smarter people than me.
          The people that invented HTML, CSS, javascript, etc. I just made the
          blocks fit in a way that looked nice to me.
        </p>
      </div>

      <Projects></Projects>
    </div>
  );
}
