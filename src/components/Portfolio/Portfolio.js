import React from "react";
import "./Portfolio.scss";
import { data } from "./data.js";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Resent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github }) => (
          <article className="portfolio__item" key={id}>
            <div className="portfolio__item-image">
              <img src={image} alt="software engineer" />
            </div>
            <h3>{title}</h3>
            {github && (
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
