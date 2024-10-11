import React from "react";
import "../style/Home.css";
import Header from "./Header";
import arow from "../../public/images/21.png";

export default function Home() {
  return (
    <div className="hero">
      <header className="navbar">
        <Header />
      </header>
      <div className="content">
        <div className="Empowering_text">
          <h1 className="container_Empowering">
            <span className="Empowering">Empowering</span> Through Creative
          </h1>
          <h1 className="container_Brands">
            <span className="highlight"> Brands Solutions </span>
          </h1>
        </div>
            <p className="description">
            We deliver cutting-edge web development, design, and marketing services that empower brands
            to create stunning and impactful digital experiences. With over 10 years of experience, our
            team is dedicated to innovation and collaboration.
            </p>
        <div className="arrow"></div>
        <div className="cta-buttons">
          <a className="btn btn-primary">Let's work together </a>
          <button className="btn btn-secondary">View projects</button>
        </div>
      </div>
    </div>
  );
}
