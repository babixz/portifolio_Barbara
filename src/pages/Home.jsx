import React from "react";
import "../styles/Home.css";
import me from "../imgs/me.png";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <img src={me} alt="Me" />
        <h2>Bárbara Ferreira</h2>
        <div className="prompt">
          <p>
            A junior design and software developer with a passion for learning and
            creating.
          </p>
          <a className="social-media" href="https://www.linkedin.com/in/barbara-ferreira-de-oliveira-4514a1228">
            Linkledin
          </a>
          <a className="social-media" href="https://instagram.com/baah_ferreira26?igshid=OGQ5ZDc2ODk2ZA==">
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
