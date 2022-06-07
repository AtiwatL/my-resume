import React, { useState } from "react";
import "./Navbar.scss";

const Navbar = () => {
  const [isactive, setIsActive] = useState("#");
  return (
    <nav>
      <a
        href="#home"
        onClick={() => setIsActive("#")}
        className={isactive === "#" ? "active" : ""}
      >
        <i className="fa-solid fa-house"></i>
      </a>
      <a
        href="#about"
        onClick={() => setIsActive("#about")}
        className={isactive === "#about" ? "active" : ""}
      >
        <i className="fa-regular fa-user"></i>
      </a>
      <a
        href="#skills"
        onClick={() => setIsActive("#skills")}
        className={isactive === "#skills" ? "active" : ""}
      >
        <i className="fa-solid fa-book"></i>
      </a>
      <a
        href="#portfolio"
        onClick={() => setIsActive("#portfolio")}
        className={isactive === "#portfolio" ? "active" : ""}
      >
        <i className="fa-solid fa-briefcase"></i>
      </a>
    </nav>
  );
};

export default Navbar;
