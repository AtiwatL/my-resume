import React from "react";
import "./Header.scss";
import CV from "../../assets/resume_Atiwawt.pdf";
import Profile from "../../assets/profile_rmbg.png";

const Header = () => {
  return (
    <div className="header" id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Atiwat Limpiyapirom</h1>
        <h5 className="text-light">Front-end Developer</h5>

        <div style={{ marginTop: "2.5rem" }}>
          <a href={CV} download className="btn">
            Download CV
          </a>
        </div>

        <div className="header__socials">
          <a
            href="https://www.linkedin.com/in/atiwat-limpiyapirom-81240922a/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://github.com/AtiwatL?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>

        <div className="me">
          <img src={Profile} alt="me" />
        </div>
      </div>
    </div>
  );
};

export default Header;
