import React from "react";
import "./body.css";
import Plum from "../assets/plum.svg";
import Forest from "../assets/logo.png";
import Storage from "../assets/icon.png";
import Art from "../assets/logo.JPG";
import { Link } from "react-router-dom";

export default function Body() {
  return (
    <div>
      <div className="work-header">
        <h1> Our Work </h1>
        <h3> Click card to see more </h3>
      </div>
      <div className="work-cards">
        <div className="work-card">
          <a href="https://calhounplumbingcompany.com/">
            <img src={Plum} alt="Web design for Calhoun plumbing service" />
            <div className="card-detail">
              <h3>Calhoun's Plumbing</h3>
              <div className="status">
                <h4>Status: </h4>
                <p> In Progress </p>
              </div>
              <div className="job">
                <p>
                  Blue Sword was hired to design and build a responsive website
                  for Calhoun's Plumbing Company.
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="work-card">
          <a href="https://forestlakemotel.biz/">
            <img src={Forest} alt="Web design for Calhoun plumbing service" />
            <div className="card-detail">
              <h3>Forest Lake Motel</h3>
              <div className="status">
                <h4>Status: </h4>
                <p> Complete </p>
              </div>
              <div className="job">
                <p>
                  Blue Sword was hired to help modify information on a website
                  built with wordpress.
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="work-card">
          <a href="https://northcountrystorage.com/">
            <img src={Storage} alt="Web design for Calhoun plumbing service" />
            <div className="card-detail">
              <h3>North Country Storage</h3>
              <div className="status">
                <h4>Status: </h4>
                <p> Complete </p>
              </div>
              <div className="job">
                <p>
                  Blue Sword was hired to help modify information on a website
                  built with wordpress.
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="work-card">
          <a href="https://onlyshittyart.com/">
            <img src={Art} alt="Web design for Artist of Only shitty art" />
            <div className="card-detail">
              <h3>Only Shitty Art</h3>
              <div className="status">
                <h4>Status: </h4>
                <p> In Progress </p>
              </div>
              <div className="job">
                <p>
                  Blue Sword was hired to design and build a website for an
                  artist looking for a portfolio.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
