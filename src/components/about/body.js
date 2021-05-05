import React from "react";
import "./body.css";

import Ben from "../assets/ben.jpg";
import Mike from "../assets/mike.jpg";
import Ethan from "../assets/ethan.jpg";

export default function Body() {
  return (
    <div>
      <div className="about">
        <div className="about-section">
          <h1> About Us </h1>
          <p>
            Here at Blue Sword Technologies, we are dedicated to assisting you
            with all your web development needs. Whether you need a company
            website built from the ground up or just need a web developer on
            call, we can help!
          </p>
        </div>
        <div className="our-story">
          <h1> Our Story </h1>
          <p>
            Blue Sword is a web design and development studio where talented
            staff members will exceed expectations.
          </p>
          <p>
            Our story started in the computer lab of a college campus. The
            founder of the company was working on a website for a startup
            company name Calhoun's Plumbing Co. He realized that more than just
            this start up needs a website. The founder came to his friends at
            the college with an idea to start a company that specialized in web
            design and development. As well as, doing some computer repair and
            custom setups.
          </p>
          <p>
            In 2020 we start to develop this site and start building a client
            base.
          </p>
        </div>
      </div>
      <div className="meet">
        <div className="meet-header">
          <h1> Meet the Team </h1>
          <p> The team for all your web development needs. </p>
        </div>
        <div className="cards">
          <div className="card">
            <div className="image">
              <img src={Ben} alt="CEO and Web Developer" />
            </div>
            <div className="info">
              <h1>Ben Anderson</h1>
              <h4>CEO & Web Developer</h4>
            </div>
            <div className="social">
              <a href="https://github.com/NegativeDivinity">
                <i className="fab fa-github-square"></i>
              </a>
              <a href="https://www.facebook.com/profile.php?id=100039434316371">
                <i className="fab fa-facebook-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/benjamin-anderson-a777821b9">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <img src={Mike} alt="CTO and Web Developer" />
            </div>
            <div className="info">
              <h1>Mike Bower</h1>
              <h4>CTO & Network Specialist</h4>
            </div>
            <div className="social">
              <a href="https://github.com/parttime8901">
                <i className="fab fa-github-square"></i>
              </a>
              <a href="https://www.facebook.com/bob.lucky.313">
                <i className="fab fa-facebook-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/michael-bower-7624081b7/">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <img src={Ethan} alt="Computer Reapair and customization" />
            </div>
            <div className="info">
              <h1>Ethan James</h1>
              <h4>Computer Hardware Specialist</h4>
            </div>
            <div className="social">
              <a href="">
                <i className="fab fa-github-square"></i>
              </a>
              <a href="https://www.facebook.com/profile.php?id=100018081064576">
                <i className="fab fa-facebook-square"></i>
              </a>
              <a href="">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
