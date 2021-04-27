import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import CopyrightIcon from "@material-ui/icons/Copyright";

export default function Footer() {
  return (
    <div className="footer">
      <div className="fc">
        <div className="copyright">
          <div className="logo">
            <h2>Blue Sword</h2>
          </div>
          <div className="copyrightInfo">
            <div className="copyrightTogether">
              <div className="copyrightIcon">
                <CopyrightIcon fontSize="small" />
              </div>
              <div className="copyrightLogo">
                <p> 2021 Blue Sword Technologies</p>
              </div>
            </div>
            <div className="rights">
              <p>All rights reserved.</p>
            </div>
          </div>
        </div>
        <div className="page-links">
          <ul>
            <li>
              <Link to="/about">Home</Link>
            </li>
            <li>
              <Link to="/contact">About</Link>
            </li>
            <li>
              <Link to="/financing">Work</Link>
            </li>
          </ul>
        </div>
        <div className="logo-footer"></div>
      </div>
    </div>
  );
}
