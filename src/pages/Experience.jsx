import React from "react";
import "../styles/Experience.css";

function Experience() {
  return (
    <div className="skills">
      <h1>Experiências</h1>
      <ol className="list">
        <li className="item">
          <h2> Design</h2>
          <span>Canva, GIMP, Photoshop.</span>
        </li>
        <li className="item">
          <h2> Front-End</h2>
          <span>HTML, CSS, BootStrap.</span>
        </li>
        <li className="item">
          <h2>Back-End</h2>
          <span>PHP, MySQL, JavaScript.</span>
        </li>
        <li className="item">
          <h2>Languages</h2>
          <span>JavaScript, PHP, Java, JavaScript</span>
        </li>
      </ol>
    </div>
  );
}

export default Experience;
