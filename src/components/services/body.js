import React from "react";
import "./body.css";

export default function Body() {
  return (
    <div className="s-wrap">
      <div className="service-head">
        <h1> Services </h1>
      </div>
      <div className="service-cards">
        <div className="service-card">
          <div className="service-card-inner">
            <div className="service-card-front">
              <h2> Website Development </h2>
            </div>
            <div className="service-card-back">
              <div className="service-description">
                <p>
                  This service will include a meeting where we will discuss the
                  general look of the website. Then one of our team members will
                  design and build your website.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="service-card">
          <div className="service-card-inner">
            <div className="service-card-front">
              <h2> Network Design </h2>
            </div>
            <div className="service-card-back">
              <div className="service-description">
                <p>
                  This service includes a scheduled appointment where one of our
                  Network Specialists will survey the area. Then they will
                  pre-configure and install all of your networking equipment.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="service-card">
          <div className="service-card-inner">
            <div className="service-card-front">
              <h2> Computer Repair </h2>
            </div>
            <div className="service-card-back">
              <div className="service-description">
                <p>
                  One of our qualified hardware technicians will run a
                  diagnostic on your computer and call to run through any
                  problems with the computer. Then you can decide if you would
                  like us to fix it.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="service-card">
          <div className="service-card-inner">
            <div className="service-card-front">
              <h2> Custom Computer </h2>
            </div>
            <div className="service-card-back">
              <div className="service-description">
                <p>
                  If you are looking to get a new computer just give us a brief
                  description of what you will be doing with it and we will
                  recommend a pre-built computer or put together a parts list
                  and build you the perfect computer.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="service-card">
          <div className="service-card-inner">
            <div className="service-card-front">
              <h2> Social Media Presents </h2>
            </div>
            <div className="service-card-back">
              <div className="service-description">
                <p>
                  One of our sales specialists will build you a social media
                  presents for your buisness. This includes anything from a
                  facebook page to twitter. (This service can be bundled with
                  your website)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
