import React from "react";
import "./About.scss";
import Profile from "../../assets/Porfile.JPG";

const About = () => {
  return (
    <section id="about">
      <h5>let's me explain</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Profile} alt="profile" />
          </div>
        </div>

        <div className="about__content">
          <p>
            I've been in love with technology since childhood and my interest in
            robots was first and foremost. I was fascinated by the way people
            can make machines move as they want and watching Iron Man 1 made me
            love it even more. In high school, I became interested in technology
            other than robots. I find myself enjoying studying computer science
            a lot and having fun every time I do something on the computer. I
            have discovered that many programs allow us to do things like Adobe
            Photoshop that can make photos more beautiful or amazing.
          </p>
          <br />
          <p>
            Typing on the keyboard makes me feel like a hacker like in a sci-fi
            movie, which makes me feel so good. When going to university I also
            decided to enter the major. computer science And I gained a lot of
            knowledge and were able to answer questions that I wondered in my
            childhood, such as why my computer is slow, why the Facebook feed
            presents what I am interested in. After trying mini-projects in many
            subjects It made me realize that I love web development and machine
            learning. It's something that I enjoy every time I do it, but I
            chose the wrong minor to study networking instead. As I was
            graduating, I decided to gain more knowledge in web development and
            AI development and plan in the future whether to go on a web
            development path or in AI as well.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
