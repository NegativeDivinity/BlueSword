import React from "react";
import "./home.css";

// components
import Nav from "../components/nav/nav";
import Body from "../components/home/body";

export default function Home() {
  return (
    <div className="home">
      <Nav />
      <Body />
    </div>
  );
}
