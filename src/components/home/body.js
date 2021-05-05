import React, { Component } from "react";
import "./body.css";

class Body extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <div className="h-container">
        <div className={this.state.clicked ? "mid-div dis" : "mid-div"}>
          <h1>Need help with your company site?</h1>
          <i className="fas fa-arrow-down"></i>
          <button onClick={this.handleClick}>Contact Us!</button>
        </div>
        <div className={this.state.clicked ? "pop active" : "pop"}>
          <div onClick={this.handleClick}>
            <i className="fas fa-times exit"></i>
          </div>
          <form name="contact" method="post">
            <input type="hidden" name="form-name" value="contact" />

            <h1>Contact Us!</h1>
            <h3>Fill out the form or contact us on social media.</h3>
            <div className="name width">
              <input
                required
                type="text"
                name="name"
                placeholder="Name"
              ></input>
            </div>
            <div className="email width">
              <input
                required
                type="email"
                name="email"
                placeholder="E-mail"
              ></input>
            </div>
            <div className="message width">
              <textarea
                required
                name="message"
                col="4"
                row="4"
                placeholder="Message..."
              ></textarea>
            </div>
            <div className="but width">
              <button type="submit">
                Submit <i className="fas fa-arrow-right"></i>
              </button>
            </div>
            <div className="social">
              <a href="https://www.facebook.com/BlueSwordTech">
                <i className="fa-icon fab fa-facebook-square"></i>
              </a>
              <a href="https://www.instagram.com/blueswordtech/">
                <i className="fa-icon fab fa-instagram-square"></i>
              </a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Body;
