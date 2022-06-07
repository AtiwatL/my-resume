import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer id="footer">
      <h4 className="footer__logo">Atiwat</h4>

      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
      </ul>

      <div className="footer__copyright">
        <p>E-Mail : atiwatl2000@gmail.com</p>
        <p>Tel : (+66) 88-004-4275</p>
        <small>&copy; Atiwat Portfolio</small>
      </div>
    </footer>
  );
};

export default Footer;
