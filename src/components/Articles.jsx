import React from "react";
import NavBar from "./NavBar";

export default function Articles() {
  return (
    <div id="article-section">
      <NavBar></NavBar>

      <header className="header">
        <div id="welcome-section">
          <div id="p5-sketch">
            <script src="./seleccion.js"></script>
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
          in an age of stackoverflow and copy-paste. Altough this wasn't copy
          paste per se, I did not come up with any of the building blocks that
          made this website, that's the work of much, much smarter people than
          me. The people that invented HTML, CSS, javascript, etc. I just made
          the blocks fit in a way that looked nice to me.
        </p>
      </div>

      <div id="desktop-section">
        <div className="text-section">
          <h2>Desktop projects</h2>
        </div>

        <article id="desktop-projects">
          <section className="project-tile" id="turing-machine-simulator">
            <h3>
              This is a Turing machine simulator. The simplest computer that you
              could think of, this program simulates it.
            </h3>
            <p>
              It's entirely written in Python and the UI is made using the
              library Tkinter.
            </p>
            <p>
              I made it during my fundaments of computer science className
              during fall of 2020.
            </p>

            <a
              href="https://github.com/jonathanc0101/FTI--entregable-final-maquina-de-turing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://github.com/jonathanc0101/FTI--entregable-final-maquina-de-turing/blob/imagenes-y-clutter/imagenes/interfaz%202021%2011%2024.PNG?raw=true"
                alt=" program"
              />
            </a>
          </section>

          <section className="project-tile" id="government-program">
            <h3>Program for social assistance.</h3>
            <p>
              This program was made entirely free for the Chubut government in
              Argentina. It's written in an ancient language called VB.NET.
            </p>
            <a
              href="https://github.com/jonathanc0101/accionSocial"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/jonathanc0101/accionSocial/imagenesYclutter/imagenes/GrupoConviviente.PNG"
                alt=" program"
              />
            </a>
          </section>
        </article>
      </div>

      <div id="web-section">
        <div className="text-section">
          <h2>Web projects</h2>
        </div>

        <article id="projects">
          <section className="project-tile" id="product-page">
            <h3>The product landing page</h3>
            <p>
              This is an example of product page, let's not think about the fact
              that the product and the company already exist and I have nothing
              to do with them.
            </p>

            <a
              href="./product%20landing%20page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/jonathanc0101/Freecodecamp-projects/master/1st%20course/images/product%20landing%20page.PNG"
                alt=" page"
              />
            </a>
          </section>

          <section className="project-tile" id="form">
            <h3>First web form</h3>

            <p>
              This is my first web form, discovering the powerful aspect of
              padding in an input opened my eyes. It sounds funny but it's true,
              before doing this all I could imagine when i tought of an user
              interface in a form was some old grey-looking Windows form from
              the early 2000's.
            </p>

            <a href="./survey%20form" target="_blank" rel="noopener noreferrer">
              <img
                src="https://raw.githubusercontent.com/jonathanc0101/Freecodecamp-projects/master/1st%20course/images/survey%20form.PNG"
                alt=" page"
              />
            </a>
          </section>

          <section className="project-tile" id="article">
            <h3>The article</h3>
            <p>
              Sometimes I have problems falling asleep, this is the way that I
              chose to deal with that. Writing whatever keeps me up at night.
            </p>

            <a
              href="./technical%20documentation%20page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/jonathanc0101/Freecodecamp-projects/master/1st%20course/images/article.PNG"
                alt=" page"
              />
            </a>
          </section>

          <section className="project-tile" id="tribute">
            <h3>The Julius Caesar "tribute"</h3>
            <p>
              It's not really a tribute, I say some facts that do not leave his
              image pristine to say the least. I also say that he was a product
              of his time, make of this what you will.
            </p>

            <a
              href="./tribute%20to%20jc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/jonathanc0101/Freecodecamp-projects/master/1st%20course/images/tribute.PNG"
                alt=" page"
              />
            </a>
          </section>
        </article>
      </div>
    </div>
  );
}
