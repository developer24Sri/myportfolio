import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Srivatsan</h2>
        <div className="prompt">
          <p>A MERN developer with a passion for learning and creating.
          </p>
          <a href="https://www.linkedin.com/in/srivatsan-m-m-274456199/"><LinkedInIcon /></a>
          <EmailIcon />
          <a href="https://github.com/developer24Sri"><GithubIcon /></a>
          </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              HTML 5, CSS 3, JavaScript(ES6)<br />  ReactJS:<br />
              Basic's(components, JSX, Pops, State, Events, Life cycle methods),<br />
              liabraries(React Router, Axios, React Hook Form, Joyride, React colourful, tsParticles), <br />
              State management tools(Redux)
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS,  ExpressJS, MongoDB(Mongoose),  MySQL
            </span>
          </li>
          <li className="item">
            <h2>Languages known</h2>
            <span>C, C++, Java</span>
          </li>
          <li className="item">
            <h2>Verison control system</h2>
            <span>Git, GitHub</span>
          </li>
          <li className="item">
            <h2>Tools</h2>
            <span>IDE: VS code, Sublime<br />Browser's: Chrome, MS Edge<br />
            Task runner: NPM</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;